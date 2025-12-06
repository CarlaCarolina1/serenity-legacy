from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.sql import func
from app.database import Base


class ContactSubmission(Base):
    __tablename__ = "contact_submissions"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(255), nullable=False, index=True)
    phone = Column(String(20), nullable=True)
    message = Column(Text, nullable=False)
    property_id = Column(Integer, ForeignKey("properties.id"), nullable=True)
    interest_type = Column(String(50), nullable=True)  # buy, sell, invest, rent, other
    submission_type = Column(String(20), nullable=False, default="contact")  # contact, appointment
    preferred_date = Column(String(50), nullable=True)  # For appointments
    preferred_time = Column(String(20), nullable=True)  # For appointments
    
    # Timestamps
    submitted_at = Column(DateTime(timezone=True), server_default=func.now())

