# ✅ CARLA'S REAL ESTATE WEBSITE: MASTER CHECKLIST (VERSION 2)

**Document Version:** 2.1  
**Project Start Date/Time:** November 6, 2025 at 10:41 PM  
**Last Updated Date/Time:** November 6, 2025 at 11:42 PM  
**Project Duration:** Started November 6, 2025 at 10:41 PM - Duration: In Planning Phase  
**Author:** Neo (Primary Engineer)  
**Collaborators:** Jose Yacaman, Codex (Spok - Verification Engineer)  
**Working Version:** Version 2.1  
**Status:** IN PROGRESS - React-first architecture with mandatory backend and PostgreSQL  
**Purpose:** Detailed implementation checklist with three-box verification system for building Carla's real estate website with production-grade architecture  
**Development Strategy:** Phased approach - V1 launch with core features, then iterate with additional features

---

## 📝 VERSION HISTORY

### Version 2.1 - November 6, 2025 at 11:42 PM
- **PHASED DEVELOPMENT STRATEGY:** V1 launch with core features, then iterate
- **V1 FEATURES MARKED:** Core website, calculator, static listings, buyer education, contact forms
- **FUTURE FEATURES MARKED:** User accounts, MLS integration, advanced analytics (Phase 2/3)
- **SPOK RECOMMENDATIONS:** All recommendations incorporated and marked by phase
- **FEATURE PRIORITY LIST:** Created comprehensive feature list document for Jose's review

### Version 2.0 - November 6, 2025 at 11:20 PM
- **MAJOR ARCHITECTURE UPDATE:** React-first architecture (replacing vanilla JS)
- **MANDATORY BACKEND:** Python backend is now core requirement (not optional)
- **PRODUCTION DATABASE:** PostgreSQL replaces SQLite for scalability
- **AUTOMATED TESTING:** Full test automation framework required
- **REALISTIC TIMELINE:** Updated to 100-150 hours (from 25-35 hours)
- **SPOK RECOMMENDATIONS:** Incorporated all verification engineer requirements
- **CONTINUITY FOCUS:** Plan designed for multi-session development

### Version 1.0 - November 6, 2025 at 10:41 PM
- Initial creation of Carla's Website Master Checklist
- All phases broken down into detailed tasks
- Three-box verification system applied
- Module overviews included
- Test requirements specified
- Review checkpoints defined
- **NOTE:** Version 1.0 saved to Review/Carla's website/Version 1/ for reference

---

## 📋 CHECKLIST LEGEND

### **Three-Box Verification System**
- `[x][ ][ ]` = **Created** - Task/item implemented
- `[x][x][ ]` = **Created + Tested** - Implemented and tested by engineer AI (Neo)
- `[x][x][x]` = **Created + Tested + Verified** - Implemented, tested by Neo, and independently verified by secondary AI/human (Spok/Jose)

### **Task Status**
- `[ ]` = Not started
- `[x]` = Complete (with appropriate checkmarks)

### **Module Overview Format**
Each module includes:
- **What We're Creating:** Clear description
- **How It Functions:** Technical implementation
- **How It Fits:** Integration with whole project (body part analogy)

---

## 🎯 PROJECT OVERVIEW

