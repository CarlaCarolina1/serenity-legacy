# 🧮 Calculator Preview Guide

**Date:** November 7, 2025  
**Status:** Ready to Preview

---

## 🚀 **HOW TO PREVIEW THE CALCULATOR**

### **Step 1: Start the Frontend Server**

Open a terminal and run:
```bash
cd "C:\Users\Yacaman.LEX\Desktop\Carlas Website\frontend"
npm run dev
```

**Expected Output:**
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### **Step 2: Open in Browser**

1. Open your web browser
2. Navigate to: **http://localhost:5173**
3. You should see the home page with "Carla's Real Estate"
4. Click the button: **"Calculate Your Home Ownership Costs"**
5. OR go directly to: **http://localhost:5173/calculator**

---

## 🎯 **WHAT TO TEST**

### **Basic Functionality:**
1. ✅ Enter a property price (e.g., $350,000)
2. ✅ Adjust down payment using the slider or type a value
3. ✅ Change interest rate (default is 6.5%)
4. ✅ Select loan term (15 or 30 years)
5. ✅ Enter property tax, insurance, HOA (or leave blank)
6. ✅ See monthly payment breakdown update in real-time
7. ✅ See 3-year projection totals

### **Features to Check:**
- ✅ Down payment slider works smoothly
- ✅ Down payment percentage updates when you type a dollar amount
- ✅ Down payment dollar amount updates when you move the slider
- ✅ PMI appears if down payment < 20%
- ✅ All calculations are accurate
- ✅ Mobile responsive (try resizing browser)
- ✅ Disclaimer is visible

### **Test Scenarios:**
1. **Standard Purchase:** $350,000 home, 20% down, 6.5% rate, 30-year term
2. **Low Down Payment:** $350,000 home, 5% down (should show PMI)
3. **High-End Property:** $750,000 home, 25% down, 6.0% rate
4. **With HOA:** Add $200/month HOA fee
5. **Custom Taxes/Insurance:** Enter specific values

---

## 📋 **CALCULATOR FEATURES**

### **What's Included:**
- ✅ Property price input
- ✅ Down payment (slider + text input, percentage + dollar amount)
- ✅ Interest rate input
- ✅ Loan term selection (15 or 30 years)
- ✅ Property tax input (annual)
- ✅ Insurance input (annual)
- ✅ HOA fee input (monthly)
- ✅ Monthly payment breakdown:
  - Principal & Interest
  - Property Tax (monthly)
  - Insurance (monthly)
  - HOA Fee
  - PMI (if applicable)
  - **Total Monthly Payment**
- ✅ 3-Year Projection:
  - Year 1 Total
  - Year 2 Total
  - Year 3 Total
- ✅ Disclaimer (prominent, yellow background)
- ✅ Mobile-responsive design
- ✅ Real-time calculations (updates as you type)

### **What's NOT Included Yet (Phase 2):**
- ⏳ Property-specific auto-fill (will connect to property data)
- ⏳ Tax/insurance API integration (will pull from county APIs)
- ⏳ Save calculator results (requires user accounts)
- ⏳ Visual charts/graphs (can add Chart.js later)
- ⏳ Amortization schedule details

---

## 🎨 **DESIGN NOTES**

- **Fonts:** Uses Prata (headings) and Raleway (body) as specified
- **Colors:** Uses CSS variables (can be updated from PDF design)
- **Layout:** Responsive grid layout
- **Styling:** Clean, professional, matches real estate website aesthetic

---

## ⚠️ **KNOWN LIMITATIONS**

1. **3-Year Projection:** Currently shows same total for all 3 years (doesn't account for principal paydown yet - can enhance)
2. **Tax/Insurance:** Manual input only (no API integration yet)
3. **No Validation:** Doesn't prevent invalid inputs (e.g., negative numbers)
4. **No Error Handling:** Doesn't show error messages for edge cases

---

## 💡 **WHAT TO LOOK FOR**

When you preview, please check:
1. **Does it look professional?** (Design, spacing, fonts)
2. **Are calculations accurate?** (Compare to Bankrate or similar)
3. **Is it easy to use?** (Intuitive, clear labels)
4. **Does it work on mobile?** (Resize browser or use mobile device)
5. **What's missing?** (What features from your calculator should I add?)

---

## 🔄 **NEXT STEPS**

After you preview:
1. Share your calculator code/design
2. I'll compare features
3. I'll incorporate any missing features
4. We'll refine until it's perfect!

---

**Ready to preview!** Start the dev server and let me know what you think! 🚀

