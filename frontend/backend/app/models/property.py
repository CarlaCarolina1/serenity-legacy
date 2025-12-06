from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, Text
from sqlalchemy.sql import func
from app.database import Base


class Property(Base):
    __tablename__ = "properties"

    id = Column(Integer, primary_key=True, index=True)
    mls_number = Column(String, unique=True, index=True, nullable=True)
    address = Column(String, nullable=False)
    city = Column(String, nullable=False, default="Orlando")
    state = Column(String, nullable=False, default="FL")
    zip_code = Column(String, nullable=False)
    neighborhood = Column(String, nullable=True)
    
    # Property details
    price = Column(Float, nullable=False)
    bedrooms = Column(Integer, nullable=False)
    bathrooms = Column(Float, nullable=False)
    square_feet = Column(Integer, nullable=True)
    lot_size = Column(Float, nullable=True)
    year_built = Column(Integer, nullable=True)
    property_type = Column(String, nullable=False, default="House")  # House, Condo, Townhouse
    
    # Financial details
    property_tax = Column(Float, nullable=True)
    insurance_estimate = Column(Float, nullable=True)
    hoa_fee = Column(Float, nullable=True)
    
    # Status
    status = Column(String, nullable=False, default="Available")  # Available, Under Contract, Sold, Off Market
    
    # Description and images
    description = Column(Text, nullable=True)
    image_urls = Column(Text, nullable=True)  # JSON array of image URLs (stored as JSON string)
    
    # Features (stored as JSON array)
    features = Column(Text, nullable=True)  # JSON array of feature strings
    
    # Timestamps
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    listed_at = Column(DateTime(timezone=True), nullable=True)
    sold_at = Column(DateTime(timezone=True), nullable=True)

