"""
MLS Sync Service

This service handles syncing properties from MLS (Multiple Listing Service) 
to our database. It's designed to work with RESO Web API or RETS.

When Carla gets MLS credentials, configure them in .env:
- MLS_API_URL
- MLS_API_KEY
- MLS_API_SECRET
"""

import os
import json
import logging
from typing import List, Optional, Dict, Any
from datetime import datetime
from sqlalchemy.orm import Session
from app.models.property import Property

logger = logging.getLogger(__name__)


class MLSSyncService:
    """Service for syncing properties from MLS"""
    
    def __init__(self, db: Session):
        self.db = db
        self.mls_api_url = os.getenv("MLS_API_URL")
        self.mls_api_key = os.getenv("MLS_API_KEY")
        self.mls_api_secret = os.getenv("MLS_API_SECRET")
        self.mls_username = os.getenv("MLS_USERNAME")
        self.mls_password = os.getenv("MLS_PASSWORD")
        # Configured if we have either API key OR username/password
        self.is_configured = bool(
            (self.mls_api_url and self.mls_api_key) or 
            (self.mls_username and self.mls_password)
        )
    
    def is_mls_configured(self) -> bool:
        """Check if MLS credentials are configured"""
        return self.is_configured
    
    def sync_properties_by_zip_code(self, zip_code: str) -> Dict[str, Any]:
        """
        Sync properties from MLS for a specific zip code
        
        Args:
            zip_code: Zip code to fetch properties for
            
        Returns:
            Dict with sync results (added, updated, errors)
        """
        if not self.is_configured:
            logger.warning("MLS not configured. Please set MLS_API_URL, MLS_API_KEY in .env")
            return {
                "success": False,
                "message": "MLS not configured",
                "added": 0,
                "updated": 0,
                "errors": []
            }
        
        try:
            # Fetch properties from MLS API
            mls_properties = self._fetch_mls_properties(zip_code)
            
            added = 0
            updated = 0
            errors = []
            
            for mls_prop in mls_properties:
                try:
                    result = self._sync_single_property(mls_prop)
                    if result == "added":
                        added += 1
                    elif result == "updated":
                        updated += 1
                except Exception as e:
                    logger.error(f"Error syncing property {mls_prop.get('mls_number')}: {str(e)}")
                    errors.append({
                        "mls_number": mls_prop.get("mls_number"),
                        "error": str(e)
                    })
            
            return {
                "success": True,
                "message": f"Synced {added + updated} properties for zip code {zip_code}",
                "added": added,
                "updated": updated,
                "errors": errors
            }
        
        except Exception as e:
            logger.error(f"Error syncing properties for zip code {zip_code}: {str(e)}")
            return {
                "success": False,
                "message": f"Error syncing properties: {str(e)}",
                "added": 0,
                "updated": 0,
                "errors": [{"error": str(e)}]
            }
    
    def sync_all_properties(self, zip_codes: Optional[List[str]] = None) -> Dict[str, Any]:
        """
        Sync properties from MLS for multiple zip codes
        
        Args:
            zip_codes: List of zip codes to sync. If None, syncs all configured zip codes
            
        Returns:
            Dict with overall sync results
        """
        if not self.is_configured:
            return {
                "success": False,
                "message": "MLS not configured"
            }
        
        # Default zip codes for Central Florida if none provided
        if zip_codes is None:
            zip_codes = [
                "34736",  # Groveland/Clermont
                "34711",  # Clermont
                "34747",  # Kissimmee
                "34746",  # Kissimmee
                "34734",  # Groveland
                "34761",  # Minneola
                "34787",  # Windermere
                "32819",  # Orlando
                "32821",  # Orlando
                "32827",  # Orlando
            ]
        
        total_added = 0
        total_updated = 0
        all_errors = []
        
        for zip_code in zip_codes:
            result = self.sync_properties_by_zip_code(zip_code)
            if result["success"]:
                total_added += result["added"]
                total_updated += result["updated"]
                all_errors.extend(result["errors"])
            else:
                all_errors.append({
                    "zip_code": zip_code,
                    "error": result["message"]
                })
        
        return {
            "success": True,
            "message": f"Synced {total_added + total_updated} properties across {len(zip_codes)} zip codes",
            "added": total_added,
            "updated": total_updated,
            "errors": all_errors
        }
    
    def _fetch_mls_properties(self, zip_code: str) -> List[Dict[str, Any]]:
        """
        Fetch properties from Stellar MLS API for a zip code
        
        Supports both API key authentication and username/password authentication.
        
        Args:
            zip_code: Zip code to fetch properties for
            
        Returns:
            List of property dictionaries from MLS
        """
        import requests
        from requests.auth import HTTPBasicAuth
        
        logger.info(f"Fetching Stellar MLS properties for zip code {zip_code}")
        
        try:
            # Stellar MLS typically uses MLS Grid or Bridge API
            # Try MLS Grid first (most common for Stellar MLS)
            api_url = self.mls_api_url or "https://api.mlsgrid.com/v2"
            
            # Build authentication
            auth = None
            headers = {"Content-Type": "application/json"}
            
            if self.mls_api_key and self.mls_api_secret:
                # API key authentication
                auth = HTTPBasicAuth(self.mls_api_key, self.mls_api_secret)
            elif self.mls_username and self.mls_password:
                # Username/password authentication
                auth = HTTPBasicAuth(self.mls_username, self.mls_password)
            else:
                logger.error("No MLS authentication credentials provided")
                return []
            
            # Query properties by zip code
            # Stellar MLS uses RESO Web API standard
            params = {
                "$filter": f"PostalCode eq '{zip_code}'",
                "$select": "*",
                "$top": 1000  # Limit results
            }
            
            # Make API request
            response = requests.get(
                f"{api_url}/Property",
                params=params,
                auth=auth,
                headers=headers,
                timeout=30
            )
            
            if response.status_code == 200:
                data = response.json()
                # RESO Web API returns data in "value" array
                properties = data.get("value", [])
                logger.info(f"Fetched {len(properties)} properties from Stellar MLS for zip {zip_code}")
                return properties
            elif response.status_code == 401:
                logger.error("MLS authentication failed - check credentials")
                return []
            else:
                logger.error(f"MLS API error: {response.status_code} - {response.text}")
                return []
                
        except requests.exceptions.RequestException as e:
            logger.error(f"Error connecting to Stellar MLS API: {str(e)}")
            return []
        except Exception as e:
            logger.error(f"Unexpected error fetching MLS properties: {str(e)}")
            return []
    
    def _sync_single_property(self, mls_property: Dict[str, Any]) -> str:
        """
        Sync a single property from MLS to our database
        
        Args:
            mls_property: Property data from MLS
            
        Returns:
            "added" if new property, "updated" if existing property was updated
        """
        mls_number = mls_property.get("mls_number")
        if not mls_number:
            raise ValueError("MLS property missing mls_number")
        
        # Check if property already exists
        existing = self.db.query(Property).filter(
            Property.mls_number == mls_number
        ).first()
        
        # Map MLS data to our Property model
        property_data = self._map_mls_to_property(mls_property)
        
        if existing:
            # Update existing property
            for key, value in property_data.items():
                setattr(existing, key, value)
            existing.updated_at = datetime.utcnow()
            self.db.commit()
            return "updated"
        else:
            # Create new property
            new_property = Property(**property_data)
            self.db.add(new_property)
            self.db.commit()
            return "added"
    
    def _map_mls_to_property(self, mls_property: Dict[str, Any]) -> Dict[str, Any]:
        """
        Map MLS property data to our Property model format
        
        Args:
            mls_property: Raw property data from MLS
            
        Returns:
            Dictionary with Property model fields
        """
        # Map MLS fields to our Property model
        # This mapping will need to be adjusted based on actual MLS API response structure
        
        image_urls = mls_property.get("photos", []) or []
        if isinstance(image_urls, str):
            try:
                image_urls = json.loads(image_urls)
            except:
                image_urls = []
        
        return {
            "mls_number": mls_property.get("mls_number"),
            "address": mls_property.get("address", ""),
            "city": mls_property.get("city", "Orlando"),
            "state": mls_property.get("state", "FL"),
            "zip_code": mls_property.get("zip_code", ""),
            "neighborhood": mls_property.get("neighborhood"),
            "price": float(mls_property.get("price", 0)),
            "bedrooms": int(mls_property.get("bedrooms", 0)),
            "bathrooms": float(mls_property.get("bathrooms", 0)),
            "square_feet": mls_property.get("square_feet"),
            "lot_size": mls_property.get("lot_size"),
            "year_built": mls_property.get("year_built"),
            "property_type": mls_property.get("property_type", "House"),
            "property_tax": mls_property.get("property_tax"),
            "insurance_estimate": mls_property.get("insurance_estimate"),
            "hoa_fee": mls_property.get("hoa_fee"),
            "status": self._map_mls_status(mls_property.get("status", "Available")),
            "description": mls_property.get("description"),
            "image_urls": json.dumps(image_urls) if image_urls else None,
            "features": json.dumps(mls_property.get("features", [])) if mls_property.get("features") else None,
        }
    
    def _map_mls_status(self, mls_status: str) -> str:
        """Map MLS status to our status values"""
        status_map = {
            "Active": "Available",
            "Pending": "Under Contract",
            "Sold": "Sold",
            "Withdrawn": "Off Market",
            "Expired": "Off Market",
            "Cancelled": "Off Market",
        }
        return status_map.get(mls_status, "Available")
    
    def get_property_by_mls_number(self, mls_number: str) -> Optional[Property]:
        """Get a property by MLS number"""
        return self.db.query(Property).filter(
            Property.mls_number == mls_number
        ).first()


def sync_mls_properties_by_zip(db: Session, zip_code: str) -> Dict[str, Any]:
    """Convenience function to sync MLS properties for a zip code"""
    service = MLSSyncService(db)
    return service.sync_properties_by_zip_code(zip_code)

