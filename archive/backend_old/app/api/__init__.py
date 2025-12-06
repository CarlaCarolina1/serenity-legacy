from fastapi import APIRouter

from app.api.v1 import property as property_routes

api_router = APIRouter(prefix="/api")
api_router.include_router(property_routes.router, prefix="/v1")
