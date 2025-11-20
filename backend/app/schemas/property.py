from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime


class PropertyBase(BaseModel):
    """Base property schema"""
    address: str
    city: str = "Orlando"
    state: str = "FL"
    zip_code: str
    neighborhood: Optional[str] = None
    price: float = Field(gt=0, description="Property price in USD")
    bedrooms: int = Field(ge=0, description="Number of bedrooms")
    bathrooms: float = Field(ge=0, description="Number of bathrooms")
    square_feet: Optional[int] = Field(None, ge=0, description="Square footage")
    lot_size: Optional[float] = Field(None, ge=0, description="Lot size in acres")
    year_built: Optional[int] = Field(None, ge=1800, le=2100, description="Year built")
    property_type: str = Field(default="House", description="Property type: House, Condo, Townhouse")
    property_tax: Optional[float] = Field(None, ge=0, description="Annual property tax")
    insurance_estimate: Optional[float] = Field(None, ge=0, description="Annual insurance estimate")
    hoa_fee: Optional[float] = Field(None, ge=0, description="Monthly HOA fee")
    status: str = Field(default="Available", description="Status: Available, Under Contract, Sold, Off Market")
    description: Optional[str] = None
    image_urls: Optional[List[str]] = Field(default_factory=list, description="List of image URLs")
    mls_number: Optional[str] = None


class PropertyCreate(PropertyBase):
    """Schema for creating a property"""
    pass


class PropertyUpdate(BaseModel):
    """Schema for updating a property"""
    address: Optional[str] = None
    city: Optional[str] = None
    state: Optional[str] = None
    zip_code: Optional[str] = None
    neighborhood: Optional[str] = None
    price: Optional[float] = Field(None, gt=0)
    bedrooms: Optional[int] = Field(None, ge=0)
    bathrooms: Optional[float] = Field(None, ge=0)
    square_feet: Optional[int] = Field(None, ge=0)
    lot_size: Optional[float] = Field(None, ge=0)
    year_built: Optional[int] = Field(None, ge=1800, le=2100)
    property_type: Optional[str] = None
    property_tax: Optional[float] = Field(None, ge=0)
    insurance_estimate: Optional[float] = Field(None, ge=0)
    hoa_fee: Optional[float] = Field(None, ge=0)
    status: Optional[str] = None
    description: Optional[str] = None
    image_urls: Optional[List[str]] = None
    mls_number: Optional[str] = None


class PropertyResponse(PropertyBase):
    """Schema for property response"""
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None
    listed_at: Optional[datetime] = None
    sold_at: Optional[datetime] = None
    image_urls: List[str] = Field(default_factory=list)  # Override to ensure it's always a list
    features: Optional[List[str]] = Field(default_factory=list)  # Override to ensure it's always a list

    class Config:
        from_attributes = True


class PropertyListResponse(BaseModel):
    """Schema for property list response"""
    properties: List[PropertyResponse]
    total: int
    page: int = 1
    page_size: int = 20

