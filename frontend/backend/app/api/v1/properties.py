from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import Optional, List
from app.database import get_db
from app.models.property import Property
from app.schemas.property import PropertyResponse, PropertyCreate, PropertyUpdate, PropertyListResponse

router = APIRouter()


@router.get("/properties", response_model=PropertyListResponse)
async def get_properties(
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
    neighborhood: Optional[str] = None,
    zip_code: Optional[str] = None,
    min_price: Optional[float] = Query(None, ge=0),
    max_price: Optional[float] = Query(None, ge=0),
    bedrooms: Optional[int] = Query(None, ge=0),
    bathrooms: Optional[float] = Query(None, ge=0),
    property_type: Optional[str] = None,
    status: Optional[str] = None,
    mls_source: Optional[str] = None,  # 'mls' or 'manual'
    db: Session = Depends(get_db),
):
    """Get list of properties with optional filters"""
    import json
    query = db.query(Property)
    
    # Apply filters
    if neighborhood:
        query = query.filter(Property.neighborhood.ilike(f"%{neighborhood}%"))
    if zip_code:
        query = query.filter(Property.zip_code == zip_code)
    if min_price:
        query = query.filter(Property.price >= min_price)
    if max_price:
        query = query.filter(Property.price <= max_price)
    if bedrooms:
        query = query.filter(Property.bedrooms >= bedrooms)
    if bathrooms:
        query = query.filter(Property.bathrooms >= bathrooms)
    if property_type:
        query = query.filter(Property.property_type == property_type)
    if status:
        query = query.filter(Property.status == status)
    if mls_source:
        if mls_source == 'mls':
            query = query.filter(Property.mls_number.isnot(None))
        elif mls_source == 'manual':
            query = query.filter(Property.mls_number.is_(None))
    
    # Get total count
    total = query.count()
    
    # Apply pagination
    offset = (page - 1) * page_size
    properties = query.order_by(Property.created_at.desc()).offset(offset).limit(page_size).all()
    
    # Parse image_urls and features from JSON strings
    for prop in properties:
        if prop.image_urls:
            try:
                prop.image_urls = json.loads(prop.image_urls)
            except:
                prop.image_urls = []
        else:
            prop.image_urls = []
        
        if prop.features:
            try:
                prop.features = json.loads(prop.features)
            except:
                prop.features = []
        else:
            prop.features = []
    
    return PropertyListResponse(
        properties=properties,
        total=total,
        page=page,
        page_size=page_size,
    )


@router.get("/properties/{property_id}", response_model=PropertyResponse)
async def get_property(property_id: int, db: Session = Depends(get_db)):
    """Get a single property by ID"""
    import json
    property = db.query(Property).filter(Property.id == property_id).first()
    if not property:
        raise HTTPException(status_code=404, detail="Property not found")
    
    # Parse image_urls and features from JSON strings
    if property.image_urls:
        try:
            property.image_urls = json.loads(property.image_urls)
        except:
            property.image_urls = []
    else:
        property.image_urls = []
    
    if property.features:
        try:
            property.features = json.loads(property.features)
        except:
            property.features = []
    else:
        property.features = []
    
    return property


@router.post("/properties", response_model=PropertyResponse, status_code=201)
async def create_property(property_data: PropertyCreate, db: Session = Depends(get_db)):
    """Create a new property"""
    import json
    # Convert image_urls and features lists to JSON strings
    image_urls_json = None
    if property_data.image_urls:
        image_urls_json = json.dumps(property_data.image_urls)
    
    features_json = None
    if property_data.features:
        features_json = json.dumps(property_data.features)
    
    db_property = Property(
        **property_data.model_dump(exclude={"image_urls", "features"}),
        image_urls=image_urls_json,
        features=features_json,
    )
    db.add(db_property)
    db.commit()
    db.refresh(db_property)
    
    # Parse back to lists for response
    if db_property.image_urls:
        db_property.image_urls = json.loads(db_property.image_urls)
    else:
        db_property.image_urls = []
    
    if db_property.features:
        db_property.features = json.loads(db_property.features)
    else:
        db_property.features = []
    
    return db_property


@router.put("/properties/{property_id}", response_model=PropertyResponse)
async def update_property(
    property_id: int,
    property_data: PropertyUpdate,
    db: Session = Depends(get_db),
):
    """Update a property"""
    import json
    property = db.query(Property).filter(Property.id == property_id).first()
    if not property:
        raise HTTPException(status_code=404, detail="Property not found")
    
    # Update fields
    update_data = property_data.model_dump(exclude_unset=True)
    if "image_urls" in update_data and update_data["image_urls"]:
        update_data["image_urls"] = json.dumps(update_data["image_urls"])
    if "features" in update_data and update_data["features"]:
        update_data["features"] = json.dumps(update_data["features"])
    
    for field, value in update_data.items():
        setattr(property, field, value)
    
    db.commit()
    db.refresh(property)
    
    # Parse back to lists for response
    if property.image_urls:
        property.image_urls = json.loads(property.image_urls)
    else:
        property.image_urls = []
    
    if property.features:
        property.features = json.loads(property.features)
    else:
        property.features = []
    
    return property


@router.delete("/properties/{property_id}", status_code=204)
async def delete_property(property_id: int, db: Session = Depends(get_db)):
    """Delete a property"""
    property = db.query(Property).filter(Property.id == property_id).first()
    if not property:
        raise HTTPException(status_code=404, detail="Property not found")
    
    db.delete(property)
    db.commit()
    return None

