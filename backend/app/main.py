from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import os
from dotenv import load_dotenv

from app.api.v1 import properties, contact
from app.database import engine, Base

# Load environment variables
load_dotenv()

# Create database tables
Base.metadata.create_all(bind=engine)

# Initialize FastAPI app
app = FastAPI(
    title="Carla's Real Estate API",
    description="Backend API for Carla's Real Estate website",
    version="1.0.0",
)

# Configure CORS
frontend_url = os.getenv("FRONTEND_URL", "http://localhost:5173")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[frontend_url, "http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(properties.router, prefix="/api/v1", tags=["properties"])
app.include_router(contact.router, prefix="/api/v1", tags=["contact"])

# Include MLS router (if available)
try:
    from app.api.v1 import mls
    app.include_router(mls.router, prefix="/api/v1", tags=["mls"])
except ImportError:
    pass  # MLS router not available yet


@app.get("/")
async def root():
    """Root endpoint"""
    return {"message": "Carla's Real Estate API", "version": "1.0.0"}


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "carlas-real-estate-api"}


@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    """Global exception handler"""
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal server error", "message": str(exc)},
    )

