# 🚀 QUICK START GUIDE

**Get Carla's website running in 5 minutes!**

---

## **STEP 1: Set Up Database**

### **Option A: PostgreSQL (Recommended)**

```bash
# Create database
createdb carlas_website
```

### **Option B: SQLite (Quick Test)**

Create `backend/.env`:
```
DATABASE_URL=sqlite:///./carlas_website.db
```

---

## **STEP 2: Configure Backend**

```bash
cd backend
cp .env.example .env
# Edit .env if needed (defaults work for local dev)
```

---

## **STEP 3: Run Migrations & Seed**

```bash
cd backend
alembic upgrade head
python database/seeds/seed_properties.py
```

---

## **STEP 4: Start Servers**

**Terminal 1 (Backend):**
```bash
cd backend
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

---

## **STEP 5: Open Website**

- **Website:** http://localhost:5173
- **API Docs:** http://localhost:8000/docs

---

## ✅ **DONE!**

The website is now running. You can:
- Browse properties
- View property details
- Use the calculator
- Submit contact forms
- Share properties

**Everything works!**

