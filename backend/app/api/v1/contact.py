from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.contact import ContactSubmission
from app.schemas.contact import ContactSubmissionCreate, ContactSubmissionResponse

router = APIRouter()


@router.post("/contact", response_model=ContactSubmissionResponse, status_code=201)
async def submit_contact(
    contact_data: ContactSubmissionCreate,
    db: Session = Depends(get_db),
):
    """Submit a contact form"""
    db_contact = ContactSubmission(**contact_data.model_dump())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    
    # TODO: Send email notification to Carla via Gmail API
    # This will be implemented in Phase 2 with background jobs
    
    return db_contact


@router.get("/contact/{contact_id}", response_model=ContactSubmissionResponse)
async def get_contact(contact_id: int, db: Session = Depends(get_db)):
    """Get a contact submission by ID"""
    contact = db.query(ContactSubmission).filter(ContactSubmission.id == contact_id).first()
    if not contact:
        raise HTTPException(status_code=404, detail="Contact submission not found")
    return contact

