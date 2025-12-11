/**
 * SITE CONTENT CONFIGURATION
 * 
 * This file contains ALL editable text content for the website.
 * To edit any text on the website, simply change the values below.
 * 
 * IMPORTANT: 
 * - Keep the structure (quotes, commas, etc.) exactly as shown
 * - After editing, the website will automatically update when you save
 * - No coding knowledge required - just edit the text between the quotes
 */

export const siteContent = {
  // ============================================
  // SITE IDENTITY
  // ============================================
  siteName: "Serenity Legacy",
  siteTagline: "Your Trusted Real Estate Partner in Central Florida - Buy, Sell, and Invest in Properties, Land, and Customizable Homes",
  
  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contactInfo: {
    location: "Orlando, Florida",
    serviceAreas: "Central Florida, Orlando, Clermont, Reunion Resort, and more",
    phone: "(954) 303-3456",
    email: "cc@serenitylegacy.net",
    officeAddress: "", // Add office address here if applicable
  },

  // ============================================
  // HOME PAGE
  // ============================================
  home: {
    hero: {
      title: "Discover Your Dream Home in Central Florida",
      subtitle: "Experience exceptional living in Orlando's most desirable communities. From elegant new construction to prestigious resale properties, find your perfect home with expert guidance and personalized service.",
      ctaPrimary: "Search Properties",
      ctaSecondary: "Schedule Consultation",
    },
    newConstruction: {
      title: "Premium New Construction Communities",
      subtitle: "Explore Central Florida's finest master-planned developments from award-winning builders. These carefully curated communities offer modern amenities, resort-style living, and exceptional value in the heart of the Sunshine State.",
      builders: [
        {
          name: "Lennar Communities",
          description: "Experience Everything's Included® homes with smart technology, designer finishes, and energy-efficient features in prime Orlando locations.",
        },
        {
          name: "D.R. Horton Neighborhoods",
          description: "Discover America's Builder with flexible floor plans, premium upgrades, and family-friendly amenities near top-rated schools and entertainment.",
        },
        {
          name: "Pulte Home Designs",
          description: "Life-Tested® homes featuring innovative layouts, quality craftsmanship, and thoughtful details that adapt to your lifestyle needs.",
        },
        {
          name: "Taylor Morrison Estates",
          description: "Sophisticated residences with exceptional outdoor living spaces, designer kitchens, and proximity to Central Florida's finest attractions.",
        },
      ],
      closingText: "Each builder brings unique advantages to your home-buying journey. Whether you prioritize cutting-edge smart home technology, flexible design options, or resort-style community amenities, these trusted names deliver exceptional quality and lasting value. Schedule a private tour to experience these remarkable communities firsthand.",
    },
    featuredProperties: {
      title: "Featured Properties Represented by Carla",
      subtitle: "Browse an exclusive selection of homes currently available through my representation. Each property has been carefully evaluated to ensure it meets the highest standards of quality, location, and value for discerning buyers.",
      properties: [
        {
          sqft: "4,280 sq ft",
          location: "Champions Gate",
          price: "$849,000",
          beds: 6,
          baths: 5.5,
          description: "Stunning two-story residence with resort-style pool, game room, and gourmet kitchen. Minutes from world-class golf and Disney attractions.",
          features: [
            "Resort community with waterpark",
            "Professional-grade kitchen appliances",
            "Smart home technology throughout",
            "Three-car garage with storage",
          ],
        },
        {
          sqft: "3,650 sq ft",
          location: "Reunion Resort",
          price: "$725,000",
          beds: 5,
          baths: 4,
          description: "Contemporary luxury home with soaring ceilings, marble countertops, and designer finishes. Perfect for vacation rental investment.",
          features: [
            "Private screened pool and spa",
            "Walking distance to resort amenities",
            "Open-concept entertaining spaces",
            "Fully furnished and turnkey ready",
          ],
        },
        {
          sqft: "2,890 sq ft",
          location: "Windsor at Westside",
          price: "$595,000",
          beds: 4,
          baths: 3.5,
          description: "Elegant townhome-style villa with private pool, covered lanai, and upgraded interior package in a premier resort community.",
          features: [
            "Access to exclusive clubhouse and amenities",
            "Granite countertops and wood cabinetry",
            "Tile flooring in main living areas",
            "Low-maintenance lifestyle",
          ],
        },
        {
          sqft: "3,200 sq ft",
          location: "Kissimmee",
          price: "$679,000",
          beds: 5,
          baths: 3,
          description: "Serene lakefront property with dock, outdoor kitchen, and panoramic water views. A rare opportunity for waterfront living.",
          features: [
            "Deep-water lake with boating access",
            "Oversized master suite with lake views",
            "Tropical landscaping and privacy",
            "Covered boat dock and lift",
          ],
        },
      ],
      closingText: "Each of these exceptional properties represents outstanding value in today's market. Contact me directly for private showings, detailed property information, pricing analysis, and investment projections. New listings added regularly.",
      ctaPrimary: "Schedule Private Showing",
      ctaSecondary: "Request Property Details",
    },
    designInspiration: {
      title: "Stunning Homes & Design Inspiration",
      subtitle: "Explore remarkable properties and architectural designs available in Central Florida. While these homes may not currently be listed under my representation, I have access to comprehensive market data and can help you find similar properties or connect you with opportunities that match your vision.",
      description: "Central Florida's real estate market offers incredible diversity in architectural styles, from timeless Mediterranean estates to sleek contemporary designs. Whether you're drawn to classic elegance or modern minimalism, the region provides endless possibilities. Many communities feature signature architectural themes that create cohesive, visually stunning neighborhoods. Contact me to discuss your style preferences, desired features, and budget parameters—I'll curate a personalized selection of available properties that align with your dream home vision.",
      ctaText: "Discuss Your Dream Home",
    },
    whyChoose: {
      title: "Why Choose Central Florida?",
      subtitle: "A Region of Unmatched Opportunity",
      description: "Central Florida combines world-class entertainment, thriving economy, and exceptional quality of life. The Orlando metropolitan area continues to experience robust population growth, driven by major employers, tourism infrastructure, and favorable tax environment.",
      description2: "From the renowned theme parks of International Drive to the natural springs of Central Florida, residents enjoy year-round outdoor recreation and cultural amenities. Top-rated schools, prestigious universities, and expanding healthcare facilities make this region ideal for families and retirees alike.",
      features: [
        {
          title: "Year-Round Sunshine",
          description: "Average 233 sunny days annually with mild winters and warm summers perfect for outdoor living",
          icon: "☀️",
        },
        {
          title: "Thriving Economy",
          description: "Major employers in technology, healthcare, aerospace, and tourism drive consistent job growth",
          icon: "📈",
        },
        {
          title: "World-Class Accessibility",
          description: "Orlando International Airport connects to 150+ destinations with convenient domestic and international travel",
          icon: "✈️",
        },
        {
          title: "Strong Investment Market",
          description: "Robust vacation rental demand and steady appreciation make Central Florida properties excellent investments",
          icon: "💰",
        },
      ],
      closingText: "The region's combination of lifestyle amenities, economic opportunity, and real estate value creates compelling reasons to call Central Florida home. Whether you're relocating for work, seeking a vacation property, or planning retirement, this dynamic market offers something for every buyer.",
    },
    communities: {
      title: "Communities I Serve with Pride",
      subtitle: "My expertise spans Central Florida's most desirable residential markets. Each community offers distinct character, amenities, and lifestyle advantages. Understanding these nuances ensures you find not just a house, but the perfect neighborhood to call home.",
      items: [
        {
          name: "Davenport & Champions Gate",
          description: "Premier resort communities minutes from Disney. Exceptional vacation rental potential with luxury amenities including waterparks, golf courses, and clubhouses. Popular with investors and families seeking resort-style living.",
        },
        {
          name: "Kissimmee & Celebration",
          description: "Charming neighborhoods blending small-town atmosphere with modern convenience. Waterfront properties, master-planned communities, and easy access to theme parks. Strong appreciation and diverse housing options.",
        },
        {
          name: "Orlando & Winter Park",
          description: "Urban sophistication meets suburban comfort. From historic neighborhoods to modern developments, Orlando offers cultural amenities, dining, shopping, and entertainment. Excellent schools and professional opportunities.",
        },
        {
          name: "Groveland & Minneola",
          description: "Rolling hills and natural beauty define these growing communities. Larger lots, newer construction, and small-town charm with easy commute to Orlando. Perfect for those seeking space and tranquility.",
        },
        {
          name: "Apopka & Surrounding Areas",
          description: "Northwest Orlando's hidden gem offering affordable luxury and natural surroundings. Growing infrastructure, excellent schools, and family-friendly atmosphere. Great value with strong appreciation potential.",
        },
      ],
      closingText: "Each community has unique selling points, school districts, commute considerations, and investment characteristics. My deep knowledge of these markets ensures you make informed decisions aligned with your lifestyle priorities and financial goals. Let's discuss which area best matches your needs.",
    },
    agentProfile: {
      title: "Meet Carla: Your Trusted Real Estate Partner",
      subtitle: "Licensed Realtor | Orlando, Florida",
      bio: "With extensive knowledge of Central Florida's residential and new-construction markets, I guide clients through every step of their real estate journey with professionalism, integrity, and genuine care.",
      bio2: "My passion for real estate stems from helping families and investors discover properties that transform their lives. Whether you're a first-time buyer navigating the process, a seasoned investor expanding your portfolio, or relocating from another state, I provide the expertise and personalized attention you deserve.",
      differentiators: [
        {
          title: "Builder Relationships",
          description: "Direct connections with Lennar, D.R. Horton, Pulte, Taylor Morrison, and KB Home provide exclusive access to pre-construction opportunities, incentives, and lot selections before public release.",
        },
        {
          title: "Market Intelligence",
          description: "Comprehensive analysis of pricing trends, neighborhood dynamics, and investment potential ensures you make data-driven decisions with confidence and clarity.",
        },
        {
          title: "Negotiation Excellence",
          description: "Skilled advocacy protecting your interests throughout the transaction. I negotiate favorable terms, navigate inspections, and ensure smooth closings with attention to every detail.",
        },
        {
          title: "Concierge Service",
          description: "From initial consultation through closing and beyond, I coordinate inspections, financing, contractors, and resources to make your experience seamless and stress-free.",
        },
      ],
      closingText: "Real estate is more than transactions—it's about relationships, trust, and achieving your goals. I'm committed to exceeding your expectations with responsive communication, honest guidance, and unwavering dedication to your success. Let's start your journey today.",
    },
    testimonials: {
      title: "What My Clients Are Saying",
      subtitle: "The trust and satisfaction of my clients drive everything I do. Here's what homeowners and investors have shared about their experience working with me.",
      items: [
        {
          quote: "Carla made our dream of owning a Florida vacation home a reality. Her knowledge of the resort communities was impressive, and she guided us through the entire process with patience and expertise. We couldn't be happier with our Champions Gate property!",
          clientName: "Jennifer & Michael Torres",
          location: "Chicago, IL",
        },
        {
          quote: "As an out-of-state investor, I needed someone I could trust completely. Carla provided detailed market analysis, managed inspections remotely, and helped me secure an excellent rental property. Her professionalism is unmatched.",
          clientName: "Robert Chen",
          location: "San Francisco, CA",
        },
        {
          quote: "We were first-time homebuyers feeling overwhelmed by the process. Carla explained everything clearly, answered our endless questions, and negotiated an amazing deal on our new construction home. She truly cares about her clients.",
          clientName: "Alice & Jose Manuel Villeda",
          location: "Orlando, FL",
        },
        {
          quote: "Relocating from New York, we knew nothing about Central Florida. Carla toured us through multiple communities, provided honest insights about each area, and helped us find the perfect neighborhood for our family. Highly recommend!",
          clientName: "Sarah Williams",
          location: "New York, NY",
        },
      ],
      closingText: "Your success story could be next. Whether you're buying your first home, upgrading to your dream property, or building an investment portfolio, I'm here to deliver exceptional results and service you'll want to share with others.",
    },
    marketInsights: {
      title: "Understanding the Central Florida Market",
      subtitle: "Current Market Insights",
      description: "Central Florida's real estate market continues demonstrating resilience and growth. Population influx from northern states, combined with Florida's tax advantages and lifestyle appeal, sustains strong demand across all price points.",
      description2: "The new-construction segment remains particularly robust, with builders offering competitive incentives including rate buy-downs, closing cost assistance, and premium upgrade packages. Inventory levels vary by community, creating opportunities for strategic buyers.",
      stats: [
        {
          label: "Annual Appreciation",
          value: "15%",
          description: "Average home value increase in premium Central Florida communities over the past three years",
        },
        {
          label: "Median Home Price",
          value: "$425K",
          description: "Current median price for single-family homes in the Davenport and Kissimmee markets",
        },
        {
          label: "Days on Market",
          value: "42",
          description: "Average time from listing to contract for well-priced properties in desirable neighborhoods",
        },
        {
          label: "Occupancy Rate",
          value: "85%",
          description: "Short-term vacation rental occupancy in resort communities near major attractions",
        },
      ],
      closingText: "Whether you're purchasing a primary residence or investment property, understanding market dynamics is crucial. Interest rate trends, builder incentives, and seasonal patterns all impact your buying power and potential returns. I provide comprehensive market analysis tailored to your specific goals, ensuring you enter the market at the right time with the right property. Let's discuss current opportunities and develop a strategic approach to maximize your investment.",
    },
    footerCta: {
      title: "Ready to Begin Your Journey?",
      subtitle: "Your Central Florida dream home awaits. Whether you're exploring new construction communities, searching for the perfect resale property, or building an investment portfolio, I'm here to guide you with expertise, integrity, and personalized attention every step of the way.",
      actions: [
        {
          title: "Schedule a Consultation",
          description: "Let's discuss your goals, preferences, and timeline. I'll provide honest guidance and create a customized home-buying strategy.",
        },
        {
          title: "Explore Properties",
          description: "Access exclusive listings, new construction opportunities, and off-market properties matching your criteria and budget.",
        },
        {
          title: "Make Your Move",
          description: "From offer to closing, I handle negotiations, inspections, and coordination to ensure a smooth, successful transaction.",
        },
      ],
      contactInfo: {
        email: "cc@serenitylegacy.net",
        phone: "(954) 303-3456",
        office: "Orlando, FL 33896",
        license: "FL Real Estate License #SL3371270",
        serviceAreas: [
          "Davenport & Champions Gate",
          "Kissimmee & Celebration",
          "Orlando & Winter Park",
          "Groveland & Minneola",
          "Apopka & Surrounding Areas",
        ],
      },
      closingText: "Experience the difference that dedicated, knowledgeable representation makes. Your Central Florida lifestyle begins here—let's make it extraordinary together.",
      ctaPrimary: "Schedule Your Consultation",
      ctaSecondary: "View All Properties",
    },
  },

  // ============================================
  // ABOUT PAGE
  // ============================================
  about: {
    title: "About Carla",
    subtitle: "Your Trusted Real Estate Partner in Central Florida",
    experience: {
      title: "Experience & Expertise in Real Estate",
      description: "With years of experience in the Central Florida real estate market, Carla brings expertise, dedication, and personalized service to every client. Specializing in buying properties, selling properties, land sales, new residential homes, commercial real estate, and customizable homes. Whether you're buying your first home, investing in property, or selling your current residence, Carla is committed to making your real estate journey smooth and successful.",
    },
    areas: {
      title: "Areas We Serve",
      items: [
        "Reunion Resort",
        "Margaritaville",
        "Champions Gate",
        "Clermont",
        "Orlando",
        "Orlando Downtown",
        "Titusville",
      ],
    },
    whyChoose: {
      title: "Why Choose Us",
      items: [
        "Local market expertise",
        "Personalized service",
        "Transparent communication",
        "Negotiation skills",
        "Full-service support",
      ],
    },
  },

  // ============================================
  // CONTACT PAGE
  // ============================================
  contact: {
    title: "Contact Us",
    subtitle: "Get in touch with us today",
    info: {
      title: "Get in Touch",
      description: "Have questions? Want to schedule a consultation? We're here to help with all your real estate needs.",
    },
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your.email@example.com",
      phoneLabel: "Phone",
      phonePlaceholder: "(954) 303-3456",
      messageLabel: "Message",
      messagePlaceholder: "Tell us how we can help you...",
      propertyInterestLabel: "Property Interest (Optional)",
      propertyInterestOptions: [
        "Buying a Home",
        "Selling a Home",
        "Investment Property",
        "Rental Property",
        "General Inquiry",
      ],
      submitButton: "Send Message",
      submittingButton: "Sending...",
      successMessage: "Thank you for your message! We will contact you soon.",
      errorMessage: "Failed to send message. Please try again or contact us directly.",
    },
    appointment: {
      title: "Schedule an Appointment",
      subtitle: "Book a time to meet with Carla",
      description: "Choose a convenient time for your consultation. You can also call directly at (954) 303-3456.",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "your.email@example.com",
        phoneLabel: "Phone",
        phonePlaceholder: "(954) 303-3456",
        preferredDateLabel: "Preferred Date",
        preferredTimeLabel: "Preferred Time",
        timeOptions: [
          "9:00 AM",
          "10:00 AM",
          "11:00 AM",
          "12:00 PM",
          "1:00 PM",
          "2:00 PM",
          "3:00 PM",
          "4:00 PM",
          "5:00 PM",
        ],
        messageLabel: "Additional Notes (Optional)",
        messagePlaceholder: "Any specific topics you'd like to discuss...",
        submitButton: "Schedule Appointment",
        submittingButton: "Scheduling...",
        successMessage: "Thank you! Your appointment request has been submitted. Carla will contact you to confirm the time.",
        errorMessage: "Failed to submit appointment request. Please try again or call (954) 303-3456 directly.",
        callDirectly: "Or call directly: (954) 303-3456",
      },
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    companyName: "Serenity Legacy",
    tagline: "Your trusted real estate partner in Central Florida",
    contactTitle: "Contact",
    servicesTitle: "Services",
    services: [
      "Buy a Home",
      "Sell a Home",
      "Investment Properties",
      "Long-term Rentals",
    ],
    copyright: "All rights reserved.",
  },
}


