# Carla's Real Estate - Backend API

FastAPI backend for Carla's Real Estate website.

## Setup

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Configure Environment

Copy `.env.example` to `.env` and update with your settings:

```bash
cp .env.example .env
```

### 3. Set Up Database

**Option A: Using PostgreSQL (Recommended)**

1. Install PostgreSQL 14+
2. Create database:
   ```sql
   CREATE DATABASE carlas_website;
   ```
3. Update `DATABASE_URL` in `.env`

**Option B: Using SQLite (Development Only)**

Update `DATABASE_URL` in `.env`:
```
DATABASE_URL=sqlite:///./carlas_website.db
```

### 4. Run Migrations

```bash
alembic upgrade head
```

### 5. Seed Database

```bash
python database/seeds/seed_properties.py
```

### 6. Start Server

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## API Documentation

Once the server is running:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Endpoints

### Properties
- `GET /api/v1/properties` - List properties (with filters)
- `GET /api/v1/properties/{id}` - Get property by ID
- `POST /api/v1/properties` - Create property
- `PUT /api/v1/properties/{id}` - Update property
- `DELETE /api/v1/properties/{id}` - Delete property

### Contact
- `POST /api/v1/contact` - Submit contact form
- `GET /api/v1/contact/{id}` - Get contact submission

### Health
- `GET /health` - Health check

## Development

### Running Tests

```bash
pytest
```

### Code Formatting

```bash
black .
ruff check .
mypy .
```

