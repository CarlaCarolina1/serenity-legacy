# HTML PREVIEW TOOL - DESIGN SPECIFICATION
**Date:** November 6, 2025  
**Purpose:** Canvas feature for previewing HTML files (like Gemini's canvas)  
**Status:** Design Complete - Ready to Build

---

## 🎯 **PROJECT GOAL**

Create a simple, local HTML preview tool that:
- Opens HTML files in a browser automatically
- Auto-reloads when files change
- Shows errors if any
- Works like Gemini's canvas feature
- We own it (no external dependencies)

---

## 🏗️ **ARCHITECTURE**

### **Option 1: Simple Python Flask Server** ⭐ RECOMMENDED
**Pros:**
- Simple to build (1-2 hours)
- Auto-reload on file changes
- Can show errors
- Works with any HTML file
- No installation needed (just run Python script)

**Cons:**
- Need to keep terminal open
- Basic interface (terminal output)

**Implementation:**
```python
# Simple Flask server with auto-reload
from flask import Flask, send_file
import webbrowser
import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

app = Flask(__name__)

@app.route('/')
def index():
    return send_file('index.html')

class FileChangeHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if event.src_path.endswith('.html'):
            print(f"File changed: {event.src_path}")
            # Browser will auto-reload if we inject reload script

if __name__ == '__main__':
    # Watch for file changes
    event_handler = FileChangeHandler()
    observer = Observer()
    observer.schedule(event_handler, path='.', recursive=True)
    observer.start()
    
    # Open browser
    webbrowser.open('http://localhost:5000')
    
    # Run server
    app.run(debug=True, use_reloader=True)
```

### **Option 2: Electron App with Embedded Browser**
**Pros:**
- More control over UI
- Can show file tree
- Can show errors in UI
- Professional appearance

**Cons:**
- More complex (4-6 hours)
- Need to build Electron app
- More dependencies

### **Option 3: Browser Extension**
**Pros:**
- Integrates with browser
- Can preview any HTML file

**Cons:**
- Browser-specific
- More complex
- Need to install extension

---

## ✅ **RECOMMENDED SOLUTION: Simple Flask Server**

### **Features:**
1. **Auto-Open Browser** - Opens HTML file in default browser automatically
2. **Auto-Reload** - Watches for file changes, reloads browser automatically
3. **Error Display** - Shows errors in terminal (can enhance to show in browser)
4. **Multiple Files** - Can preview any HTML file in project
5. **Hot Reload** - Changes appear instantly

### **File Structure:**
```
Carlas Website/
├── preview_server.py      # Main server script
├── index.html            # Main HTML file
├── css/
├── js/
└── ...
```

### **Usage:**
```bash
# Run preview server
python preview_server.py

# Browser opens automatically
# Files auto-reload on save
# Press Ctrl+C to stop
```

### **Enhanced Features (Future):**
- File tree sidebar (show all HTML files)
- Error overlay in browser
- Mobile device preview (responsive testing)
- Multiple browser tabs (test in different browsers)
- Network throttling (test slow connections)

---

## 🚀 **IMPLEMENTATION PLAN**

### **Phase 1: Basic Server (1 hour)**
- ✅ Flask server setup
- ✅ Auto-open browser
- ✅ Serve HTML files
- ✅ Basic file watching

### **Phase 2: Auto-Reload (30 minutes)**
- ✅ Watch for file changes
- ✅ Inject reload script into HTML
- ✅ Auto-reload on save

### **Phase 3: Error Display (30 minutes)**
- ✅ Catch and display errors
- ✅ Show in terminal (can enhance to browser later)

### **Phase 4: Enhanced Features (Optional)**
- ⏸️ File tree sidebar
- ⏸️ Error overlay
- ⏸️ Mobile preview
- ⏸️ Multiple browser support

---

## 💡 **ALTERNATIVE: Use Existing Tools**

### **Option A: VS Code Live Server Extension**
- Already exists
- Just install extension
- Right-click HTML → "Open with Live Server"
- Auto-reloads on save

**Pros:** Zero development time  
**Cons:** Need VS Code, not "ours"

### **Option B: Python http.server**
```bash
python -m http.server 8000
# Open http://localhost:8000
```

**Pros:** Built into Python, simple  
**Cons:** No auto-reload, manual browser open

### **Option C: npm http-server**
```bash
npm install -g http-server
http-server -o
```

**Pros:** Simple, auto-open  
**Cons:** Need Node.js, no auto-reload

---

## 🎯 **RECOMMENDATION**

**Build Simple Flask Server** ⭐

**Why:**
1. We own it (no external dependencies)
2. Simple to build (1-2 hours)
3. Auto-reload works great
4. Can enhance later if needed
5. Works for any HTML project

**Start Simple, Enhance Later:**
- Phase 1: Basic server (today)
- Phase 2: Auto-reload (today)
- Phase 3: Enhanced features (if needed)

---

## 📋 **IMPLEMENTATION CHECKLIST**

- [ ] Create Flask server script
- [ ] Add file watching (watchdog)
- [ ] Add auto-open browser
- [ ] Add auto-reload script injection
- [ ] Test with sample HTML file
- [ ] Test file change detection
- [ ] Test auto-reload
- [ ] Create README with usage instructions
- [ ] Test with Carla's website files

---

**Design Date:** November 6, 2025  
**Status:** Ready to implement! 🚀

