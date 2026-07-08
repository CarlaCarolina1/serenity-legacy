# FINAL PROMPT FOR LOVABLE - CARLA'S REAL ESTATE WEBSITE

**Project:** Real Estate Website for Carla - Independent Realtor in Orlando, Florida  
**Primary Goals:** Lead Generation + Showcase Listings  
**Design Reference:** PDF attached (80% design match required)  
**Fonts:** Prata (headings) and Raleway (body text) - provided in zip files

---

## 🎨 DESIGN & BRANDING

**Color Scheme:** Extract color palette from the attached PDF design. Use those exact colors throughout the site for consistency with Carla's brand.

**Typography:**
- **Headings/Titles:** Prata font (provided in Prata.zip)
- **Body Text:** Raleway font (provided in Prata,Raleway.zip)
- Use variable font weights where available for flexibility

**Design Style:**
- Modern, clean, professional real estate aesthetic
- Mobile-first responsive design (optimized for Facebook/Instagram sharing)
- Fast loading (<3 seconds initial load)
- High-quality property images with lazy loading
- Smooth animations and transitions
- Social media optimized (Open Graph tags for beautiful previews)

---

## 📱 NAVIGATION STRUCTURE

### Top Right Action Buttons (5 buttons in this exact order):
1. **Schedule Tour** - Opens tour booking form/calendar
2. **Map View** - Interactive map with property markers
3. **Home Ownership Calculator** - Opens calculator (see Calculator section below)
4. **Search Properties** - Main property search
5. **Contact Us** - Quick contact form/popup

### Main Navigation Menu (Horizontal):
- **Home** - Hero section, featured properties, services overview
- **Search Properties** - Main search with filters (Buy/Rent/Investment)
- **My Listings** - Carla's exclusive/client listings
- **Buyer Guides** - Four buyer category pages (see Buyer Education section)
- **Services** - Buy, Sell, Rent, Investment Properties, Long-term Rentals
- **About** - Carla's background, credentials, why choose her
- **Resources** - Market Reports, Neighborhood Guides, School Info, HOA Information
- **Contact** - Full contact page with form, phone, email, office location

---

## 🏠 CORE FEATURES

### 1. PROPERTY SEARCH & DISPLAY

**Search Functionality:**
- Advanced filters: Price range (slider), Bedrooms, Bathrooms, Property Type, Neighborhood
- Quick filter buttons: Buy | Rent | Investment | My Listings
- Neighborhood filter: Reunion Resort, Margaritaville, Champions Gate, Clermont, Orlando, Orlando Downtown, Titusville
- Map view with property markers and clustering
- List view with key property details
- Grid view with property cards
- Save search functionality

**Property Detail Pages:**
- Full photo gallery (swipeable on mobile)
- Property-specific Home Ownership Calculator (see Calculator section)
- Property details: Price, Beds, Baths, Sq Ft, Lot Size, Year Built, Property Type
- Neighborhood information card (schools, amenities, HOA, investment potential)
- "Schedule Tour" CTA button
- "Save Property" heart icon (requires login - see User Accounts section)
- "Share Property" buttons (Facebook, Instagram, WhatsApp, Email)
- "Similar Properties" section
- Virtual tour integration (if available)
- Status indicator: Available, Under Contract, Sold, Off Market

**Property Cards (List/Grid View):**
- High-quality property image
- Price, Beds, Baths, Sq Ft
- Neighborhood
- Quick "Calculate Payment" button
- "Save Property" heart icon
- Status badge

---

### 2. HOME OWNERSHIP CALCULATOR (CRITICAL FEATURE)

**Design Reference:** Study these calculator examples for UI/UX:
- https://www.calculator.net/mortgage-calculator.html
- https://www.bankrate.com/mortgages/mortgage-calculator/
- https://www.mortgagecalculator.org/

**Calculator Requirements:**

**Input Fields:**
- **Property Price:** Auto-filled from selected property (or manual entry)
- **Down Payment:** 
  - Scrollable slider/range input (user-friendly)
  - Manual text input option (users can type exact amount)
  - Toggle between percentage (%) and fixed dollar amount ($)
- **Loan Term:** Dropdown (15, 20, 30 years) or input
- **Interest Rate:** Input field (with current rate suggestion)
- **Property Taxes:** Auto-filled from public API (see Tax/Insurance Data section) or manual override
- **Home Insurance:** Auto-filled from estimates (see Tax/Insurance Data section) or manual override
- **HOA Fees:** Auto-filled from property data or manual input
- **PMI:** Auto-calculated if down payment < 20%

