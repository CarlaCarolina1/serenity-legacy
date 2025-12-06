from datetime import datetime

from pydantic import BaseModel, Field


class PropertyBase(BaseModel):
    slug: str = Field(..., description="URL-friendly unique identifier")
    title: str
    description: str | None = None
    price: float
    beds: int
    baths: float
    square_feet: int | None = None
    city: str
    state: str
    neighborhood: str | None = None
    status: str = "Available"
    featured_image: str | None = None


class PropertyCreate(PropertyBase):
    pass


class PropertyUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    price: float | None = None
    beds: int | None = None
    baths: float | None = None
    square_feet: int | None = None
    city: str | None = None
    state: str | None = None
    neighborhood: str | None = None
    status: str | None = None
    featured_image: str | None = None


class Property(PropertyBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
