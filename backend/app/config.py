from pydantic_settings import BaseSettings
from typing import Optional


class Settings(BaseSettings):
    """Application settings"""
    DATABASE_URL: str = "postgresql://postgres:postgres@localhost:5432/carlas_website"
    FRONTEND_URL: str = "http://localhost:5173"
    API_HOST: str = "0.0.0.0"
    API_PORT: int = 8000
    ENVIRONMENT: str = "development"
    DEBUG: bool = True
    
    # Database pool settings
    DATABASE_POOL_SIZE: int = 5
    DATABASE_MAX_OVERFLOW: int = 10
    
    # Security (Phase 2)
    SECRET_KEY: Optional[str] = None
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # MLS Configuration
    MLS_API_URL: Optional[str] = None
    MLS_API_KEY: Optional[str] = None
    MLS_API_SECRET: Optional[str] = None
    MLS_USERNAME: Optional[str] = None
    MLS_PASSWORD: Optional[str] = None
    
    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()