### **Project Goal**
Build a complete, production-ready real estate website for Carla (Jose's wife), an independent realtor in Orlando, Florida. The website will generate leads, showcase properties, and provide valuable tools (calculator, buyer guides) to help clients make informed decisions.

### **Key Requirements**
- **Primary Goal:** Lead generation + showcase listings
- **Design:** Match PDF design (80% match), use Prata and Raleway fonts
- **Mobile-First:** Optimized for Facebook/Instagram sharing
- **Features:** Advanced calculator, user accounts, MLS integration, buyer education
- **Ownership:** We own the code, no monthly fees, full control
- **Architecture:** React frontend + Python backend + PostgreSQL database
- **Quality:** Production-grade, no corners cut, full automation testing
- **CRITICAL - NO PLACEHOLDERS:** All buttons, links, forms, and features must be fully functional. No fake data, no placeholder text, no non-functional elements. Every button must work, every link must navigate correctly, every form must submit successfully. This is a working website, not a prototype.

### **Technology Stack (LOCKED DECISIONS)**
- **Frontend:** React 18+ with TypeScript, Vite build tool
- **Backend:** Python FastAPI (mandatory, not optional)
- **Database:** PostgreSQL 14+ (production-grade, not SQLite)
- **State Management:** React Context API or Zustand
- **Routing:** React Router v6
- **API Communication:** RESTful API with FastAPI
- **Authentication:** OAuth 2.0 (Facebook/Google) + JWT tokens
- **Testing:** Jest + React Testing Library (frontend), pytest (backend)
- **Hosting:** Custom server with PostgreSQL (full control)

### **Project Structure (React-First)**
```
carlas-website/
├── frontend/                    # React application
│   ├── public/                   # Static assets
│   │   ├── fonts/                # Prata and Raleway fonts
│   │   └── images/               # Property images, logos
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── Calculator/
│   │   │   ├── PropertyCard/
│   │   │   ├── PropertyDetail/
│   │   │   ├── SearchFilters/
│   │   │   └── Navigation/
│   │   ├── pages/                # Page components (React Router)
│   │   │   ├── Home.tsx
│   │   │   ├── SearchProperties.tsx
│   │   │   ├── PropertyDetail.tsx
│   │   │   └── BuyerGuides/
│   │   ├── hooks/                # Custom React hooks
│   │   ├── services/             # API service functions
│   │   ├── context/              # React Context providers
│   │   ├── utils/                # Utility functions
│   │   └── types/                # TypeScript type definitions
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── backend/                      # Python FastAPI application
│   ├── app/
│   │   ├── api/                  # API route handlers
│   │   │   ├── auth.py
│   │   │   ├── properties.py
│   │   │   ├── calculator.py
│   │   │   └── users.py
│   │   ├── models/               # SQLAlchemy models
│   │   ├── schemas/              # Pydantic schemas
│   │   ├── services/             # Business logic
│   │   ├── database/             # Database setup
│   │   └── main.py               # FastAPI app
│   ├── alembic/                  # Database migrations
│   ├── tests/                    # Backend tests
│   ├── requirements.txt
│   └── .env.example
├── database/                     # PostgreSQL setup
│   ├── migrations/              # Alembic migration files
│   └── seeds/                    # Seed data
├── tests/                        # Integration tests
├── .gitignore
├── README.md
└── docker-compose.yml            # Optional: for local development
```

---

## 📋 TABLE OF CONTENTS

1. [Infrastructure Setup](#infrastructure) 🔴 V1
2. [React Application Foundation](#react-foundation) 🔴 V1
3. [Backend API Foundation](#backend-foundation) 🔴 V1
4. [Database Setup & Migrations](#database) 🔴 V1
5. [Background Jobs & Integrations](#background-jobs) 🟡 Phase 2
6. [Home Ownership Calculator](#calculator) 🔴 V1 ⭐ KEY FEATURE
7. [Property Search & Display](#property-search) 🔴 V1 (Static Listings)
8. [User Accounts & Authentication](#user-accounts) 🟡 Phase 2
9. [Buyer Education Pages](#buyer-education) 🔴 V1
10. [MLS Integration](#mls-integration) 🟡 Phase 2
11. [Social Sharing & Tracking](#social-sharing) 🔴 V1 (Basic) / 🟡 Phase 2 (Advanced)
12. [Lead Generation Features](#lead-generation) 🔴 V1
13. [Mobile Optimization](#mobile-optimization) 🔴 V1
14. [SEO & Performance](#seo-performance) 🔴 V1
15. [Testing & Quality Assurance](#testing) 🔴 V1 (Basic) / 🟡 Phase 2 (Advanced)
16. [Deployment & Production](#deployment) 🔴 V1

**Legend:**
- 🔴 **V1** = Launch with initial version
- 🟡 **Phase 2** = Add after v1 is live
- 🟢 **Phase 3** = Future enhancements

---

# 🔧 INFRASTRUCTURE SETUP

## **Module: Development Environment & Version Control**

**What We're Creating:** Complete development environment with Git, Node.js, Python, and PostgreSQL  
**How It Functions:** Sets up project structure, installs dependencies, configures version control, establishes environment variables  
**How It Fits:** This is the foundation - without this, nothing else can be built. Like preparing the construction site before building a house.

### **Tasks:**
- `[ ][ ][ ]` Initialize Git repository with proper .gitignore
- `[ ][ ][ ]` Define Git branching strategy (main, develop, feature/*) and document conventional commit rules in README
- `[ ][ ][ ]` Verify Node.js version (18+ required, document in README)
- `[ ][ ][ ]` Verify Python version (3.10+ required, document in README)
- `[ ][ ][ ]` Verify PostgreSQL version (14+ required, document in README)
- `[ ][ ][ ]` Create project folder structure (frontend/, backend/, database/)
- `[ ][ ][ ]` Copy Prata font files to frontend/public/fonts/Prata/
- `[ ][ ][ ]` Copy Raleway font files to frontend/public/fonts/Raleway/
- `[ ][ ][ ]` Copy Clermont House images from Jessie House/ to frontend/public/images/clermont-house/
- `[ ][ ][ ]` Create frontend/package.json with React, TypeScript, Vite dependencies
- `[ ][ ][ ]` Create backend/requirements.txt with FastAPI, SQLAlchemy, PostgreSQL dependencies
- `[ ][ ][ ]` Create .env.example files (frontend and backend)
- `[ ][ ][ ]` Create .gitignore (exclude .env, node_modules/, __pycache__, .venv/)
- `[ ][ ][ ]` Configure docker-compose.yml for frontend, backend, PostgreSQL, and Redis (job queue) to keep dev/staging parity
- `[ ][ ][ ]` Add CI/CD workflow (GitHub Actions) that runs lint, test, and build on every push and pull request
- `[ ][ ][ ]` Extract color scheme from PDF design
- `[ ][ ][ ]` Document color palette (hex codes, usage) in design system
- `[ ][ ][ ]` Create README.md with project overview, setup instructions, tech stack
- `[ ][ ][ ]` Set up environment variable handling (.env files, never commit secrets)
- `[ ][ ][ ]` Verify all assets are accessible

**Test Requirements:**
- Unit test: Verify all folders created correctly
- Integration test: Dependencies install correctly (npm install, pip install)
- Version test: All required versions documented and verified
- Security test: .gitignore excludes sensitive files (.env, secrets)

**Review Checkpoint:** ✅ Infrastructure verified before proceeding to React setup

**Notes:**
- **SPOK REQUIREMENT:** Document exact Node.js, Python, PostgreSQL versions in README
- **SPOK REQUIREMENT:** .env files must NEVER be committed (verify .gitignore)
- Clermont House images are in "Jessie House" folder - rename to "clermont-house" for consistency
- Extract exact colors from PDF for brand consistency
- Environment variables: API keys, database URLs, OAuth secrets stored in .env (not in code)

---

# ⚛️ REACT APPLICATION FOUNDATION

## **Module 1: React Project Setup**

**What We're Creating:** React 18+ application with TypeScript and Vite  
**How It Functions:** Vite provides fast development server, TypeScript ensures type safety, React Router handles navigation  
**How It Fits:** This is the frontend skeleton - the React app structure that holds all components and pages. Without this, we can't build the UI.

### **Tasks:**
- `[ ][ ][ ]` Initialize React project with Vite (npm create vite@latest)
- `[ ][ ][ ]` Configure TypeScript (tsconfig.json with strict mode)
- `[ ][ ][ ]` Install React Router v6
- `[ ][ ][ ]` Install state management library (Zustand or Context API)
- `[ ][ ][ ]` Install UI library dependencies (if using any)
- `[ ][ ][ ]` Configure ESLint + Prettier + Stylelint (TypeScript aware) and add lint scripts to package.json
- `[ ][ ][ ]` Set up Storybook (or Ladle) for documenting shared UI components
- `[ ][ ][ ]` Set up CSS architecture (CSS Modules or styled-components)
- `[ ][ ][ ]` Configure Vite for font loading (Prata, Raleway)
- `[ ][ ][ ]` Create base component structure (Layout, Header, Footer, Navigation)
- `[ ][ ][ ]` Set up React Router with route definitions
- `[ ][ ][ ]` Create page components (Home, SearchProperties, PropertyDetail, etc.)
- `[ ][ ][ ]` Add error boundary component
- `[ ][ ][ ]` Set up API service layer (axios or fetch wrapper)
- `[ ][ ][ ]` Configure environment variables (VITE_API_URL, etc.)
- `[ ][ ][ ]` Test React dev server starts correctly
- `[ ][ ][ ]` Test hot module replacement (HMR) works

**Test Requirements:**
- Unit test: React app builds successfully
- Integration test: Dev server starts and routes work
- Type test: TypeScript compiles without errors
- Performance test: Initial load <2 seconds in dev mode

**Review Checkpoint:** ✅ React foundation complete before adding components

**Notes:**
- **LOCKED DECISION:** React 18+ with TypeScript (no vanilla JS)
- Vite replaces the "HTML Preview Tool" from Version 1 (React dev server is better)
- Use React Router for navigation (not separate HTML files)
- TypeScript strict mode for type safety

## **Module 2: Design System & Styling**

**What We're Creating:** Complete CSS styling system with fonts, colors, and responsive design  
**How It Functions:** CSS custom properties, mobile-first approach, responsive breakpoints, React component styling  
**How It Fits:** This is the skin - it makes everything beautiful and matches Carla's brand. Without CSS, the website is just plain React components.

### **Tasks:**
- `[ ][ ][ ]` Create CSS variables file (colors, fonts, spacing)
- `[ ][ ][ ]` Add Prata font (@font-face for headings)
- `[ ][ ][ ]` Add Raleway font (@font-face for body text)
- `[ ][ ][ ]` Add color palette (from PDF design) as CSS variables
- `[ ][ ][ ]` Create responsive breakpoints (mobile, tablet, desktop)
- `[ ][ ][ ]` Add base typography styles (headings, body, links)
- `[ ][ ][ ]` Create button component styles (primary, secondary, CTA)
- `[ ][ ][ ]` Create form component styles (inputs, textareas, selects)
- `[ ][ ][ ]` Create card component styles (property cards, info cards)
- `[ ][ ][ ]` Create navigation component styles (top right buttons + main menu)
- `[ ][ ][ ]` Optimize font loading (preload, font-display: swap)
- `[ ][ ][ ]` Test fonts load correctly in browser
- `[ ][ ][ ]` Test colors match PDF design
- `[ ][ ][ ]` Test responsive breakpoints (320px, 375px, 414px, 768px, 1024px, 1280px, 1920px)

**Test Requirements:**
- Unit test: CSS validates (no errors)
- Visual test: Matches PDF design (80% match)
- Responsive test: Works on all screen sizes
- Performance test: CSS loads quickly (<1 second)
- Font test: Prata and Raleway load correctly

**Review Checkpoint:** ✅ Design system complete before building components

**Notes:**
- Mobile-first approach (start with mobile, add desktop styles)
- Use CSS Grid and Flexbox for layouts
- Test on real devices if possible
- Optimize font loading (preload, font-display: swap)

## **Module 3: Core React Components**

**What We're Creating:** Reusable React components (Navigation, Layout, PropertyCard, etc.)  
**How It Functions:** Component-based architecture, props for customization, TypeScript interfaces  
**How It Fits:** This is the building blocks - reusable components that make up all pages. Without good components, we duplicate code everywhere.

### **Tasks:**
- `[ ][ ][ ]` Create Layout component (Header, Footer, main content area)
- `[ ][ ][ ]` Create Navigation component (top right buttons + main menu)
- `[ ][ ][ ]` Create PropertyCard component (displays property info)
- `[ ][ ][ ]` Create Button component (reusable button with variants)
- `[ ][ ][ ]` Create Input component (reusable form input)
- `[ ][ ][ ]` Create Modal component (for popups, calculator, etc.)
- `[ ][ ][ ]` Create LoadingSpinner component
- `[ ][ ][ ]` Create ErrorMessage component
- `[ ][ ][ ]` Add TypeScript interfaces for all component props
- `[ ][ ][ ]` Test all components render correctly
- `[ ][ ][ ]` Test components are responsive
- `[ ][ ][ ]` Test components handle edge cases (empty data, errors)

**Test Requirements:**
- Unit test: All components render without errors
- Integration test: Components work together
- Visual test: Components match design
- Responsive test: Components work on all screen sizes
- Type test: TypeScript interfaces are correct

**Review Checkpoint:** ✅ Core components complete before building pages

**Notes:**
- Use TypeScript for all component props
- Make components reusable and composable
- Handle loading and error states
- Test components in isolation

---

# 🐍 BACKEND API FOUNDATION

## **Module 1: FastAPI Application Setup**

**What We're Creating:** Python FastAPI backend application with proper structure  
**How It Functions:** FastAPI provides REST API endpoints, SQLAlchemy handles database, Pydantic validates data  
**How It Fits:** This is the backend skeleton - the API that serves data to the React frontend. Without this, the frontend has no data source.

### **Tasks:**
- `[ ][ ][ ]` Initialize FastAPI application (main.py)
- `[ ][ ][ ]` Set up project structure (api/, models/, schemas/, services/)
- `[ ][ ][ ]` Install dependencies (FastAPI, SQLAlchemy, PostgreSQL driver, Pydantic)
- `[ ][ ][ ]` Configure CORS (allow React frontend origin)
- `[ ][ ][ ]` Set up environment variables (.env file, never commit)
- `[ ][ ][ ]` Create database connection (SQLAlchemy engine)
- `[ ][ ][ ]` Set up logging (structured logging for production)
- `[ ][ ][ ]` Create health check endpoint (/health)
- `[ ][ ][ ]` Set up error handling middleware
- `[ ][ ][ ]` Configure API documentation (Swagger/OpenAPI)
- `[ ][ ][ ]` Configure formatting and linting (Black, Ruff, mypy) plus pre-commit hooks
- `[ ][ ][ ]` Test API server starts correctly
- `[ ][ ][ ]` Test health check endpoint

**Test Requirements:**
- Unit test: FastAPI app starts successfully
- Integration test: Health check endpoint works
- Security test: CORS configured correctly
- Documentation test: API docs accessible

**Review Checkpoint:** ✅ Backend foundation complete before adding database

**Notes:**
- **MANDATORY:** Backend is required (not optional)
- Use FastAPI for modern Python async support
- Environment variables for all secrets (database URL, API keys)
- Structured logging for debugging and monitoring

## **Module 2: Database Models & Schemas**

**What We're Creating:** SQLAlchemy models and Pydantic schemas for all data structures  
**How It Functions:** SQLAlchemy models define database tables, Pydantic schemas validate API requests/responses  
**How It Fits:** This is the data layer - it defines how data is stored and validated. Without this, we can't persist user data or properties.

### **Tasks:**
- `[ ][ ][ ]` Create User model (id, email, password_hash, oauth_provider, created_at, etc.)
- `[ ][ ][ ]` Create Property model (id, mls_id, address, price, beds, baths, etc.)
- `[ ][ ][ ]` Create SavedProperty model (user_id, property_id, saved_at)
- `[ ][ ][ ]` Create SavedSearch model (user_id, search_criteria, created_at)
- `[ ][ ][ ]` Create CalculatorResult model (user_id, property_id, inputs, results, saved_at)
- `[ ][ ][ ]` Create ContactSubmission model (name, email, message, property_id, submitted_at)
- `[ ][ ][ ]` Create Pydantic schemas for all models (request/response validation)
- `[ ][ ][ ]` Set up relationships between models (foreign keys)
- `[ ][ ][ ]` Add indexes for performance (user_id, property_id, etc.)
- `[ ][ ][ ]` Test models can be created
- `[ ][ ][ ]` Test relationships work correctly

**Test Requirements:**
- Unit test: All models can be instantiated
- Integration test: Models can be saved to database
- Relationship test: Foreign keys work correctly
- Schema test: Pydantic validation works

**Review Checkpoint:** ✅ Database models complete before migrations

**Notes:**
- Use SQLAlchemy for ORM (object-relational mapping)
- Pydantic for API validation (type safety)
- Add indexes for frequently queried fields
- Set up relationships properly (cascade deletes, etc.)

---

# 🗄️ DATABASE SETUP & MIGRATIONS

## **Module: PostgreSQL Database & Migrations**

**What We're Creating:** PostgreSQL database with Alembic migrations for schema management  
**How It Functions:** PostgreSQL stores all data, Alembic manages schema changes as code  
**How It Fits:** This is the data storage - production-grade database that scales. Without this, we can't store user accounts, saved properties, or any persistent data.

### **Tasks:**
- `[ ][ ][ ]` Install PostgreSQL 14+ (local development)
- `[ ][ ][ ]` Create database (carlas_website)
- `[ ][ ][ ]` Set up Alembic for migrations
- `[ ][ ][ ]` Create initial migration (all tables from models)
- `[ ][ ][ ]` Run migration to create database schema
- `[ ][ ][ ]` Create seed data script (Clermont House property, test user)
- `[ ][ ][ ]` Test database connection from backend
- `[ ][ ][ ]` Test migrations can be rolled back
- `[ ][ ][ ]` Document database setup in README
- `[ ][ ][ ]` Set up database backup strategy (SPOK REQUIREMENT)
- `[ ][ ][ ]` Create data export functionality (SPOK REQUIREMENT)
- `[ ][ ][ ]` Enforce TLS connections + certificate validation between FastAPI and PostgreSQL
- `[ ][ ][ ]` Encrypt sensitive columns (PII) using pgcrypto or application-level encryption
- `[ ][ ][ ]` Store database credentials in secrets manager and document rotation cadence
- `[ ][ ][ ]` Schedule and document quarterly full-restore disaster recovery drills

**Test Requirements:**
- Unit test: Database connection works
- Integration test: Migrations run successfully
- Data test: Seed data loads correctly
- Backup test: Backup and restore works

**Review Checkpoint:** ✅ Database setup complete before building API endpoints

**Notes:**
- **MANDATORY:** PostgreSQL (not SQLite) for production scalability
- **SPOK REQUIREMENT:** Database backups must be automated
- **SPOK REQUIREMENT:** Data export functionality for user data portability
- Encrypt PII columns and force TLS for every DB connection
- DR drills must prove RPO/RTO objectives (see Deployment section)
- Use Alembic for all schema changes (never manual SQL)
- Document migration process in README

---

# 🔁 BACKGROUND JOBS & INTEGRATIONS

## **Module 1: Async Workers & Scheduler**

**What We're Creating:** Dedicated background worker service plus managed scheduler for MLS syncs, Gmail notifications, and backup verification (runs outside the main API server)  
**How It Functions:** Celery/RQ workers connect to Redis via docker-compose locally and deploy as a separate service or serverless job in production; Cloud Scheduler/EventBridge triggers recurring MLS sync, backup verification, and digest emails  
**How It Fits:** This is the automation layer - it keeps MLS data fresh, runs Gmail notifications, and executes backups without blocking the API.

### **Tasks:**
- `[ ][ ][ ]` Add Redis service to docker-compose for local job queue
- `[ ][ ][ ]` Configure Celery or RQ worker container (separated from FastAPI app)
- `[ ][ ][ ]` Create worker entrypoints for MLS sync, Gmail notifications, and backup verification jobs
- `[ ][ ][ ]` Provision managed scheduler (e.g., AWS EventBridge, GCP Cloud Scheduler) to trigger cron jobs in production
- `[ ][ ][ ]` Implement secure worker authentication (API keys/service accounts)
- `[ ][ ][ ]` Configure Gmail API OAuth credentials for sending contact-form emails (no SMTP passwords)
- `[ ][ ][ ]` Implement retry/backoff logic for failed MLS/API calls
- `[ ][ ][ ]` Log every job run with correlation IDs and expose metrics to monitoring/alerting stack
- `[ ][ ][ ]` Add automated alerts for job failures or MLS data older than 24 hours
- `[ ][ ][ ]` Document worker deployment steps separate from API server

**Test Requirements:**
- Unit test: Worker tasks execute in isolation
- Integration test: Scheduler triggers jobs successfully
- Resilience test: Failed jobs retry with exponential backoff
- Monitoring test: Job metrics/alerts visible in dashboard

**Notes:**
- Jobs run on separate infrastructure (per Jose’s requirement) to keep the API responsive
- Gmail notifications must use OAuth tokens stored in secrets manager (never passwords)
- MLS sync job should fan out per board rate limits and respect caching strategy
- Backup verification job restores the latest snapshot into a disposable database to prove recoverability

---

# 🧮 HOME OWNERSHIP CALCULATOR

## **Module 1: Calculator Core (React Component)**

**What We're Creating:** Advanced mortgage calculator React component with 3-year projections  
**How It Functions:** Calculates monthly payments, 3-year breakdown, total costs using mortgage formulas  
**How It Fits:** This is the heart of the website - the most valuable tool for clients. It helps them understand affordability and makes informed decisions.

### **Tasks:**
- `[ ][ ][ ]` Create Calculator React component
- `[ ][ ][ ]` Implement mortgage payment formula (P&I calculation)
- `[ ][ ][ ]` Implement 3-year projection calculation
- `[ ][ ][ ]` Implement amortization schedule (principal/interest breakdown)
- `[ ][ ][ ]` Add PMI calculation (if down payment < 20%)
- `[ ][ ][ ]` Add property tax calculation (from API or estimate)
- `[ ][ ][ ]` Add insurance calculation (from API or estimate)
- `[ ][ ][ ]` Add HOA fee calculation
- `[ ][ ][ ]` Create calculator UI (input fields, sliders, output display)
- `[ ][ ][ ]` Add down payment slider + text input (percentage vs. dollar amount)
- `[ ][ ][ ]` Add output display (monthly breakdown, 3-year projection)
- `[ ][ ][ ]` Add visual chart/graph for 3-year projection (Chart.js or similar)
- `[ ][ ][ ]` Add disclaimer (mandatory, prominent)
- `[ ][ ][ ]` Test calculations with known values (verify accuracy)
- `[ ][ ][ ]` Test edge cases (0% down, 100% down, very high prices)
- `[ ][ ][ ]` Test on mobile (touch-friendly inputs)

**Test Requirements:**
- Unit test: All calculations accurate (compare to Bankrate calculator)
- Integration test: UI updates correctly on input change
- Visual test: Calculator matches design examples
- Mobile test: Touch-friendly, works on small screens
- Edge case test: Handles extreme values gracefully

**Review Checkpoint:** ✅ Calculator core working before adding property integration

**Notes:**
- Use standard mortgage formulas (verify against Bankrate/Calculator.net)
- 3-year projection shows: Year 1, Year 2, Year 3 (total payments, principal paid, interest paid, remaining balance)
- Down payment slider should be smooth and responsive
- Disclaimer must be visible on every result

## **Module 2: Property-Specific Calculator Integration**

**What We're Creating:** Calculator that auto-fills from property data  
**How It Functions:** Pre-fills property price, taxes, insurance, HOA from property data when user selects a property  
**How It Fits:** This is the bridge - it connects property listings to the calculator, making it seamless for users to see costs for specific properties.

### **Tasks:**
- `[ ][ ][ ]` Add property data integration (read from property object/API)
- `[ ][ ][ ]` Auto-fill property price from listing
- `[ ][ ][ ]` Auto-fill property taxes (from API or estimate)
- `[ ][ ][ ]` Auto-fill insurance (from API or estimate)
- `[ ][ ][ ]` Auto-fill HOA fees (from property data)
- `[ ][ ][ ]` Add "Calculate My Ownership Costs" button on property detail pages (MUST BE FUNCTIONAL - opens calculator with real property data)
- `[ ][ ][ ]` Open calculator modal with pre-filled data
- `[ ][ ][ ]` Allow manual override of all auto-filled values
- `[ ][ ][ ]` Test with Clermont House property data
- `[ ][ ][ ]` Test with different property types (house, condo, townhouse)
- `[ ][ ][ ]` Test with properties with/without HOA
- `[ ][ ][ ]` **VERIFY:** Button actually opens calculator with real property data (no placeholder button)

**Test Requirements:**
- Unit test: Auto-fill works correctly
- Integration test: Calculator opens with property data
- User test: Manual override works
- Data test: Handles missing data gracefully

**Review Checkpoint:** ✅ Property-specific calculator working before adding buyer checklists

**Notes:**
- Property data should come from MLS API or property object
- If API data unavailable, use estimates (document fallback logic)
- Always allow user to override auto-filled values

## **Module 3: Tax & Insurance Data Integration (Backend API)**

**What We're Creating:** Backend API endpoints for property tax and insurance estimates  
**How It Functions:** Fetches property tax data from county APIs, calculates insurance estimates based on property value and location  
**How It Fits:** This is the data layer - it provides accurate estimates that make the calculator valuable. Without real data, the calculator is just a toy.

### **Tasks:**
- `[ ][ ][ ]` Research Orange County Property Appraiser API
- `[ ][ ][ ]` Research Osceola County Property Appraiser API
- `[ ][ ][ ]` Create backend API endpoint for tax data (/api/properties/{id}/tax)
- `[ ][ ][ ]` Create backend API endpoint for insurance estimates (/api/properties/{id}/insurance)
- `[ ][ ][ ]` Add fallback calculation (1.1% of property value for taxes)
- `[ ][ ][ ]` Add insurance estimate calculation (based on property value, location)
- `[ ][ ][ ]` Add error handling for API failures
- `[ ][ ][ ]` Cache API responses (avoid repeated calls)
- `[ ][ ][ ]` Test with real property addresses
- `[ ][ ][ ]` Test with API failures (graceful degradation)
- `[ ][ ][ ]` Test fallback calculations

**Test Requirements:**
- Unit test: API integration works
- Integration test: Fallback works when API fails
- Performance test: API calls complete in <2 seconds
- Error test: Graceful handling of API errors

**Review Checkpoint:** ✅ Tax/insurance integration working before final calculator testing

**Notes:**
- Primary: Use public APIs (Orange County, Osceola County)
- Fallback: Use estimates (taxes ~1.1% of value, insurance $1,500-$3,000)
- Cache API responses to avoid rate limiting
- Document API keys needed (Jose will set up)

---

# 🏠 PROPERTY SEARCH & DISPLAY

## **Module 1: Property Search (React Component)**

**What We're Creating:** Advanced property search React component with filters and map view  
**How It Functions:** Filters properties by price, bedrooms, bathrooms, property type, neighborhood, displays results in list/grid/map views  
**How It Fits:** This is the front door - it's how clients find properties. Without good search, clients can't find what they're looking for.

### **Tasks:**
- `[ ][ ][ ]` Create SearchProperties React page component
- `[ ][ ][ ]` Create SearchFilters component (price, beds, baths, type, neighborhood)
- `[ ][ ][ ]` Create PropertyList component (list/grid view toggle)
- `[ ][ ][ ]` Create PropertyMap component (Google Maps or Mapbox integration)
- `[ ][ ][ ]` Add price range slider
- `[ ][ ][ ]` Add bedroom/bathroom filters
- `[ ][ ][ ]` Add property type filter (house, condo, townhouse)
- `[ ][ ][ ]` Add neighborhood filter (Reunion, Margaritaville, Champions Gate, Clermont, Orlando, Downtown, Titusville)
- `[ ][ ][ ]` Add quick filter buttons (Buy, Rent, Investment, My Listings)
- `[ ][ ][ ]` Implement filter logic (React state management)
- `[ ][ ][ ]` Implement search results display (list view)
- `[ ][ ][ ]` Implement grid view toggle
- `[ ][ ][ ]` Add map view integration (Google Maps or Mapbox)
- `[ ][ ][ ]` Add property markers on map
- `[ ][ ][ ]` Add map clustering (for many properties)
- `[ ][ ][ ]` Connect to backend API (/api/properties/search)
- `[ ][ ][ ]` Test with Clermont House property
- `[ ][ ][ ]` Test with multiple properties
- `[ ][ ][ ]` Test all filter combinations
- `[ ][ ][ ]` Test on mobile (touch-friendly filters)

**Test Requirements:**
- Unit test: Filter logic works correctly
- Integration test: Search results update on filter change
- Visual test: List/grid/map views work
- Mobile test: Filters work on mobile
- Performance test: Search completes in <1 second

**Review Checkpoint:** ✅ Property search working before adding property detail pages

**Notes:**
- Start with sample property data (Clermont House)
- Add more properties as we get MLS data
- Map view requires API key (Google Maps or Mapbox)
- Save search requires user account (implement after user accounts)

## **Module 2: Property Detail Pages (React Component)**

**What We're Creating:** Detailed property page React component with photos, calculator, neighborhood info  
**How It Functions:** Displays full property information, photo gallery, calculator integration, neighborhood data, sharing options  
**How It Fits:** This is the showcase - where clients see all the details and make decisions. Without good detail pages, clients can't evaluate properties.

### **Tasks:**
- `[ ][ ][ ]` Create PropertyDetail React page component
- `[ ][ ][ ]` Create PropertyGallery component (swipeable on mobile)
- `[ ][ ][ ]` Add property details display (price, beds, baths, sq ft, lot size, year built, type)
- `[ ][ ][ ]` Add "Calculate My Ownership Costs" button (opens calculator with property data)
- `[ ][ ][ ]` Add neighborhood information card (schools, amenities, HOA, investment potential)
- `[ ][ ][ ]` Add "Schedule Tour" CTA button (MUST BE FUNCTIONAL - opens contact form or calendar booking)
- `[ ][ ][ ]` Add "Save Property" heart icon (requires login - MUST BE FUNCTIONAL in Phase 2)
- `[ ][ ][ ]` Add "Share Property" buttons (Facebook, Instagram, WhatsApp, Email - ALL MUST BE FUNCTIONAL)
- `[ ][ ][ ]` Add "Similar Properties" section
- `[ ][ ][ ]` Add status indicator (Available, Under Contract, Sold, Off Market)
- `[ ][ ][ ]` Add virtual tour integration (if available)
- `[ ][ ][ ]` Connect to backend API (/api/properties/{id})
- `[ ][ ][ ]` Create Clermont House detail page (using Jessie House images)
- `[ ][ ][ ]` Test photo gallery (swipe, zoom, fullscreen)
- `[ ][ ][ ]` Test all buttons and links
- `[ ][ ][ ]` Test on mobile (responsive layout)

**Test Requirements:**
- Unit test: All property data displays correctly
- Integration test: Calculator opens with property data
- Visual test: Photo gallery works smoothly
- Mobile test: Touch-friendly, swipeable gallery
- SEO test: Meta tags and schema markup present

**Review Checkpoint:** ✅ Property detail pages working before adding user accounts

**Notes:**
- Use Clermont House (Jessie House folder) as first property
- Photo gallery should be swipeable on mobile
- Virtual tour is optional (if available)
- Similar properties algorithm (same neighborhood, similar price)

## **Module 3: Property Cards (React Component)**

**What We're Creating:** Property card React component for list/grid views  
**How It Functions:** Displays key property information in card format, clickable to detail page  
**How It Fits:** This is the first impression - clients see these cards in search results. They need to be attractive and informative.

### **Tasks:**
- `[ ][ ][ ]` Create PropertyCard React component
- `[ ][ ][ ]` Add property image
- `[ ][ ][ ]` Add property details (price, beds, baths, sq ft)
- `[ ][ ][ ]` Add neighborhood name
- `[ ][ ][ ]` Add "Calculate Payment" quick button
- `[ ][ ][ ]` Add "Save Property" heart icon
- `[ ][ ][ ]` Add status badge (Available, Under Contract, Sold)
- `[ ][ ][ ]` Style property cards (match PDF design)
- `[ ][ ][ ]` Make cards responsive (mobile, tablet, desktop)
- `[ ][ ][ ]` Add hover effects
- `[ ][ ][ ]` Test card layout in list view
- `[ ][ ][ ]` Test card layout in grid view
- `[ ][ ][ ]` Test on mobile (touch-friendly)

**Test Requirements:**
- Unit test: Card displays all data correctly
- Visual test: Cards match design
- Responsive test: Cards work on all screen sizes
- Interaction test: Click, hover, buttons work

**Review Checkpoint:** ✅ Property cards working before finalizing search

**Notes:**
- Cards should be attractive and clickable
- Quick "Calculate Payment" button is key feature
- Status badge should be prominent

---

# 👤 USER ACCOUNTS & AUTHENTICATION

## **Module 1: Authentication System (Frontend + Backend)**

**What We're Creating:** User authentication with Facebook/Google OAuth and email/password  
**How It Functions:** OAuth integration for social login, email/password for traditional signup, JWT tokens for session management  
**How It Fits:** This is the identity system - it lets users save properties and searches. Without authentication, users can't personalize their experience.

### **Tasks (Frontend):**
- `[ ][ ][ ]` Create Login React component
- `[ ][ ][ ]` Create Signup React component
- `[ ][ ][ ]` Implement Facebook OAuth (frontend flow)
- `[ ][ ][ ]` Implement Google OAuth (frontend flow)
- `[ ][ ][ ]` Implement email/password signup form
- `[ ][ ][ ]` Implement email/password login form
- `[ ][ ][ ]` Add "Remember Me" checkbox
- `[ ][ ][ ]` Add password reset link
- `[ ][ ][ ]` Add privacy policy link
- `[ ][ ][ ]` Store JWT token in localStorage or httpOnly cookie
- `[ ][ ][ ]` Create AuthContext for user state management
- `[ ][ ][ ]` Add protected route wrapper
- `[ ][ ][ ]` Test Facebook login
- `[ ][ ][ ]` Test Google login
- `[ ][ ][ ]` Test email/password signup/login
- `[ ][ ][ ]` Test session persistence
- `[ ][ ][ ]` Test on mobile

### **Tasks (Backend):**
- `[ ][ ][ ]` Create /api/auth/register endpoint (email/password)
- `[ ][ ][ ]` Create /api/auth/login endpoint (email/password)
- `[ ][ ][ ]` Create /api/auth/oauth/facebook endpoint
- `[ ][ ][ ]` Create /api/auth/oauth/google endpoint
- `[ ][ ][ ]` Create /api/auth/logout endpoint
- `[ ][ ][ ]` Create /api/auth/refresh endpoint (JWT refresh)
- `[ ][ ][ ]` Implement password hashing (bcrypt, SPOK REQUIREMENT)
- `[ ][ ][ ]` Implement JWT token generation and validation
- `[ ][ ][ ]` Store OAuth secrets in environment variables (SPOK REQUIREMENT)
- `[ ][ ][ ]` Add rate limiting for login attempts (SPOK REQUIREMENT)
- `[ ][ ][ ]` Add HTTPS requirement for production (SPOK REQUIREMENT)
- `[ ][ ][ ]` Implement password reset functionality
- `[ ][ ][ ]` Add audit logging for authentication events (SPOK REQUIREMENT)
- `[ ][ ][ ]` Create /api/users/{id}/export endpoint (GDPR/CCPA data portability)
- `[ ][ ][ ]` Create /api/users/{id}/delete endpoint with soft-delete + admin approval flow
- `[ ][ ][ ]` Build admin workflow (dashboard or CLI) to review/fulfill data-subject requests within SLA

**Test Requirements:**
- Unit test: Authentication logic works
- Integration test: OAuth flows complete
- Security test: Passwords encrypted, sessions secure, HTTPS enforced
- User test: Login/signup is easy
- Mobile test: Works on mobile browsers

**Review Checkpoint:** ✅ Authentication working before adding saved properties

**Notes:**
- **SPOK REQUIREMENT:** Password hashing with bcrypt (never store plaintext)
- **SPOK REQUIREMENT:** OAuth secrets in environment variables (never in code)
- **SPOK REQUIREMENT:** HTTPS required in production
- **SPOK REQUIREMENT:** Rate limiting for login attempts (prevent brute force)
- **SPOK REQUIREMENT:** Audit logging for all authentication events
- **SPOK REQUIREMENT:** Data export/delete workflows for GDPR/CCPA requests documented and tested
- OAuth requires app setup (Jose will create Facebook/Google apps)
- Use JWT tokens for stateless authentication
- Privacy policy must be clear (no data sold to third parties)

## **Module 2: Saved Properties (Frontend + Backend)**

**What We're Creating:** System for users to save favorite properties  
**How It Functions:** Heart icon on property cards/detail pages, saves to user account via API, displays in "My Saved Properties"  
**How It Fits:** This is the personalization layer - it lets users build their own list of favorites. This increases engagement and return visits.

### **Tasks (Frontend):**
- `[ ][ ][ ]` Add "Save Property" heart icon to PropertyCard component
- `[ ][ ][ ]` Add "Save Property" heart icon to PropertyDetail component
- `[ ][ ][ ]` Implement save/unsave functionality (API calls)
- `[ ][ ][ ]` Create "My Saved Properties" React page
- `[ ][ ][ ]` Display saved properties list
- `[ ][ ][ ]` Add remove from saved functionality
- `[ ][ ][ ]` Sync saved properties across devices (if user logged in)
- `[ ][ ][ ]` Test save/unsave functionality
- `[ ][ ][ ]` Test saved properties page
- `[ ][ ][ ]` Test persistence (saved properties persist after logout/login)

### **Tasks (Backend):**
- `[ ][ ][ ]` Create /api/users/{id}/saved-properties endpoint (GET)
- `[ ][ ][ ]` Create /api/users/{id}/saved-properties endpoint (POST - save)
- `[ ][ ][ ]` Create /api/users/{id}/saved-properties/{property_id} endpoint (DELETE - unsave)
- `[ ][ ][ ]` Add authentication middleware (require login)
- `[ ][ ][ ]` Test API endpoints

**Test Requirements:**
- Unit test: Save/unsave works
- Integration test: Saved properties persist
- User test: Easy to save/unsave
- Data test: Saved properties stored correctly in PostgreSQL

**Review Checkpoint:** ✅ Saved properties working before adding saved searches

**Notes:**
- Heart icon should be prominent and clickable
- Visual feedback when property is saved (filled heart)
- Saved properties should persist across sessions
- Use PostgreSQL for storage (not localStorage)
- Saved properties must be included in user data export/delete workflows

## **Module 3: Saved Searches & Calculator Results (Frontend + Backend)**

**What We're Creating:** System for users to save searches and calculator results  
**How It Functions:** Saves search criteria and calculator inputs/results to user account via API  
**How It Fits:** This is the convenience layer - it lets users return to previous searches and calculations. This saves time and increases engagement.

### **Tasks (Frontend):**
- `[ ][ ][ ]` Implement "Save Search" functionality (API call)
- `[ ][ ][ ]` Create "My Saved Searches" React page
- `[ ][ ][ ]` Add "Run Saved Search" functionality
- `[ ][ ][ ]` Implement "Save Calculator Result" functionality (API call)
- `[ ][ ][ ]` Create "My Calculator Results" React page
- `[ ][ ][ ]` Display saved searches and calculator results
- `[ ][ ][ ]` Test save search functionality
- `[ ][ ][ ]` Test saved searches page
- `[ ][ ][ ]` Test save calculator result functionality

### **Tasks (Backend):**
- `[ ][ ][ ]` Create /api/users/{id}/saved-searches endpoint (GET, POST, DELETE)
- `[ ][ ][ ]` Create /api/users/{id}/calculator-results endpoint (GET, POST, DELETE)
- `[ ][ ][ ]` Add authentication middleware
- `[ ][ ][ ]` Test API endpoints

**Test Requirements:**
- Unit test: Save/load searches works
- Integration test: Saved searches execute correctly
- User test: Easy to save and use searches
- Data test: Data stored correctly in PostgreSQL

**Review Checkpoint:** ✅ Saved searches working before finalizing user accounts

**Notes:**
- Email alerts require backend service (can implement later)
- Saved searches should be easy to modify and re-run
- Calculator results should show property and inputs used
- Saved searches and calculator results must be included in data export/delete workflows

---

# 📚 BUYER EDUCATION PAGES

## **Module 1: First-Time Homebuyer Page (React Component)**

**What We're Creating:** Comprehensive guide React component for first-time homebuyers  
**How It Functions:** Displays credit requirements, down payment options, programs, interactive checklist  
**How It Fits:** This is the education layer - it helps first-time buyers understand the process. This builds trust and positions Carla as an expert.

### **Tasks:**
- `[ ][ ][ ]` Create FirstTimeBuyer React page component
- `[ ][ ][ ]` Add credit score requirements (620+ FHA, 640+ Conventional)
- `[ ][ ][ ]` Add down payment options (FHA 3.5%, Conventional 3-5%)
- `[ ][ ][ ]` Add first-time buyer programs (FHA, VA, down payment assistance)
- `[ ][ ][ ]` Create interactive checklist component (check-off items)
- `[ ][ ][ ]` Add process overview (step-by-step guide)
- `[ ][ ][ ]` Add "Get Started" CTA button (MUST BE FUNCTIONAL - links to contact form or opens contact modal)
- `[ ][ ][ ]` Style page (match PDF design)
- `[ ][ ][ ]` Make checklist saveable (if user logged in, save to backend)
- `[ ][ ][ ]` Test checklist functionality
- `[ ][ ][ ]` Test on mobile
- `[ ][ ][ ]` **VERIFY:** "Get Started" button actually works (no placeholder link)

**Test Requirements:**
- Unit test: All content displays correctly
- Integration test: Checklist saves (if logged in)
- Visual test: Page matches design
- Mobile test: Responsive layout
- **FUNCTIONALITY TEST:** All CTA buttons must actually work - they must link to functional contact forms or open contact modals. No placeholder links.

**Review Checkpoint:** ✅ First-time buyer page complete before other buyer pages

**Notes:**
- **CRITICAL:** All CTA buttons ("Get Started", "Contact Us", etc.) must be fully functional - they must link to working contact forms or open contact modals. No placeholder links.
- Checklist should be interactive (check-off items)
- Content should be clear and not overwhelming
- CTA should link to contact form

## **Module 2: Investment Buyer Page (React Component)**

**What We're Creating:** Comprehensive guide React component for investment buyers  
**How It Functions:** Displays investment requirements, ROI calculator, rental potential, tax benefits  
**How It Fits:** This is the investment layer - it helps investors understand Orlando's market and make informed decisions.

### **Tasks:**
- `[ ][ ][ ]` Create InvestmentBuyer React page component
- `[ ][ ][ ]` Add credit score requirements (680+)
- `[ ][ ][ ]` Add down payment requirements (20-25%)
- `[ ][ ][ ]` Add cash reserves requirement (6 months PITI)
- `[ ][ ][ ]` Add ROI calculator component (rental income, cash flow)
- `[ ][ ][ ]` Add investment considerations (rental potential, appreciation, tax benefits, 1031 exchange)
- `[ ][ ][ ]` Add Orlando investment advantages (Disney area, vacation rentals, growing market)
- `[ ][ ][ ]` Create interactive checklist
- `[ ][ ][ ]` Add "Get Started" CTA button
- `[ ][ ][ ]` Test ROI calculator
- `[ ][ ][ ]` Test on mobile

**Test Requirements:**
- Unit test: ROI calculator accurate
- Integration test: All content displays correctly
- Visual test: Page matches design
- Mobile test: Responsive layout

**Review Checkpoint:** ✅ Investment buyer page complete before international buyer page

**Notes:**
- ROI calculator should be simple and clear
- Orlando advantages should be prominent
- 1031 exchange info should be included

## **Module 3: International Buyer Page (React Component)**

**What We're Creating:** Comprehensive guide React component for international buyers with "Why Orlando?" section  
**How It Functions:** Displays international buyer requirements, financing options, remote buying process, Orlando advantages  
**How It Fits:** This is the international layer - it helps international buyers navigate the US real estate market and understand why Orlando is a great investment.

### **Tasks:**
- `[ ][ ][ ]` Create InternationalBuyer React page component
- `[ ][ ][ ]` Add credit requirements (US credit or alternative)
- `[ ][ ][ ]` Add down payment requirements (20-40%)
- `[ ][ ][ ]` Add financing options (cash, international buyer loans, portfolio loans)
- `[ ][ ][ ]` Add tax implications (FIRPTA, capital gains, property taxes)
- `[ ][ ][ ]` Add remote buying process (virtual tours, power of attorney, escrow, remote closing)
- `[ ][ ][ ]` Add "Why Orlando?" section (MANDATORY):
  - Disney World proximity
  - Growing economy and job market
  - No state income tax
  - Strong rental market
  - International airport access
  - Diverse, welcoming community
  - Year-round warm weather
  - Investment potential (vacation rentals, long-term rentals)
  - Quality of life
  - Education options
- `[ ][ ][ ]` Create interactive checklist
- `[ ][ ][ ]` Add resources (immigration, tax advisors)
- `[ ][ ][ ]` Add "Get Started" CTA button
- `[ ][ ][ ]` Test on mobile

**Test Requirements:**
- Unit test: All content displays correctly
- Integration test: "Why Orlando?" section prominent
- Visual test: Page matches design
- Mobile test: Responsive layout

**Review Checkpoint:** ✅ International buyer page complete before moving up buyer page

**Notes:**
- "Why Orlando?" section is MANDATORY and should be prominent
- Remote buying process should be clearly explained
- Resources should be helpful and current

## **Module 4: Moving Up / Relocating Buyer Page (React Component)**

**What We're Creating:** Comprehensive guide React component for buyers moving up or relocating  
**How It Functions:** Displays timing considerations, bridge loans, contingency planning, relocation services  
**How It Fits:** This is the relocation layer - it helps buyers navigate the complex process of selling and buying simultaneously.

### **Tasks:**
- `[ ][ ][ ]` Create MovingUpBuyer React page component
- `[ ][ ][ ]` Add selling current home first (timing considerations)
- `[ ][ ][ ]` Add bridge loans (options for buying before selling)
- `[ ][ ][ ]` Add contingency planning (offers contingent on sale)
- `[ ][ ][ ]` Add relocation services (moving assistance, area information)
- `[ ][ ][ ]` Add Orlando relocation benefits (job market, schools, lifestyle)
- `[ ][ ][ ]` Create interactive checklist
- `[ ][ ][ ]` Add "Get Started" CTA button
- `[ ][ ][ ]` Test on mobile

**Test Requirements:**
- Unit test: All content displays correctly
- Visual test: Page matches design
- Mobile test: Responsive layout

**Review Checkpoint:** ✅ All buyer education pages complete before MLS integration

**Notes:**
- Timing considerations are critical for this buyer type
- Bridge loans should be clearly explained
- Relocation services should be helpful

---

# 🔄 MLS INTEGRATION

## **Module 1: MLS API Integration (Backend)**

**What We're Creating:** Backend integration with MLS feed for property data  
**How It Functions:** Connects to MLS API, fetches property data, syncs status updates, stores in PostgreSQL  
**How It Fits:** This is the data source - it provides real-time property information. Without MLS integration, properties are static and outdated.

### **Tasks:**
- `[ ][ ][ ]` Research MLS API documentation (Carla's MLS provider)
- `[ ][ ][ ]` Create MLS API integration service (backend)
- `[ ][ ][ ]` Implement property data fetching
- `[ ][ ][ ]` Implement property status fetching (Available, Under Contract, Sold, Off Market)
- `[ ][ ][ ]` Create property data mapping (MLS format to our schema)
- `[ ][ ][ ]` Add error handling for API failures
- `[ ][ ][ ]` Add API key configuration (environment variables)
- `[ ][ ][ ]` Implement MLS compliance rules (SPOK REQUIREMENT):
  - Display rules (required disclaimers, agent attribution)
  - Data validation (required fields, format checks)
  - Caching strategy (avoid excessive API calls)
- `[ ][ ][ ]` Document board-specific legal disclaimers and add React components to render them everywhere MLS data appears
- `[ ][ ][ ]` Implement rate limiting/backoff strategy and persistence for partially processed MLS batches
- `[ ][ ][ ]` Emit MLS sync heartbeat metrics + alerts when data is older than agreed SLA
- `[ ][ ][ ]` Create background sync job (daily sync or real-time)
- `[ ][ ][ ]` Test with sample MLS data
- `[ ][ ][ ]` Test API error handling
- `[ ][ ][ ]` Test MLS compliance rules

**Test Requirements:**
- Unit test: API integration works
- Integration test: Property data fetched correctly
- Error test: Graceful handling of API failures
- Performance test: API calls complete in <3 seconds
- Compliance test: MLS rules enforced

**Review Checkpoint:** ✅ MLS API integration working before adding sync system

**Notes:**
- **SPOK REQUIREMENT:** MLS compliance rules must be enforced (display rules, disclaimers, validation)
- **SPOK REQUIREMENT:** Caching strategy to avoid excessive API calls
- MLS provider’s official disclaimer text must be displayed on every property list/detail page
- MLS sync health alerts should page the team if data is stale beyond SLA
- MLS API requires Carla's credentials (Jose will provide)
- Document API key setup process
- Handle API rate limiting

## **Module 2: Property Status Management (Backend + Frontend)**

**What We're Creating:** System to auto-update property status and handle sold properties  
**How It Functions:** Syncs property status from MLS, removes sold properties or moves to "Recently Sold" section  
**How It Fits:** This is the maintenance layer - it keeps property data current and accurate. Without this, clients see sold properties as available.

### **Tasks (Backend):**
- `[ ][ ][ ]` Implement daily sync job (or real-time if possible)
- `[ ][ ][ ]` Add status update logic (Available, Under Contract, Sold, Off Market)
- `[ ][ ][ ]` Implement sold property handling (remove or move to "Recently Sold")
- `[ ][ ][ ]` Create "Recently Sold" archive (archive after 30 days)
- `[ ][ ][ ]` Add status update API endpoint
- `[ ][ ][ ]` Emit metrics + alerts when property status sync fails or lags behind MLS
- `[ ][ ][ ]` Test status updates
- `[ ][ ][ ]` Test sold property handling
- `[ ][ ][ ]` Test "Recently Sold" section

### **Tasks (Frontend):**
- `[ ][ ][ ]` Add status indicators on PropertyCard component
- `[ ][ ][ ]` Add status indicators on PropertyDetail component
- `[ ][ ][ ]` Filter out sold properties from active search (unless viewing "Recently Sold")
- `[ ][ ][ ]` Test status indicators display correctly

**Test Requirements:**
- Unit test: Status updates work correctly
- Integration test: Sold properties handled correctly
- Data test: Status persisted correctly in PostgreSQL

**Review Checkpoint:** ✅ Property status management working before finalizing MLS integration

**Notes:**
- Daily sync is acceptable (real-time preferred but not required)
- Sold properties should be removed or clearly marked
- "Recently Sold" section shows last 30 days
- Status dashboard should expose last sync time and pending MLS batches

---

# 📱 SOCIAL SHARING & TRACKING

## **Module 1: Social Sharing Buttons (React Components)**

**What We're Creating:** Share buttons for Facebook, Instagram, WhatsApp, Email on every property  
**How It Functions:** Opens share dialog with property image and details, creates shareable links  
**How It Fits:** This is the viral layer - it lets clients share properties with friends and family. This increases reach and generates more leads.

### **Tasks:**
- `[ ][ ][ ]` Create SocialShare React component
- `[ ][ ][ ]` Add Facebook share button to PropertyCard component
- `[ ][ ][ ]` Add Facebook share button to PropertyDetail component
- `[ ][ ][ ]` Add Instagram share button (link or story)
- `[ ][ ][ ]` Add WhatsApp share button
- `[ ][ ][ ]` Add Email share button
- `[ ][ ][ ]` Implement share link generation (with property image and details)
- `[ ][ ][ ]` Add Open Graph meta tags for beautiful previews (React Helmet)
- `[ ][ ][ ]` Test Facebook sharing (preview looks good)
- `[ ][ ][ ]` Test Instagram sharing
- `[ ][ ][ ]` Test WhatsApp sharing
- `[ ][ ][ ]` Test Email sharing
- `[ ][ ][ ]` Test on mobile (native share sheet)

**Test Requirements:**
- Unit test: Share buttons work
- Integration test: Share links include property data
- Visual test: Social previews look good
- Mobile test: Native share works
- **FUNCTIONALITY TEST:** All share buttons must actually open share dialogs and share real property data. No placeholder buttons.

**Review Checkpoint:** ✅ Social sharing working before adding tracking

**Notes:**
- **CRITICAL:** All share buttons must be fully functional - they must actually share property data to Facebook, Instagram, WhatsApp, and Email. No placeholder buttons.
- Open Graph tags are critical for beautiful previews
- Share links should include property image and key details
- Mobile should use native share sheet when possible

## **Module 2: Analytics & Tracking (Frontend + Backend)**

**What We're Creating:** System to track property views, shares, calculator usage  
**How It Functions:** Tracks user behavior, stores analytics data in PostgreSQL, provides dashboard for Carla  
**How It Fits:** This is the intelligence layer - it helps Carla understand what's working and what's not. This enables data-driven decisions.

### **Tasks (Frontend):**
- `[ ][ ][ ]` Add Google Analytics 4 integration
- `[ ][ ][ ]` Add Facebook Pixel (for retargeting)
- `[ ][ ][ ]` Implement property view tracking (send to backend API)
- `[ ][ ][ ]` Implement property share tracking (send to backend API)
- `[ ][ ][ ]` Implement calculator usage tracking (send to backend API)
- `[ ][ ][ ]` Implement buyer guide page view tracking (send to backend API)
- `[ ][ ][ ]` Add cookie consent banner (SPOK REQUIREMENT - GDPR/CCPA compliance)
- `[ ][ ][ ]` Implement Do-Not-Track respect (SPOK REQUIREMENT)
- `[ ][ ][ ]` Add opt-out functionality (SPOK REQUIREMENT)
- `[ ][ ][ ]` Ensure GA4/Facebook Pixel only fire after consent signal (gtag consent mode)
- `[ ][ ][ ]` Test tracking (verify events fire correctly)

### **Tasks (Backend):**
- `[ ][ ][ ]` Create /api/analytics/track endpoint (property views, shares, calculator usage)
- `[ ][ ][ ]` Store analytics data in PostgreSQL
- `[ ][ ][ ]` Create analytics dashboard API endpoints (for Carla)
- `[ ][ ][ ]` Implement privacy-compliant tracking (respect opt-out, DNT)
- `[ ][ ][ ]` Anonymize or hash IPs/user identifiers before storing analytics events
- `[ ][ ][ ]` Implement retention policy (auto-purge analytics older than 13 months)
- `[ ][ ][ ]` Ensure opt-out preferences cascade to GA4/Facebook Pixel disablement
- `[ ][ ][ ]` Test analytics data collection

**Test Requirements:**
- Unit test: Tracking events fire correctly
- Integration test: Analytics data collected
- Privacy test: Cookie consent, DNT, opt-out work
- Data test: Dashboard displays correctly (if created)

**Review Checkpoint:** ✅ Analytics tracking working before finalizing social features

**Notes:**
- **SPOK REQUIREMENT:** Cookie consent banner (GDPR/CCPA compliance)
- **SPOK REQUIREMENT:** Respect Do-Not-Track header
- **SPOK REQUIREMENT:** Opt-out functionality for users
- Anonymize analytics data and purge per retention schedule
- Google Analytics 4 for general tracking
- Facebook Pixel for retargeting ads
- Dashboard is optional but recommended
- Privacy-compliant tracking (GDPR/CCPA)

---

# 📧 LEAD GENERATION FEATURES

## **Module 1: Contact Forms (Frontend + Backend)**

**What We're Creating:** Multiple contact forms throughout the site  
**How It Functions:** Captures lead information, sends email notifications, stores in PostgreSQL  
**How It Fits:** This is the conversion layer - it turns visitors into leads. Without good contact forms, visitors can't reach out.

### **Tasks (Frontend):**
- `[ ][ ][ ]` Create ContactForm React component
- `[ ][ ][ ]` Create quick contact popup (appears after viewing multiple properties)
- `[ ][ ][ ]` Add popup disclaimer ("A real person will contact you. Your information will not be sold or telemarketed to 3rd party companies.")
- `[ ][ ][ ]` Create property-specific contact form ("Schedule a Showing")
- `[ ][ ][ ]` Create general contact form (contact page)
- `[ ][ ][ ]` Create calculator contact form ("Like these numbers? Let's talk!")
- `[ ][ ][ ]` Add form validation (email format, required fields)
- `[ ][ ][ ]` Add success/error messages
- `[ ][ ][ ]` Test all contact forms
- `[ ][ ][ ]` Test form validation
- `[ ][ ][ ]` Test on mobile

### **Tasks (Backend):**
- `[ ][ ][ ]` Create /api/contact/submit endpoint
- `[ ][ ][ ]` Store form submissions in PostgreSQL
- `[ ][ ][ ]` Implement email notification to Carla via Gmail API + background worker queue
- `[ ][ ][ ]` Add rate limiting (prevent spam)
- `[ ][ ][ ]` Test form submissions
- `[ ][ ][ ]` Test email notifications

**Test Requirements:**
- Unit test: Form validation works
- Integration test: Form submissions work
- Email test: Notifications sent correctly
- User test: Forms are easy to use
- Mobile test: Forms work on mobile
- **FUNCTIONALITY TEST:** All forms must actually submit data and send real emails. No placeholder forms, no fake submissions.

**Review Checkpoint:** ✅ Contact forms working before adding other lead generation features

**Notes:**
- **CRITICAL:** All contact forms must be fully functional - they must actually submit data to the backend and send real email notifications to Carla. No placeholder forms, no fake data.
- Popup disclaimer is MANDATORY and must be clear
- Email notifications should include all form data
- Forms should be mobile-friendly
- Store submissions for CRM integration later
- Gmail notifications run through the async worker + OAuth credentials (never SMTP passwords)

## **Module 2: Lead Capture (Frontend + Backend)**

**What We're Creating:** Additional lead capture mechanisms  
**How It Functions:** Email signups, calendar booking, market report requests  
**How It Fits:** This is the engagement layer - it captures leads at different stages of the buyer journey.

### **Tasks (Frontend):**
- `[ ][ ][ ]` Add "Get Notified of New Listings" email signup (homepage and property pages)
- `[ ][ ][ ]` Add "Schedule a Showing" calendar booking (if calendar service available)
- `[ ][ ][ ]` Add "Get Pre-Approved" mortgage partner link (if applicable)
- `[ ][ ][ ]` Add "Request Market Report" form
- `[ ][ ][ ]` Test email signup
- `[ ][ ][ ]` Test calendar booking (if implemented)
- `[ ][ ][ ]` Test market report request

### **Tasks (Backend):**
- `[ ][ ][ ]` Create /api/leads/email-signup endpoint
- `[ ][ ][ ]` Create /api/leads/market-report endpoint
- `[ ][ ][ ]` Store leads in PostgreSQL
- `[ ][ ][ ]` Implement email list management
- `[ ][ ][ ]` Test lead capture

**Test Requirements:**
- Unit test: Lead capture works
- Integration test: Leads stored correctly
- Email test: Email list updated
- User test: Easy to sign up

**Review Checkpoint:** ✅ Lead capture working before finalizing lead generation

**Notes:**
- Email signup should be prominent
- Calendar booking requires calendar service (can implement later)
- Market report can be automated or manual

---

# 📱 MOBILE OPTIMIZATION

## **Module: Mobile-First Responsive Design**

**What We're Creating:** Complete mobile optimization for all React components  
**How It Functions:** Responsive breakpoints, touch-friendly interactions, mobile-optimized layouts  
**How It Fits:** This is the accessibility layer - most users will visit on mobile. Without mobile optimization, we lose most of our audience.

### **Tasks:**
- `[ ][ ][ ]` Test all React pages on mobile (320px, 375px, 414px)
- `[ ][ ][ ]` Test calculator on mobile (touch-friendly inputs)
- `[ ][ ][ ]` Test property search on mobile (touch-friendly filters)
- `[ ][ ][ ]` Test property cards on mobile (swipeable, touch-friendly)
- `[ ][ ][ ]` Test photo gallery on mobile (swipeable)
- `[ ][ ][ ]` Test contact forms on mobile (touch-friendly)
- `[ ][ ][ ]` Test navigation on mobile (hamburger menu)
- `[ ][ ][ ]` Test social sharing on mobile (native share sheet)
- `[ ][ ][ ]` Optimize images for mobile (WebP, lazy loading)
- `[ ][ ][ ]` Test loading speed on mobile (<3 seconds)
- `[ ][ ][ ]` Test on real mobile devices (if possible)
- `[ ][ ][ ]` Test Facebook/Instagram sharing from mobile

**Test Requirements:**
- Visual test: All pages look good on mobile
- Interaction test: All features work on mobile
- Performance test: Fast loading on mobile
- Real device test: Test on actual phones

**Review Checkpoint:** ✅ Mobile optimization complete before SEO work

**Notes:**
- Mobile-first approach (design for mobile, enhance for desktop)
- Touch targets should be at least 44x44px
- Test on real devices if possible
- Facebook/Instagram sharing should work from mobile

---

# 🔍 SEO & PERFORMANCE

## **Module 1: SEO Optimization**

**What We're Creating:** Complete SEO optimization for search engines  
**How It Functions:** Meta tags, schema markup, keyword optimization, neighborhood landing pages  
**How It Fits:** This is the discoverability layer - it helps people find the website through search engines.

### **Tasks:**
- `[ ][ ][ ]` Install React Helmet for meta tags
- `[ ][ ][ ]` Add meta tags to all pages (title, description, keywords)
- `[ ][ ][ ]` Add Open Graph tags for social sharing
- `[ ][ ][ ]` Add schema markup for properties (Property, RealEstateAgent)
- `[ ][ ][ ]` Add schema markup for LocalBusiness
- `[ ][ ][ ]` Optimize content with keywords ("Orlando real estate", "homes for sale in [neighborhood]")
- `[ ][ ][ ]` Create neighborhood landing pages (Reunion, Margaritaville, Champions Gate, Clermont, Orlando, Downtown, Titusville)
- `[ ][ ][ ]` Add alt text to all images
- `[ ][ ][ ]` Create sitemap.xml (dynamic generation)
- `[ ][ ][ ]` Create robots.txt
- `[ ][ ][ ]` Test SEO (Google Search Console, schema validator)
- `[ ][ ][ ]` Test Open Graph tags (Facebook Debugger)

**Test Requirements:**
- Unit test: Meta tags present on all pages
- Integration test: Schema markup valid
- SEO test: Pages indexed correctly
- Social test: Open Graph previews look good

**Review Checkpoint:** ✅ SEO optimization complete before performance work

**Notes:**
- Neighborhood landing pages are important for local SEO
- Schema markup helps search engines understand content
- Alt text is important for accessibility and SEO

## **Module 2: Performance Optimization**

**What We're Creating:** Fast-loading, optimized website  
**How It Functions:** Image optimization, code minification, lazy loading, caching  
**How It Fits:** This is the speed layer - fast websites rank better and provide better user experience.

### **Tasks:**
- `[ ][ ][ ]` Optimize images (WebP format, compression)
- `[ ][ ][ ]` Implement lazy loading for images (React lazy loading)
- `[ ][ ][ ]` Configure Vite for code minification
- `[ ][ ][ ]` Add browser caching headers (backend)
- `[ ][ ][ ]` Optimize font loading (preload, font-display: swap)
- `[ ][ ][ ]` Implement code splitting (React.lazy, route-based)
- `[ ][ ][ ]` Test page load speed (Google PageSpeed Insights)
- `[ ][ ][ ]` Test initial load time (<3 seconds)
- `[ ][ ][ ]` Test on slow connections (3G, 4G)
- `[ ][ ][ ]` Test Core Web Vitals (LCP, FID, CLS)

**Test Requirements:**
- Performance test: Initial load <3 seconds
- Speed test: Google PageSpeed score >90
- Core Web Vitals: All metrics in green
- Mobile test: Fast on mobile networks

**Review Checkpoint:** ✅ Performance optimization complete before final testing

**Notes:**
- Image optimization is critical (largest impact on load time)
- Lazy loading improves initial load
- Code splitting reduces initial bundle size
- Test on real networks (not just localhost)

---

# ✅ TESTING & QUALITY ASSURANCE

## **Module 1: Automated Testing Framework**

**What We're Creating:** Complete automated testing suite for frontend and backend  
**How It Functions:** Unit tests, integration tests, end-to-end tests with Jest, React Testing Library, pytest  
**How It Fits:** This is the quality assurance layer - it ensures everything works correctly before launch. Without automated tests, we can't verify functionality across sessions.

### **Tasks (Frontend Testing):**
- `[ ][ ][ ]` Set up Jest and React Testing Library
- `[ ][ ][ ]` Write unit tests for Calculator component (calculations)
- `[ ][ ][ ]` Write unit tests for PropertyCard component
- `[ ][ ][ ]` Write unit tests for all utility functions
- `[ ][ ][ ]` Write integration tests for property search flow
- `[ ][ ][ ]` Write integration tests for authentication flow
- `[ ][ ][ ]` Write integration tests for calculator with property data
- `[ ][ ][ ]` Write end-to-end tests for critical user flows (Playwright or Cypress)
- `[ ][ ][ ]` Add automated accessibility tests (axe-core/Pa11y) into CI pipeline
- `[ ][ ][ ]` Create contract tests (Pact or MSW schemas) to lock frontend expectations for backend responses
- `[ ][ ][ ]` Set up test coverage reporting (target >80% for critical modules)
- `[ ][ ][ ]` Test all components render correctly
- `[ ][ ][ ]` Test error handling
- `[ ][ ][ ]` Test edge cases

### **Tasks (Backend Testing):**
- `[ ][ ][ ]` Set up pytest for backend testing
- `[ ][ ][ ]` Write unit tests for all API endpoints
- `[ ][ ][ ]` Write unit tests for database models
- `[ ][ ][ ]` Write unit tests for business logic (calculator, MLS integration)
- `[ ][ ][ ]` Write integration tests for API endpoints
- `[ ][ ][ ]` Write integration tests for database operations
- `[ ][ ][ ]` Write integration tests for authentication flow
- `[ ][ ][ ]` Add contract tests (Pact) to validate API schemas consumed by frontend clients
- `[ ][ ][ ]` Run load/performance tests (k6 or Locust) for critical endpoints (auth, search, calculator)
- `[ ][ ][ ]` Execute resilience tests (kill worker/DB) to verify graceful degradation and alerting
- `[ ][ ][ ]` Set up test database (separate from production)
- `[ ][ ][ ]` Set up test coverage reporting (target >80%)
- `[ ][ ][ ]` Test error handling
- `[ ][ ][ ]` Test edge cases

### **Tasks (Test Infrastructure):**
- `[ ][ ][ ]` Set up CI/CD pipeline (GitHub Actions or similar)
- `[ ][ ][ ]` Configure automated test runs on every commit
- `[ ][ ][ ]` Set up staging environment (SPOK REQUIREMENT)
- `[ ][ ][ ]` Create test evidence documentation (SPOK REQUIREMENT)
- `[ ][ ][ ]` Document test execution process

**Test Requirements:**
- Coverage test: >80% code coverage for critical modules
- Functional test: All features work
- Integration test: Frontend and backend work together
- E2E test: Critical user flows work end-to-end
- Evidence test: Test results documented (SPOK REQUIREMENT)

**Review Checkpoint:** ✅ Automated testing complete before deployment

**Notes:**
- **SPOK REQUIREMENT:** Automated testing framework required
- **SPOK REQUIREMENT:** Staging environment for testing before production
- **SPOK REQUIREMENT:** Test evidence documentation (proof of testing)
- Accessibility, load, and contract test artifacts must be stored with the CI run for Spok review
- Test everything thoroughly
- Document all test results
- Fix any issues before deployment

## **Module 2: Manual Testing & Quality Checks**

**What We're Creating:** Manual testing checklist and quality verification  
**How It Functions:** Human testing, visual verification, cross-browser testing, accessibility testing  
**How It Fits:** This is the human verification layer - automated tests catch bugs, but humans verify user experience.

### **Tasks:**
- `[ ][ ][ ]` Test all navigation links
- `[ ][ ][ ]` Test calculator with various inputs
- `[ ][ ][ ]` Test property search and filters
- `[ ][ ][ ]` Test user authentication (login, signup, logout)
- `[ ][ ][ ]` Test saved properties functionality
- `[ ][ ][ ]` Test social sharing buttons
- `[ ][ ][ ]` Test contact forms
- `[ ][ ][ ]` Test on all browsers (Chrome, Firefox, Safari, Edge)
- `[ ][ ][ ]` Test on all devices (mobile, tablet, desktop)
- `[ ][ ][ ]` Test accessibility (screen reader, keyboard navigation, WCAG compliance)
- `[ ][ ][ ]` Test error handling (network errors, API failures)
- `[ ][ ][ ]` Test edge cases (empty search results, missing data)
- `[ ][ ][ ]` Create test report document

**Test Requirements:**
- Functional test: All features work
- Browser test: Works in all browsers
- Device test: Works on all devices
- Accessibility test: WCAG compliant
- Error test: Graceful error handling

**Review Checkpoint:** ✅ All manual testing complete before deployment

**Notes:**
- Test everything thoroughly
- Document all test results
- Fix any issues before deployment

---

# 🚀 DEPLOYMENT & PRODUCTION

## **Module 1: Deployment Preparation**

**What We're Creating:** Production-ready code and deployment instructions  
**How It Functions:** Prepares code for hosting, creates deployment documentation, sets up production environment  
**How It Fits:** This is the launch layer - it gets the website live so clients can use it.

### **Tasks:**
- `[ ][ ][ ]` Remove console.log statements (production)
- `[ ][ ][ ]` Remove test/debug code
- `[ ][ ][ ]` Update API endpoints for production
- `[ ][ ][ ]` Configure production environment variables
- `[ ][ ][ ]` Set up production PostgreSQL database
- `[ ][ ][ ]` Run database migrations in production
- `[ ][ ][ ]` Build React app for production (Vite build)
- `[ ][ ][ ]` Configure production server (Nginx or similar)
- `[ ][ ][ ]` Set up SSL certificate (HTTPS required, SPOK REQUIREMENT)
- `[ ][ ][ ]` Configure domain and DNS
- `[ ][ ][ ]` Set up monitoring and logging (SPOK REQUIREMENT)
- `[ ][ ][ ]` Define and document SLO targets (99.5% monthly uptime, RTO 4h, RPO 1h)
- `[ ][ ][ ]` Ensure staging environment mirrors production infrastructure/config
- `[ ][ ][ ]` Document blue-green or canary deployment strategy
- `[ ][ ][ ]` Create automated rollback plan (database + app) and run a rehearsal
- `[ ][ ][ ]` Create deployment instructions
- `[ ][ ][ ]` Create hosting setup guide
- `[ ][ ][ ]` Create domain configuration guide
- `[ ][ ][ ]` Create SSL certificate setup guide
- `[ ][ ][ ]` Create backup procedures (SPOK REQUIREMENT)
- `[ ][ ][ ]` Create maintenance procedures
- `[ ][ ][ ]` Document all API keys needed
- `[ ][ ][ ]` Create README with all setup instructions

**Test Requirements:**
- Code test: No debug code in production
- Security test: HTTPS configured, secrets secure
- Documentation test: All instructions clear
- Setup test: Can deploy from instructions

**Review Checkpoint:** ✅ Deployment preparation complete before going live

**Notes:**
- **SPOK REQUIREMENT:** HTTPS required in production
- **SPOK REQUIREMENT:** Monitoring and logging set up
- **SPOK REQUIREMENT:** Backup procedures documented
- Recommended SLO: 99.5% monthly uptime, Recovery Time Objective 4h, Recovery Point Objective 1h
- Document everything clearly
- Provide step-by-step instructions
- Include troubleshooting guide

## **Module 2: Final Verification**

**What We're Creating:** Final check before launch  
**How It Functions:** Comprehensive review of all features, documentation, and deployment readiness  
**How It Fits:** This is the final gate - it ensures everything is perfect before clients see it.

### **Tasks:**
- `[ ][ ][ ]` Review all features (checklist complete)
- `[ ][ ][ ]` Review all documentation (README, setup guides)
- `[ ][ ][ ]` Review all test results (all tests passing)
- `[ ][ ][ ]` Review design (matches PDF, 80% match)
- `[ ][ ][ ]` Review performance (load time <3 seconds)
- `[ ][ ][ ]` Review SEO (meta tags, schema markup)
- `[ ][ ][ ]` Review mobile optimization (all features work)
- `[ ][ ][ ]` Review accessibility (WCAG compliant)
- `[ ][ ][ ]` Review security (HTTPS, password hashing, OAuth secrets)
- `[ ][ ][ ]` Review MLS compliance (display rules, disclaimers)
- `[ ][ ][ ]` Review privacy compliance (cookie consent, DNT, opt-out)
- `[ ][ ][ ]` Verify monitoring dashboards/SLO reports meet targets
- `[ ][ ][ ]` Verify rollback plan tested in staging within the last sprint
- `[ ][ ][ ]` Get Jose's final approval
- `[ ][ ][ ]` Get Spok's final verification (3rd checkmark)

**Test Requirements:**
- Final review: Everything complete
- Approval: Jose and Spok approve
- Launch ready: All systems go

**Review Checkpoint:** ✅ FINAL VERIFICATION COMPLETE - READY FOR LAUNCH

**Notes:**
- Don't launch until everything is perfect
- Get final approval from Jose
- Get final verification from Spok
- All SPOK requirements must be met

---

## 📝 **PROJECT NOTES**

### **Clermont House (Jessie House Folder)**
- Images are in "Jessie House" folder
- Rename to "clermont-house" for consistency
- Use as first property listing
- Test all features with this property

### **Fonts**
- Prata font for headings (frontend/public/fonts/Prata/)
- Raleway font for body text (frontend/public/fonts/Raleway/)
- Use @font-face in CSS
- Preload fonts for performance

### **Colors**
- Extract from PDF design
- Document hex codes
- Use CSS variables for easy theme management

### **API Keys Needed**
- MLS API (Carla's credentials)
- Facebook OAuth (Jose will create app)
- Google OAuth (Jose will create app)
- Property Tax API (Orange County, Osceola County)
- Google Maps/Mapbox (for map view)
- **ALL SECRETS IN .env FILES (NEVER COMMIT)**

### **Hosting**
- Custom server with PostgreSQL (full control)
- Nginx or similar for reverse proxy
- SSL certificate (HTTPS required)
- Domain configuration

### **Timeline Estimate (REALISTIC)**
- Infrastructure Setup: 4-6 hours
- React Application Foundation: 12-15 hours
- Backend API Foundation: 10-12 hours
- Database Setup & Migrations: 4-6 hours
- Home Ownership Calculator: 8-10 hours
- Property Search & Display: 10-12 hours
- User Accounts & Authentication: 12-15 hours
- Buyer Education Pages: 6-8 hours
- MLS Integration: 8-10 hours
- Social Sharing & Tracking: 4-6 hours
- Lead Generation Features: 6-8 hours
- Mobile Optimization: 4-6 hours
- SEO & Performance: 4-6 hours
- Testing & Quality Assurance: 12-15 hours
- Deployment & Production: 6-8 hours
- **Total: 100-150 hours** (realistic estimate for production-grade system)

---

## 🔒 **SPOK REQUIREMENTS SUMMARY**

All SPOK requirements must be met before deployment:

### **Infrastructure:**
- ✅ Document exact Node.js, Python, PostgreSQL versions
- ✅ .env files never committed (.gitignore verified)
- ✅ Package.json and requirements.txt with exact versions

### **Authentication Security:**
- ✅ Password hashing with bcrypt (never plaintext)
- ✅ OAuth secrets in environment variables (never in code)
- ✅ HTTPS required in production
- ✅ Rate limiting for login attempts
- ✅ Audit logging for authentication events

### **Persistence/Backups:**
- ✅ Database backups automated
- ✅ Data export functionality for user data portability
- ✅ Alembic migrations for all schema changes

### **MLS Compliance:**
- ✅ Display rules enforced (required disclaimers, agent attribution)
- ✅ Data validation (required fields, format checks)
- ✅ Caching strategy (avoid excessive API calls)

### **Privacy/Consent:**
- ✅ Cookie consent banner (GDPR/CCPA compliance)
- ✅ Do-Not-Track header respect
- ✅ Opt-out functionality for users

### **Testing Automation:**
- ✅ Automated testing framework (Jest, React Testing Library, pytest)
- ✅ Staging environment for testing before production
- ✅ Test evidence documentation (proof of testing)
- ✅ >80% code coverage for critical modules

### **Deployment:**
- ✅ HTTPS configured
- ✅ Monitoring and logging set up
- ✅ Backup procedures documented

---

**Last Updated:** November 6, 2025 at 11:42 PM  
**Status:** Ready to Begin Implementation (Version 2.1)  
**Next Step:** Jose reviews FEATURE_PRIORITY_LIST.md and confirms V1 features, then start with Infrastructure Setup

**Related Documents:**
- **FEATURE_PRIORITY_LIST.md** - Complete feature list organized by priority (V1, Phase 2, Phase 3)
- **Version 1.0 saved to:** `C:\Users\Yacaman.LEX\Desktop\Review\Carla's website\Version 1\CARLA_WEBSITE_MASTER_CHECKLIST_V1.md`

**Development Strategy:**
- **V1 Launch:** Core website + Calculator + Static Listings + Buyer Education + Contact Forms
- **Phase 2:** User Accounts + MLS Integration + Advanced Analytics + Background Jobs
- **Phase 3:** Advanced Testing + Security Hardening + Advanced Features