**Output Display:**
- **Monthly Payment Breakdown:**
  - Principal & Interest
  - Property Taxes
  - Home Insurance
  - HOA Fees
  - PMI (if applicable)
  - **Total Monthly Payment**
- **3-Year Projection View:**
  - **Year 1:** Total payments, Principal paid, Interest paid, Remaining balance
  - **Year 2:** Total payments, Principal paid, Interest paid, Remaining balance
  - **Year 3:** Total payments, Principal paid, Interest paid, Remaining balance
  - Visual chart/graph showing payment breakdown over 3 years
- **Total Cost Over 3 Years:** Sum of all payments
- **Total Interest Paid Over 3 Years**

**Placement:**
- **Property-Specific Calculator:** On each property detail page, prominent "Calculate My Ownership Costs" button that opens calculator with property data pre-filled
- **Standalone Calculator:** Accessible via "Home Ownership Calculator" button in top navigation and in Resources section
- **Calculator UI:** Similar to the example websites - clean, professional, easy to use, inline display (not hidden in modal unless on mobile)

**Disclaimer (MANDATORY):**
- Clear, visible disclaimer on every calculator result:
  - "This is an estimate only, not a final quote. Actual amounts may vary. Property taxes, insurance rates, and other costs are estimates based on available data. Consult with a mortgage professional for accurate figures."
- Disclaimer must be prominent and cannot be hidden

**Buyer Checklist Integration:**
- Display relevant buyer category checklist next to calculator results (see Buyer Education section)
- Show "What You'll Need" requirements based on selected buyer type

---

### 3. TAX & INSURANCE DATA

**Primary Method:** Pull from public APIs when available
- Property tax data from county property appraiser APIs (Orange County, Osceola County, etc.)
- Insurance estimates based on property value, location, and Florida averages
- HOA fees from property data/MLS

**Fallback Method:** If APIs are unavailable or unreliable
- Calculate estimates based on property value:
  - Property Taxes: ~1.1% of property value annually (Florida average)
  - Home Insurance: ~$1,500-$3,000 annually (varies by property value and location)
  - HOA: From MLS/property data

**User Override:** Always allow users to manually adjust tax, insurance, and HOA values in calculator

---

### 4. BUYER EDUCATION SECTION

**Four Buyer Category Pages:**

#### A. First-Time Homebuyer
- **Credit Score Requirements:** 620+ (FHA), 640+ (Conventional)
- **Down Payment Options:** 
  - FHA: 3.5% minimum
  - Conventional: 3-5% minimum
  - Down payment assistance programs available
- **First-Time Buyer Programs:** FHA loans, VA loans (if applicable), down payment assistance
- **Interactive Checklist:**
  - ☐ Check credit score (aim for 620+)
  - ☐ Save for down payment (3.5-5%)
  - ☐ Get pre-approved
  - ☐ Research first-time buyer programs
  - ☐ Find a realtor (Carla!)
  - ☐ Start house hunting
- **Process Overview:** Step-by-step guide for first-time buyers

#### B. Investment Buyer
- **Credit Score Requirements:** 680+ typically
- **Down Payment:** 20-25% typically required
- **Cash Reserves:** 6 months PITI (Principal, Interest, Taxes, Insurance)
- **ROI Calculator:** Rental income estimates, cash flow projections
- **Investment Considerations:**
  - Rental potential
  - Appreciation potential
  - Tax benefits (1031 exchange info)
  - Property management considerations
- **Interactive Checklist:**
  - ☐ Credit score 680+
  - ☐ 20-25% down payment ready
  - ☐ 6 months cash reserves
  - ☐ Understand rental market
  - ☐ Calculate ROI
  - ☐ Consider property management
- **Orlando Investment Advantages:** Disney area, vacation rental potential, growing market

#### C. International Buyer
- **Credit Requirements:** US credit score or alternative documentation
- **Down Payment:** 20-40% (varies by country and lender)
- **Financing Options:** Cash purchases, international buyer loans, portfolio loans
- **Tax Implications:** FIRPTA, capital gains, property taxes
- **Remote Buying Process:**
  - Virtual tours
  - Power of attorney options
  - Escrow process
  - Closing remotely
