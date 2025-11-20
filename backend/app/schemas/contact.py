from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime


class ContactSubmissionBase(BaseModel):
    """Base contact submission schema"""
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=20)
    message: str = Field(..., min_length=10, max_length=2000)
    property_id: Optional[int] = None
    interest_type: Optional[str] = Field(
        None,
        description="Type of interest: buy, sell, invest, rent, other"
    )
    submission_type: Optional[str] = Field(default="contact", description="Type: contact or appointment")
    preferred_date: Optional[str] = Field(None, description="Preferred date for appointment")
    preferred_time: Optional[str] = Field(None, description="Preferred time for appointment")


class ContactSubmissionCreate(ContactSubmissionBase):
    """Schema for creating a contact submission"""
    pass


class ContactSubmissionResponse(ContactSubmissionBase):
    """Schema for contact submission response"""
    id: int
    submitted_at: datetime
    property_id: Optional[int] = None

    class Config:
        from_attributes = True

