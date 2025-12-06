# 🏠 Carla's Real Estate Website

**Professional real estate website for independent realtor in Orlando, Florida**

## 📋 Project Overview

This is a production-grade real estate website built with modern web technologies. It features property listings, an advanced home ownership calculator, buyer education resources, and lead generation tools.

### **Key Features**
- 🧮 **Home Ownership Calculator** - 3-year projections with property-specific data
- 🏠 **Property Listings** - Static listings with MLS integration (Phase 2)
- 📚 **Buyer Education** - Comprehensive guides for different buyer types
- 📧 **Lead Generation** - Contact forms with email notifications
- 📱 **Mobile-First** - Fully responsive design optimized for social sharing
- 🔐 **User Accounts** - Save properties and searches (Phase 2)

## 🛠️ Technology Stack

### **Frontend**
- **React 18+** with TypeScript
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **CSS Modules** - Component styling

### **Backend**
- **Python 3.10+** with FastAPI
- **PostgreSQL 14+** - Production database
- **SQLAlchemy** - ORM
- **Alembic** - Database migrations

### **Infrastructure**
- **Docker Compose** - Local development environment
- **GitHub Actions** - CI/CD pipeline
- **Redis** - Background job queue (Phase 2)

## 📦 Prerequisites

- **Node.js 18+** - [Download](https://nodejs.org/)
- **Python 3.10+** - [Download](https://www.python.org/)
- **PostgreSQL 14+** - [Download](https://www.postgresql.org/)
- **Git** - [Download](https://git-scm.com/)

## 🚀 Quick Start

### **1. Clone Repository**
```bash
git clone <repository-url>
cd carlas-website
```

### **2. Set Up Environment Variables**
```bash
# Frontend
cp frontend/.env.example frontend/.env

# Backend
cp backend/.env.example backend/.env
```

**Defaults Provided**
- `frontend/.env.example` references `http://localhost:8000` and can be used as-is for development.
- `backend/.env.example` is pre-populated with the Docker Compose PostgreSQL credentials (`carlas_user/carlas_password`) and Redis URL.

> 🔐 Update `SECRET_KEY` and any production credentials before deploying. Never commit real secrets.

### **3. Install Dependencies**
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
pip install -r requirements.txt
```

### **4. Start Development Servers**

**Option A: Docker Compose (Recommended)**
```bash
docker-compose up
```

**Option B: Manual**
```bash
# Terminal 1: Frontend
cd frontend
npm run dev

# Terminal 2: Backend
cd backend
uvicorn app.main:app --reload

# Terminal 3: Database
# Start PostgreSQL locally or use Docker
```

> ⚠️ If Node.js or Python are not installed locally, simply run `docker-compose up --build`. The containers include every toolchain required for smoke tests.

### **5. Access Application**
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:8000
- **API Docs:** http://localhost:8000/docs

## 📁 Project Structure

```
carlas-website/
├── frontend/              # React application
│   ├── public/            # Static assets
│   │   ├── fonts/         # Prata and Raleway fonts
│   │   └── images/        # Property images
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   ├── services/      # API services
│   │   └── types/         # TypeScript types
│   └── package.json
├── backend/               # FastAPI application
│   ├── app/
│   │   ├── api/           # API routes
│   │   ├── models/        # SQLAlchemy models
│   │   ├── schemas/       # Pydantic schemas
│   │   └── main.py        # FastAPI app
│   ├── alembic/           # Database migrations
│   └── requirements.txt
├── database/              # Database scripts
│   ├── migrations/        # Alembic migrations
│   └── seeds/             # Seed data
└── docker-compose.yml     # Docker setup
```

## 🔧 Development

### **Git Workflow**
- **Main Branch:** Production-ready code
- **Develop Branch:** Integration branch
- **Feature Branches:** `feature/feature-name`

### **Conventional Commits**
```
feat: Add home ownership calculator
fix: Fix property image loading
docs: Update README with setup instructions
test: Add calculator unit tests
```

### **Running Tests**
```bash
# Frontend
cd frontend
npm test

# Backend
cd backend
pytest
```

### **Linting & Formatting**
```bash
# Frontend
cd frontend
npm run lint
npm run format

# Backend
cd backend
black .
ruff check .
mypy .
```

## 📋 Development Phases

### **V1 (Launch) - Current Phase**
- ✅ Core website structure
- ✅ Home Ownership Calculator
- ✅ Static property listings
- ✅ Buyer education pages
- ✅ Contact forms
- ✅ Social sharing
- ✅ Mobile-responsive design

### **Phase 2 (After Launch)**
- User accounts & authentication
- Saved properties & searches
- MLS integration
- Advanced analytics
- Background jobs

### **Phase 3 (Future)**
- Advanced testing
- Security hardening
- Full monitoring stack
- Advanced features

## 🔐 Security

- **Environment Variables:** Never commit `.env` files
- **Secrets:** Store in secrets manager (AWS Secrets Manager, etc.)
- **HTTPS:** Required in production
- **OAuth:** Secure token storage with encryption
- **Database:** TLS connections, encrypted PII

## 📚 **Project Documentation**

### **Essential Reading:**
- **`PROJECT_INFORMATION_AND_CONTINUITY.md`** ⭐ **START HERE** - Complete project information, file structure, decisions log, and continuity tracking. **Read this file at the start of every session to know exactly where you are and what needs to be done.**
- **`PROJECT_LOG.md`** - Session-by-session log of work completed
- **`PROJECT_STATE.md`** - Quick reference for current project status
- **`CARLA_WEBSITE_MASTER_CHECKLIST.md`** - Detailed implementation checklist
- **`COMPLETE_WEBSITE_STATUS.md`** - High-level status overview

### **Setup & Deployment:**
- **`QUICK_START.md`** - Local development setup
- **`DEPLOYMENT_CHECKLIST.md`** - Deployment steps
- **`HOW_TO_EDIT_CONTENT.md`** - Guide for editing website content

### **SEO & Marketing:**
- **`SEO_OPTIMIZATION_COMPLETE.md`** - SEO implementation details
- **`GOOGLE_BUSINESS_PROFILE_SETUP.md`** - Google Business Profile setup guide
- **`GOOGLE_SEARCH_CONSOLE_SETUP.md`** - Google Search Console setup guide

---

## 📝 License

Private project - All rights reserved

## 👥 Contributors

- **Neo** - Primary Engineer
- **Jose Yacaman** - Project Owner
- **Spok (Codex)** - Verification Engineer

---

**Last Updated:** January 21, 2025  
**Status:** In Development - V1 Phase (~85% Complete)