- **"Why Orlando?" Section (MANDATORY):**
  - Disney World proximity (tourism, vacation rentals)
  - Growing economy and job market
  - No state income tax
  - Strong rental market
  - International airport access
  - Diverse, welcoming community
  - Year-round warm weather
  - Investment potential (vacation rentals, long-term rentals)
  - Quality of life
  - Education options (universities, international schools)
- **Interactive Checklist:**
  - ☐ Understand US real estate process
  - ☐ Secure financing or cash
  - ☐ Get ITIN if needed
  - ☐ Choose property management (if needed)
  - ☐ Understand tax obligations
  - ☐ Plan for remote closing
- **Resources:** Links to immigration resources, tax advisors, etc.

#### D. Moving Up / Relocating Buyer
- **Selling Current Home First:** Timing considerations
- **Bridge Loans:** Options for buying before selling
- **Contingency Planning:** Making offers contingent on sale
- **Relocation Services:** Moving assistance, area information
- **Interactive Checklist:**
  - ☐ Get current home appraised
  - ☐ Decide: sell first or bridge loan
  - ☐ Get pre-approved for new purchase
  - ☐ Research new area/neighborhoods
  - ☐ Plan timing carefully
- **Orlando Relocation Benefits:** Job market, schools, lifestyle

**Checklist Features:**
- Interactive checkboxes (users can check off completed items)
- Save progress (requires login - see User Accounts section)
- Print-friendly version
- Share checklist via email

---

### 5. USER ACCOUNTS & SAVED PROPERTIES

**Authentication Options:**
- **Facebook Login:** Secure OAuth integration
- **Google Login:** Secure OAuth integration
- **Email/Password:** Traditional signup option
- **Privacy:** No data sold to third parties (see Privacy Policy)

**User Features:**
- **Save Properties:** Heart icon on property cards and detail pages
- **Saved Searches:** Save search criteria and get email alerts
- **Saved Calculator Results:** Save calculator projections for different properties
- **Saved Checklists:** Save progress on buyer education checklists
- **Property History:** View previously viewed properties
- **Email Preferences:** Opt-in for new listing alerts, market updates

**Privacy & Security:**
- Secure authentication (OAuth for social logins)
- Encrypted data storage
- No data sharing with third parties
- Clear privacy policy
- GDPR/CCPA compliance considerations

**Returning User Experience:**
- When user returns and logs in, show:
  - Saved properties
  - Saved searches
  - Recent calculator results
  - Checklist progress
  - Recently viewed properties

---

### 6. MLS INTEGRATION

**MLS Access:** Carla has MLS access - connect to MLS feed

**Sync Frequency:**
- **Primary:** Daily sync (100% acceptable)
- **Secondary:** Real-time updates if not too complicated (preferred but not required)

**Property Status Management:**
- Auto-update property status: Available, Under Contract, Sold, Off Market
- **Sold Properties:** 
  - Remove from active listings automatically
  - OR move to "Recently Sold" section (archive after 30 days)
  - Update status in real-time when possible
- **Status Indicators:** Clear visual badges on property cards and detail pages

**Property Data:**
- Pull all property details from MLS
- Images, descriptions, specifications
- Neighborhood data
- Tax information
- HOA information

---

### 7. SOCIAL SHARING & TRACKING

**Social Sharing Buttons:**
- On every property listing: Facebook, Instagram, WhatsApp, Email
- Shareable property links with property image and key details
- Open Graph meta tags for beautiful previews when shared

**Analytics & Tracking:**
- **Track Social Shares:** Which properties are shared most frequently
- **Track Property Clicks:** Which properties get the most views
- **Track User Behavior:** 
  - Most viewed properties
  - Most saved properties
  - Most shared properties
  - Calculator usage
  - Buyer guide page views
- **Dashboard for Carla:** Admin panel to view analytics (optional but recommended)

---

### 8. LEAD GENERATION FEATURES

**Contact Forms:**
- **Quick Contact Popup:** 
  - Appears after user views multiple properties or spends time on site
  - Button: "Interested in these properties? Let's talk!"
  - **Disclaimer in Popup:** "A real person will contact you. Your information will not be sold or telemarketed to 3rd party companies."
  - Fields: Name, Email, Phone, Message (optional)
- **Property-Specific Contact:** "Schedule a Showing" form on each property
- **General Contact:** Full contact page
- **Calculator Contact:** "Like these numbers? Let's talk!" button next to calculator results

