"""
Seed script for populating the database with initial property data
"""
import json
import sys
from pathlib import Path

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent.parent.parent))

from app.database import SessionLocal, engine
from app.models.property import Property
from app.models.contact import ContactSubmission
from app.database import Base

# Create tables
Base.metadata.create_all(bind=engine)

def seed_properties():
    """Seed properties from JSON file"""
    db = SessionLocal()
    
    try:
        # Check if properties already exist
        existing = db.query(Property).count()
        if existing > 0:
            print(f"[INFO] Database already has {existing} properties. Skipping seed.")
            return
        
        # Load Clermont House data
        seed_file = Path(__file__).parent / "clermont_house.json"
        if not seed_file.exists():
            print(f"[ERROR] Seed file not found: {seed_file}")
            return
        
        with open(seed_file, 'r') as f:
            property_data = json.load(f)
        
        # Convert image_urls and features to JSON strings
        image_urls_json = json.dumps(property_data.get("image_urls", []))
        features_json = json.dumps(property_data.get("features", []))
        
        # Create property
        property = Property(
            mls_number=property_data.get("mls_number"),
            address=property_data["address"],
            city=property_data["city"],
            state=property_data["state"],
            zip_code=property_data["zip_code"],
            neighborhood=property_data["neighborhood"],
            price=property_data["price"],
            bedrooms=property_data["bedrooms"],
            bathrooms=property_data["bathrooms"],
            square_feet=property_data.get("square_feet"),
            lot_size=property_data.get("lot_size"),
            year_built=property_data.get("year_built"),
            property_type=property_data["property_type"],
            property_tax=property_data.get("property_tax"),
            insurance_estimate=property_data.get("insurance_estimate"),
            hoa_fee=property_data.get("hoa_fee"),
            status=property_data["status"],
            description=property_data.get("description"),
            image_urls=image_urls_json,
            features=features_json,
        )
        
        db.add(property)
        db.commit()
        db.refresh(property)
        
        print(f"[OK] Seeded property: {property.address} (ID: {property.id})")
        
    except Exception as e:
        print(f"[ERROR] Failed to seed properties: {e}")
        db.rollback()
        raise
    finally:
        db.close()


if __name__ == "__main__":
    print("Seeding database...")
    seed_properties()
    print("Done!")

