# 🚀 QUICK START - DEV SERVER

**For Spok:** How to start the dev server and debug the calculator

---

## ✅ **EASIEST WAY (PowerShell Script)**

I created a script that handles everything:

```powershell
cd "C:\Users\Yacaman.LEX\Desktop\Carlas Website"
.\start_dev_server.ps1
```

This script:
- ✅ Refreshes PATH automatically
- ✅ Verifies Node.js and npm work
- ✅ Installs dependencies if needed
- ✅ Starts the dev server

---

## 🔧 **MANUAL WAY (If Script Doesn't Work)**

### **Step 1: Open Fresh PowerShell**
Open a NEW PowerShell window (this ensures PATH is fresh)

### **Step 2: Navigate and Start**
```powershell
cd "C:\Users\Yacaman.LEX\Desktop\Carlas Website\frontend"
npm run dev
```

### **Step 3: Check Output**
You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

## 🌐 **ACCESS THE CALCULATOR**

Once server is running:
1. Open browser
2. Go to: `http://localhost:5173/calculator`
3. Check browser console (F12) for errors
4. Debug the blank page issue

---

## 🔍 **WHAT TO CHECK**

**If page is blank:**
1. **Browser Console (F12):**
   - Look for red errors
   - Check for missing imports
   - Check for Chart.js errors

2. **Network Tab:**
   - Check if files load (no 404s)
   - Check if fonts load
   - Check if CSS loads

3. **Component Rendering:**
   - Check if Calculator component renders
   - Check if Chart.js initializes
   - Check for React errors

---

## ✅ **FILES ARE READY**

All calculator files exist:
- ✅ `Calculator.tsx` - Main component
- ✅ `ProjectionChart.tsx` - Chart component
- ✅ `ProjectionTable.tsx` - Table component
- ✅ `BuyerChecklist.tsx` - Checklist component
- ✅ Routes configured in `App.tsx`
- ✅ Dependencies installed

**The code is there - just need to debug why it's not rendering.**

---

**Ready for you to debug!**

