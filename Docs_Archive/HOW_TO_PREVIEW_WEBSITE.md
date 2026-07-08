# 🖥️ How to Preview the Website in Cursor

**Last Updated:** November 19, 2025

---

## 📋 **QUICK ANSWER:**

**Cursor does NOT have a built-in live server.** You have 3 options:

1. **For React Website (Carla's Website):** Use Vite's built-in dev server (already configured!)
2. **For Simple HTML Files:** Install Live Server extension OR use Cursor's Simple Browser
3. **Best Option:** Use Vite for the React app (recommended)

---

## 🚀 **OPTION 1: For Carla's React Website (RECOMMENDED)**

**You already have a live server built-in!** The React project uses **Vite**, which includes a development server.

### How to Use:

1. **Open Terminal in Cursor:**
   - Press `` Ctrl + ` `` (backtick) to open terminal
   - Or go to: Terminal → New Terminal

2. **Navigate to Frontend Folder:**
   ```bash
   cd "Carlas Website/frontend"
   ```

3. **Start the Dev Server:**
   ```bash
   npm run dev
   ```

4. **View in Browser:**
   - Vite will show you a URL like: `http://localhost:5173`
   - Press `Ctrl + Click` on the URL to open in browser
   - The page will **automatically reload** when you make changes!

### Benefits:
- ✅ Already configured (no installation needed)
- ✅ Hot Module Replacement (instant updates)
- ✅ Works with React, TypeScript, and all your components
- ✅ Shows errors in browser console
- ✅ Fast and optimized

---

## 📄 **OPTION 2: For Simple HTML Files (Like VIEW_LOGOS.html)**

### **A. Install Live Server Extension (Best for HTML files)**

1. **Install Extension:**
   - Press `Ctrl + Shift + X` (or `Cmd + Shift + X` on Mac) to open Extensions
   - Search for: **"Live Server"** by Ritwick Dey
   - Click **Install**

2. **Use Live Server:**
   - Right-click any HTML file in the editor
   - Select **"Open with Live Server"**
   - Or click the **"Go Live"** button in the status bar (bottom right)
   - Browser opens automatically at `http://127.0.0.1:5500/`

### **B. Use Cursor's Simple Browser (No Extension Needed)**

1. **Open Simple Browser:**
   - Press `Ctrl + Shift + P` (Command Palette)
   - Type: **"Simple Browser: Show"**
   - Press Enter

2. **Enter URL:**
   - Type: `file:///C:/Users/Yacaman.LEX/Desktop/VIEW_LOGOS.html`
   - Or if using Live Server: `http://127.0.0.1:5500/VIEW_LOGOS.html`

---

## 🎯 **RECOMMENDATION FOR YOUR PROJECT:**

### **For Carla's Website (React App):**
✅ **Use Vite Dev Server** (`npm run dev`)
- This is the proper way to preview React applications
- Already set up and ready to use
- Best performance and features

### **For Simple HTML Files:**
✅ **Install Live Server Extension**
- Easiest for quick HTML previews
- Auto-refresh on save
- Works great for static HTML files

---

## 📝 **QUICK REFERENCE:**

| File Type | Method | Command |
|-----------|--------|---------|
| React App | Vite Dev Server | `cd frontend && npm run dev` |
| Simple HTML | Live Server Extension | Right-click → "Open with Live Server" |
| Simple HTML | Simple Browser | `Ctrl+Shift+P` → "Simple Browser: Show" |

---

## ❓ **FAQ:**

**Q: Do I need to install Live Server for the React website?**  
A: No! Use Vite (`npm run dev`) - it's already configured and better for React.

**Q: Can I preview HTML files without installing anything?**  
A: Yes! Use Cursor's Simple Browser (Option 2B above).

**Q: Which is better - Live Server or Simple Browser?**  
A: Live Server is better for HTML files (auto-refresh). Simple Browser is built-in but requires manual refresh.

---

## 🚀 **NEXT STEPS:**

1. **For React Website:** Just run `npm run dev` in the frontend folder
2. **For HTML Files:** Install Live Server extension (takes 30 seconds)
3. **Both work great!** Choose based on what you're previewing.

---

**Need Help?** Just ask Neo - he can help you set it up!

