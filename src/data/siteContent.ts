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
  siteTagline: "Your Trusted Real Estate Partner in Central Florida",
  
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
      title: "Find Your Dream Home in Central Florida",
      subtitle: "Expert real estate services in Orlando, Clermont, Reunion Resort, and more",
      ctaPrimary: "Calculate Your Home Ownership Costs",
      ctaSecondary: "View Available Properties",
    },
    services: {
      title: "Our Services",
      items: [
        {
          title: "Buy a Home",
          description: "Find your perfect home in Central Florida with expert guidance",
        },
        {
          title: "Sell Your Home",
          description: "Maximize your home's value with professional marketing and negotiation",
        },
        {
          title: "Investment Properties",
          description: "Build your portfolio with Orlando's best investment opportunities",
        },
        {
          title: "Long-term Rentals",
          description: "Find the perfect rental property for your needs",
        },
      ],
    },
    neighborhoods: {
      title: "Popular Neighborhoods",
      items: [
        {
          name: "Reunion Resort",
          description: "Luxury resort living with world-class amenities",
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        },
        {
          name: "Margaritaville",
          description: "Relaxed island lifestyle in the heart of Orlando",
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        },
        {
          name: "Champions Gate",
          description: "Golf community with championship courses",
          image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        },
        {
          name: "Clermont",
          description: "Family-friendly community with beautiful homes",
          image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        },
        {
          name: "Orlando Downtown",
          description: "Urban living in the heart of the city",
          image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        },
        {
          name: "Titusville",
          description: "Coastal living near Kennedy Space Center",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        },
      ],
    },
    cta: {
      title: "Ready to Start Your Real Estate Journey?",
      subtitle: "Contact us today for a free consultation",
      buttonText: "Get in Touch",
    },
  },

  // ============================================
  // ABOUT PAGE
  // ============================================
  about: {
    title: "About Carla",
    subtitle: "Your Trusted Real Estate Partner in Central Florida",
    experience: {
      title: "Experience & Expertise",
      description: "With years of experience in the Central Florida real estate market, Carla brings expertise, dedication, and personalized service to every client. Whether you're buying your first home, investing in property, or selling your current residence, Carla is committed to making your real estate journey smooth and successful.",
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