**Lead Capture:**
- "Get Notified of New Listings" email signup (homepage and property pages)
- "Schedule a Showing" calendar booking
- "Get Pre-Approved" mortgage partner link (if applicable)
- "Request Market Report" form

**Follow-Up:**
- Email notifications to Carla when leads are generated
- Lead information stored securely
- CRM integration capability (optional)

---

### 9. NEIGHBORHOOD INFORMATION

**Neighborhood Pages/Sections:**
- Reunion Resort area
- Margaritaville area
- Champions Gate area
- Clermont area
- Orlando area
- Orlando Downtown area
- Titusville

**Neighborhood Content:**
- School district information
- HOA information
- Amenities (parks, shopping, restaurants)
- Investment potential
- Market trends
- Average home prices
- Property types available

**Neighborhood Filters:**
- Filter properties by neighborhood
- Neighborhood-specific landing pages for SEO

---

### 10. MOBILE OPTIMIZATION

**Mobile-First Design:**
- Responsive design (mobile, tablet, desktop)
- Touch-friendly buttons and inputs
- Swipeable property galleries
- One-tap calling
- Mobile-optimized calculator
- Fast loading on mobile networks
- Social sharing optimized for mobile apps

**Facebook/Instagram Sharing:**
- Optimized preview cards
- High-quality images
- Compelling descriptions
- Easy sharing from mobile

---

## 🔧 TECHNICAL REQUIREMENTS

**Performance:**
- Fast page load times (<3 seconds initial load)
- Image optimization (WebP format, lazy loading)
- Code optimization
- CDN for static assets

**SEO:**
- SEO-optimized pages
- Meta tags for all pages
- Open Graph tags for social sharing
- Schema markup for properties
- Neighborhood-specific landing pages

**Accessibility:**
- WCAG compliance
- Screen reader friendly
- Keyboard navigation
- High contrast ratios

**Browser Compatibility:**
- Cross-browser compatible (Chrome, Firefox, Safari, Edge)
- Mobile browser compatibility

**Security:**
- HTTPS/SSL certificate
- Secure authentication
- Data encryption
- Privacy policy compliance

---

## 📋 CONTENT PAGES

**Homepage:**
- Hero section with featured properties
- Services overview (Buy, Sell, Rent, Investment)
- Featured listings carousel
- Quick search bar
- "Why Choose Carla" section
- Testimonials
- Call-to-action sections

**About Page:**
- Carla's background and story
- Credentials and certifications
- Years of experience
- Why choose Carla
- Recent sales stats (if available)
- Professional photo

**Services Page:**
- Buy a Home
- Sell Your Home
- Find Rentals (Long-term)
- Investment Properties
- Relocation Services

**Resources Page:**
- Market Reports
- Neighborhood Guides
- School District Information
- HOA Information
- Financing Resources
- Buyer Guides (links to 4 buyer category pages)

**Contact Page:**
- Contact form
- Phone number
- Email address
- Office location (if applicable)
- Office hours
- Social media links

---

## ✅ FINAL CHECKLIST

Before considering the website complete, ensure:

- [ ] All navigation buttons work correctly
- [ ] Calculator functions properly with all inputs
- [ ] Property search and filters work
- [ ] MLS integration is connected and syncing
- [ ] User accounts (Facebook/Google login) work
- [ ] Saved properties feature works
- [ ] Social sharing buttons work and track shares
- [ ] Contact forms submit correctly
- [ ] Mobile responsive on all devices
- [ ] Fast loading times
- [ ] All images optimized
- [ ] SEO meta tags in place
- [ ] Privacy policy and disclaimers visible
- [ ] Color scheme matches PDF design
- [ ] Fonts (Prata and Raleway) are used correctly
- [ ] "Why Orlando" section included for international buyers
- [ ] Analytics tracking implemented
- [ ] Lead generation forms working
- [ ] Calculator disclaimer visible on all results

---

## 🎯 SUCCESS METRICS

The website should:
1. Generate leads (contact form submissions, showing requests)
2. Showcase properties effectively (high-quality images, easy navigation)
3. Provide value to visitors (calculator, buyer guides, neighborhood info)
4. Be mobile-friendly and shareable on social media
5. Load quickly and provide excellent user experience
6. Convert visitors into clients

---

**This website should be production-ready, professional, and focused on converting visitors into leads while showcasing properties effectively. Use the attached PDF as the primary design reference (80% match), and incorporate all features listed above.**

