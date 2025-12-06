# 📝 HOW TO EDIT WEBSITE CONTENT

**Simple Guide for Editing Text on Carla's Website**

---

## 🎯 **QUICK START**

All website text is now in **ONE FILE** that you can easily edit:

**File Location:** `frontend/src/data/siteContent.ts`

**No coding knowledge needed!** Just edit the text between the quotes.

---

## 📂 **WHERE TO FIND THE FILE**

1. Open the `Carlas Website` folder on your desktop
2. Go to `frontend` → `src` → `data`
3. Open `siteContent.ts` in any text editor (Notepad, VS Code, etc.)

---

## ✏️ **HOW TO EDIT**

### **Example: Change the Website Name**

**Find this:**
```typescript
siteName: "Carla's Real Estate",
```

**Change to:**
```typescript
siteName: "Carla's Luxury Real Estate",
```

**That's it!** Just change the text between the quotes.

---

## 📋 **WHAT YOU CAN EDIT**

### **1. Site Identity**
- Website name (appears in header)
- Site tagline

### **2. Contact Information**
- Location
- Service areas
- Phone number (add if you have one)
- Email address (add if you have one)
- Office address (add if you have one)

### **3. Home Page**
- Hero section title and subtitle
- Button text
- Services descriptions
- Neighborhood descriptions
- Call-to-action text

### **4. About Page**
- Page title and subtitle
- Experience description
- Areas served (add/remove areas)
- "Why Choose Us" list items

### **5. Contact Page**
- Page title and subtitle
- Contact information text
- Form labels and placeholders
- Success/error messages

### **6. Footer**
- Company name
- Tagline
- Contact information
- Services list

---

## ⚠️ **IMPORTANT RULES**

1. **Keep the quotes** - Text must be between `"quotes"`
2. **Keep the commas** - Each line ends with a comma (except the last one)
3. **Keep the structure** - Don't delete brackets `{}` or colons `:`
4. **Save the file** - After editing, save the file
5. **Refresh the website** - The changes will appear automatically (if dev server is running)

---

## 🔄 **AFTER EDITING**

1. **Save the file** (`Ctrl+S` or `Cmd+S`)
2. **Check the website** - If the dev server is running, changes appear automatically
3. **If website doesn't update:**
   - Stop the dev server (`Ctrl+C` in terminal)
   - Restart it: `npm run dev` (in the `frontend` folder)

---

## 📝 **EXAMPLES**

### **Example 1: Change Contact Location**

**Find:**
```typescript
location: "Orlando, Florida",
```

**Change to:**
```typescript
location: "Orlando, FL 32801",
```

### **Example 2: Add Phone Number**

**Find:**
```typescript
phone: "", // Add phone number here
```

**Change to:**
```typescript
phone: "(407) 555-1234",
```

### **Example 3: Change Hero Title**

**Find:**
```typescript
title: "Find Your Dream Home in Central Florida",
```

**Change to:**
```typescript
title: "Discover Your Perfect Home in Central Florida",
```

### **Example 4: Add a Neighborhood**

**Find:**
```typescript
items: [
  {
    name: "Reunion Resort",
    description: "Luxury resort living with world-class amenities",
  },
  // ... more items
]
```

**Add a new item:**
```typescript
items: [
  {
    name: "Reunion Resort",
    description: "Luxury resort living with world-class amenities",
  },
  {
    name: "Windermere",
    description: "Prestigious community with luxury estates",
  },
  // ... more items
]
```

---

## 🆘 **NEED HELP?**

**If something breaks:**
1. Don't panic - just undo your changes
2. Make sure you kept all quotes, commas, and brackets
3. Check that you didn't delete any required parts

**Common mistakes:**
- ❌ Forgetting quotes around text
- ❌ Forgetting commas at end of lines
- ❌ Deleting brackets or colons
- ✅ Just edit the text between quotes - that's safe!

---

## ✅ **QUICK REFERENCE**

**File to edit:** `frontend/src/data/siteContent.ts`

**What to edit:** Just the text between quotes

**After editing:** Save file, refresh website

**That's it!** You can now edit all website text easily.

---

**Last Updated:** November 13, 2025  
**Status:** Ready to use - All content is now editable!

