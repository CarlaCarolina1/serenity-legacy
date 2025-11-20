"""
MLS Sync API Endpoints

These endpoints allow syncing properties from MLS.
Note: MLS credentials must be configured in .env for these to work.
"""

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from app.database import get_db
from app.services.mls_sync import MLSSyncService

router = APIRouter()


@router.post("/mls/sync/zip/{zip_code}")
async def sync_mls_by_zip_code(
    zip_code: str,
    db: Session = Depends(get_db),
):
    """
    Sync properties from MLS for a specific zip code
    
    This endpoint fetches properties from MLS and adds/updates them in the database.
    MLS credentials must be configured in .env (MLS_API_URL, MLS_API_KEY, MLS_API_SECRET).
    """
    service = MLSSyncService(db)
    
    if not service.is_mls_configured():
        raise HTTPException(
            status_code=503,
            detail="MLS not configured. Please set MLS_API_URL, MLS_API_KEY, and MLS_API_SECRET in .env"
        )
    
    result = service.sync_properties_by_zip_code(zip_code)
    
    if not result["success"]:
        raise HTTPException(status_code=500, detail=result["message"])
    
    return result


@router.post("/mls/sync/batch")
async def sync_mls_batch(
    zip_codes: Optional[List[str]] = Query(None),
    db: Session = Depends(get_db),
):
    """
    Sync properties from MLS for multiple zip codes
    
    If zip_codes is not provided, syncs default Central Florida zip codes.
    """
    service = MLSSyncService(db)
    
    if not service.is_mls_configured():
        raise HTTPException(
            status_code=503,
            detail="MLS not configured. Please set MLS_API_URL, MLS_API_KEY, and MLS_API_SECRET in .env"
        )
    
    result = service.sync_all_properties(zip_codes)
    
    if not result["success"]:
        raise HTTPException(status_code=500, detail=result["message"])
    
    return result


@router.get("/mls/status")
async def get_mls_status(db: Session = Depends(get_db)):
    """Check if MLS is configured and ready"""
    service = MLSSyncService(db)
    return {
        "configured": service.is_mls_configured(),
        "message": "MLS is configured and ready" if service.is_mls_configured() else "MLS not configured. Please set MLS_API_URL, MLS_API_KEY, and MLS_API_SECRET in .env"
    }

