# 🌐 How to Preview Carla's Website Live While Working

**Date:** November 19, 2025  
**Purpose:** Guide for previewing the website in real-time while Neo is working on it

---

## 🚀 **Quick Start**

### **Option 1: Vite Dev Server (Recommended)**

The website uses Vite, which automatically provides a live preview server with hot-reload (changes appear instantly).

#### **Start the Frontend:**
```bash
cd "C:\Users\Yacaman.LEX\Desktop\Carlas Website\frontend"
npm run dev
```

**What happens:**
- Vite starts a development server
- Usually runs on `http://localhost:5173`
- The terminal will show the exact URL (e.g., `Local: http://localhost:5173`)
- **Keep this terminal window open** - closing it stops the server

#### **Start the Backend (if needed):**
```bash
cd "C:\Users\Yacaman.LEX\Desktop\Carlas Website\backend"
python -m uvicorn app.main:app --reload --port 8000
```

**What happens:**
- FastAPI starts on `http://localhost:8000`
- `--reload` means it auto-restarts when code changes
- **Keep this terminal window open**

#### **View the Website:**
1. **Open Google Chrome** (preferred browser for previews)
2. Go to `http://localhost:5173`
3. The website will automatically refresh when Neo makes changes!

**Note:** Always use Google Chrome for previews. Firefox or Brave are acceptable alternatives, but **NEVER use Microsoft Edge**.

---

## 🔄 **Auto-Refresh Feature**

Vite's dev server has **Hot Module Replacement (HMR)**:
- ✅ Changes to React components appear instantly
- ✅ No need to manually refresh the page
- ✅ Your scroll position and form inputs are preserved
- ✅ Only the changed parts update (not the whole page)

---

## 📱 **Preview on Mobile**

You can preview the website on your phone while it's running on your computer:

1. **Find your computer's IP address:**
   - Open PowerShell
   - Run: `ipconfig`
   - Look for "IPv4 Address" (e.g., `192.168.1.100`)

2. **Update Vite config (if needed):**
   - Vite usually shows both `Local` and `Network` URLs
   - The Network URL is accessible from other devices on your Wi-Fi

3. **Open on your phone:**
   - Make sure your phone is on the same Wi-Fi network
   - Open browser on phone
   - Go to: `http://YOUR_IP_ADDRESS:5173` (e.g., `http://192.168.1.100:5173`)

---

## 🛠️ **Troubleshooting**

### **Port Already in Use:**
If you see "Port 5173 is already in use":
- Another instance might be running
- Check if you already have the dev server running
- Or use a different port: `npm run dev -- --port 5174`

### **Changes Not Appearing:**
1. Check the terminal for errors
2. Hard refresh the browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
3. Check browser console for errors: `F12` → Console tab

### **Backend Not Connecting:**
1. Make sure the backend is running on port 8000
2. Check `backend/.env` has correct database settings
3. Check browser console for CORS errors

---

## 📋 **Quick Reference Commands**

### **Start Everything:**
```bash
# Terminal 1 - Frontend
cd "C:\Users\Yacaman.LEX\Desktop\Carlas Website\frontend"
npm run dev

# Terminal 2 - Backend (if needed)
cd "C:\Users\Yacaman.LEX\Desktop\Carlas Website\backend"
python -m uvicorn app.main:app --reload --port 8000
```

### **Stop Servers:**
- Press `Ctrl + C` in the terminal where the server is running

---

## 🎯 **Best Practices**

1. **Keep Both Servers Running:**
   - Frontend (Vite) on port 5173
   - Backend (FastAPI) on port 8000
   - Keep both terminal windows open

2. **Check Terminal Output:**
   - Vite shows compilation errors in the terminal
   - FastAPI shows API errors in the terminal
   - Both show when files change

3. **Browser DevTools (Chrome):**
   - Press `F12` to open Chrome DevTools
   - Check Console for JavaScript errors
   - Check Network tab for API call issues
   - Chrome DevTools provides the best debugging experience

4. **Multiple Browsers:**
   - Primary: Use Google Chrome for all previews
   - Secondary: Firefox or Brave for cross-browser testing if needed
   - **Never use Microsoft Edge** - It's forbidden

---

## 🔗 **URLs**

- **Frontend:** `http://localhost:5173`
- **Backend API:** `http://localhost:8000`
- **API Health Check:** `http://localhost:8000/health`
- **API Docs:** `http://localhost:8000/docs` (Swagger UI)

---

## 💡 **Pro Tips**

1. **Always Use Chrome:**
   - Set Chrome as your default browser for development
   - Bookmark `http://localhost:5173` in Chrome for quick access
   - Chrome provides the best development experience

2. **Use Multiple Monitors:**
   - Keep Chrome browser on one screen
   - Keep code editor on another
   - See changes instantly!

3. **Mobile Testing:**
   - Use Chrome DevTools mobile emulator (F12 → Toggle device toolbar)
   - Or use the Network URL to test on your phone
   - Test touch interactions and mobile layout

4. **Chrome Incognito Mode:**
   - Sometimes browser cache causes issues
   - Use Chrome incognito mode (`Ctrl + Shift + N`) for clean testing
   - This ensures no cached files interfere with previews

---

## ⚠️ **Important Notes**

- **ALWAYS use Google Chrome for previews** - This is the preferred browser
- **Never use Microsoft Edge** - Edge is forbidden due to telemetry concerns
- **Alternative browsers:** Firefox or Brave are acceptable if Chrome is unavailable
- **Keep terminals open** - Closing them stops the servers
- **Check for errors** - Terminal and browser console show issues
- **Backend required** - Some features need the backend running (properties, contact forms)

---

**Last Updated:** November 19, 2025  
**Status:** Ready to Use

