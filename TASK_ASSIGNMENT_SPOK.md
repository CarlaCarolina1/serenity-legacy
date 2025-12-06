# 📋 TASK ASSIGNMENT FOR SPOK

**From:** Neo  
**To:** Spok (Codex - Verification Engineer)  
**Date:** November 7, 2025  
**Subject:** Parallel Work Assignment - Calculator Fix + Infrastructure

---

## 🎯 **YOUR ASSIGNMENT (SPOK)**

### **Priority 1: Fix Calculator Blank Page Issue** 🔴 CRITICAL

**Problem:** Calculator page shows blank when accessed at `/calculator` route.

**What I Need You To Do:**
1. **Debug the calculator rendering issue**
   - Check `frontend/src/components/Calculator/Calculator.tsx`
   - Check `frontend/src/pages/Calculator.tsx`
   - Check `frontend/src/App.tsx` routing
   - Check `frontend/src/main.tsx` entry point
   - Check browser console for errors

2. **Verify the fix works**
   - Start dev server: `cd frontend && npm run dev`
   - Navigate to: `http://localhost:5174/calculator`
   - **VERIFY:** Calculator actually renders and works
   - Test calculations with sample data
   - **DO NOT mark as done until you've verified it works in browser**

3. **Report back:**
   - What was the issue?
   - How did you fix it?
   - Confirmation that it works

**Files to Review:**
- `frontend/src/components/Calculator/Calculator.tsx`
- `frontend/src/pages/Calculator.tsx`
- `frontend/src/App.tsx`
- `frontend/src/main.tsx`
- `frontend/index.html`

---

### **Priority 2: Database Setup (If Calculator Fix is Quick)** 🟡 IMPORTANT

**If you finish the calculator fix quickly, continue with:**

1. **Verify Alembic setup**
   - Check `backend/alembic/env.py` is correct
   - Check `backend/alembic.ini` configuration
   - Verify migration structure

2. **Test database connection**
   - Once PostgreSQL is available, test connection
   - Run `alembic upgrade head` when ready
   - Verify Property model works

3. **Seed Clermont House data**
   - Use `database/seeds/clermont_house.json`
   - Create seed script if needed
   - Verify data loads correctly

**Note:** This depends on PostgreSQL being available. If not, focus on calculator fix.

---

## ✅ **VERIFICATION REQUIREMENTS**

**CRITICAL:** Per Jose's instruction:
- **NEVER mark tasks as done unless you've verified them yourself**
- **Test in actual browser**
- **Confirm functionality works end-to-end**
- **Report what you tested and results**

---

## 📝 **WHAT I'M WORKING ON (NEO)**

While you fix the calculator, I'll be working on:

### **1. Enhanced Calculator Implementation** 🧮
- **Incorporating features from Jose's HTML calculator:**
  - Chart.js integration for 3-year projection visualization
  - Detailed 3-year projection table (principal/interest/balance per year)
  - Buyer checklists integration (sticky sidebar)
  - Down payment toggle (% vs $)
  - Graph/Table tabs
  - Better visual design (navy blue + gold color scheme)
  - Currency formatting (prefixes, suffixes)
  - Professional styling

- **Keeping React/TypeScript structure** (as Jose approved)
- **Making everything functional** (no placeholders)

### **2. Implementation Steps:**
1. Install Chart.js: `npm install chart.js react-chartjs-2`
2. Enhance 3-year projection calculation (actual breakdown per year)
3. Create chart component
4. Create table component
5. Add buyer checklists component
6. Apply design improvements
7. **VERIFY everything works** before marking done

### **3. What I'll Deliver:**
- Enhanced calculator with all features from Jose's version
- Chart.js visualization
- Detailed projection table
- Integrated buyer checklists
- Professional design matching Jose's color scheme
- **All functional and tested**

---

## 🔄 **COORDINATION**

### **After You Fix Calculator:**
1. Let me know it's working
2. I'll test it myself to verify
3. Then I'll continue with enhancements

### **If You Need Help:**
- Check browser console for errors
- Verify all imports are correct
- Check React Router configuration
- Test component rendering in isolation

### **If Calculator Fix Takes Time:**
- Focus on that first
- Database setup can wait
- Calculator is the V1 keystone feature

---

## 📋 **SUMMARY**

**Spok's Tasks:**
1. 🔴 Fix calculator blank page issue
2. ✅ Verify it works in browser
3. 🟡 Database setup (if time permits)

**Neo's Tasks:**
1. 🧮 Enhance calculator with Jose's features
2. 📊 Add Chart.js visualization
3. 📋 Add buyer checklists
4. 🎨 Apply design improvements
5. ✅ Verify everything works

---

**Let's work in parallel and deliver a working, enhanced calculator!** 🚀

---

**Remember:** Only mark things as done after you've verified them yourself!

