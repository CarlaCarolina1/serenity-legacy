/**
 * JSON-LD Schema Markup for SEO
 * Helps Google understand your business and properties
 */

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Serenity Legacy Real Estate",
  "alternateName": "Carla Carolina Real Estate",
  "description": "Expert real estate services for buying properties, selling properties, land sales, new residential homes, commercial real estate, and customizable homes in Central Florida",
  "url": "https://serenitylegacy.net",
  "logo": "https://serenitylegacy.net/logo.png",
  "image": "https://serenitylegacy.net/logo.png",
  "telephone": "(954) 303-3456",
  "email": "cc@serenitylegacy.net",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Orlando",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Orlando"
    },
    {
      "@type": "City",
      "name": "Clermont"
    },
    {
      "@type": "City",
      "name": "Kissimmee"
    },
    {
      "@type": "City",
      "name": "Titusville"
    }
  ],
  "serviceType": [
    "Buying Properties",
    "Selling Properties",
    "Land Sales",
    "New Residential Homes",
    "Commercial Real Estate",
    "Customizable Homes",
    "Property Investment",
    "Real Estate Consultation"
  ],
  "priceRange": "$$",
  "sameAs": [
    "https://www.facebook.com/serenitylegacy",
    "https://www.instagram.com/serenitylegacy"
  ]
})

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Serenity Legacy Real Estate",
  "url": "https://serenitylegacy.net",
  "description": "Buy, sell, and invest in real estate properties, land, and customizable homes in Central Florida. Expert real estate services in Orlando, Clermont, and surrounding areas.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://serenitylegacy.net/properties?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
})

export const getPropertySchema = (property: {
  name: string
  description: string
  price: number
  address: string
  city: string
  state: string
  zipCode: string
  bedrooms?: number
  bathrooms?: number
  squareFeet?: number
  image?: string
  url: string
}) => ({
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": property.name,
  "description": property.description,
  "url": property.url,
  "image": property.image || "https://serenitylegacy.net/logo.png",
  "offers": {
    "@type": "Offer",
    "price": property.price,
    "priceCurrency": "USD"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": property.address,
    "addressLocality": property.city,
    "addressRegion": property.state,
    "postalCode": property.zipCode,
    "addressCountry": "US"
  },
  "numberOfRooms": property.bedrooms,
  "numberOfBathroomsTotal": property.bathrooms,
  "floorSize": {
    "@type": "QuantitativeValue",
    "value": property.squareFeet,
    "unitCode": "SQM"
  }
})

export const getBreadcrumbSchema = (items: Array<{ name: string, url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

