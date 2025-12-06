from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app import models, schemas

router = APIRouter(prefix="/properties", tags=["properties"])


@router.get("/", response_model=list[schemas.Property])
def list_properties(db: Session = Depends(get_db)):
    """Return all properties for V1 (static dataset)."""

    return db.query(models.Property).order_by(models.Property.price.desc()).all()


@router.get("/{slug}", response_model=schemas.Property)
def get_property(slug: str, db: Session = Depends(get_db)):
    property_instance = (
        db.query(models.Property).filter(models.Property.slug == slug).first()
    )
    if not property_instance:
        raise HTTPException(status_code=404, detail="Property not found")
    return property_instance
