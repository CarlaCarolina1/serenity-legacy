# 🌐 WEBSITE ACCESS

**Date:** November 7, 2025  
**Status:** Servers Starting

---

## 🚀 **ACCESS THE WEBSITE**

### **Frontend (Main Website)**
**URL:** http://localhost:5173

This is the main website where you can:
- Browse properties
- View property details
- Use the calculator
- Submit contact forms
- Share properties

### **Backend API**
**URL:** http://localhost:8000

**API Documentation:**
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

**Health Check:** http://localhost:8000/health

---

## ⚠️ **IMPORTANT NOTES**

### **If Backend Isn't Running:**
The frontend will automatically fall back to local data, so you can still:
- Browse properties (using local data)
- View property details
- Use the calculator
- See all pages

### **If Database Isn't Set Up:**
The backend will start but property endpoints may return empty results. The frontend will use local data as fallback.

---

## 🔧 **TROUBLESHOOTING**

### **Frontend Not Loading?**
1. Check if port 5173 is available
2. Check terminal for errors
3. Try: `cd frontend && npm run dev`

### **Backend Not Loading?**
1. Check if port 8000 is available
2. Check if database is set up (or use SQLite)
3. Try: `cd backend && uvicorn app.main:app --reload`

### **Database Errors?**
The frontend will still work with local data fallback!

---

## ✅ **WHAT TO EXPECT**

When you open http://localhost:5173, you should see:
- Home page with hero section
- Navigation with 5 buttons
- Properties page with Clermont House listing
- All pages working
- Calculator functional
- Contact form working

**Everything should work even if the backend isn't fully set up!**

---

**Enjoy exploring the website!** 🎉

