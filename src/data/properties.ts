import type { Property as ApiProperty } from '../services/api'

// Static property data used for offline/fallback scenarios
export interface LocalProperty {
  id: string
  mlsId?: string
  address: string
  city: string
  state: string
  zipCode: string
  neighborhood: string
  price: number
  beds: number
  baths: number
  sqft: number
  lotSize?: number
  yearBuilt?: number
  propertyType: 'house' | 'condo' | 'townhouse' | 'apartment'
  status: 'available' | 'under_contract' | 'sold' | 'off_market'
  images: string[]
  description: string
  features: string[]
  hoaFee?: number
  propertyTax?: number
  insurance?: number
}

export const properties: LocalProperty[] = [
  {
    id: 'clermont-house-001',
    address: '1825 Wilson Prairie Dr',
    city: 'Groveland',
    state: 'FL',
    zipCode: '34736',
    neighborhood: 'Groveland',
    price: 550000,
    beds: 4,
    baths: 3,
    sqft: 2500,
    lotSize: 0.25,
    yearBuilt: 2018,
    propertyType: 'house',
    status: 'available',
    images: [
      '/images/clermont-house/new pool.webp',
      '/images/clermont-house/PXL_20250817_203921073~4.jpg',
      '/images/clermont-house/PXL_20250817_212054902.MP.jpg',
      '/images/clermont-house/PXL_20250817_213228397.jpg',
      '/images/clermont-house/PXL_20250817_213232415.jpg',
      '/images/clermont-house/PXL_20250817_213243271.jpg',
      '/images/clermont-house/PXL_20250817_213919475.jpg',
      '/images/clermont-house/PXL_20250817_215427656.jpg',
      '/images/clermont-house/PXL_20250817_215515732.jpg',
      '/images/clermont-house/PXL_20250817_220901681.jpg',
      '/images/clermont-house/PXL_20250817_220918792.jpg',
      '/images/clermont-house/PXL_20250817_222432897.jpg',
      '/images/clermont-house/PXL_20250817_222546208.jpg',
      '/images/clermont-house/PXL_20250817_224754830.jpg',
      '/images/clermont-house/Screenshot_20241014_193329_WhatsApp.jpg',
    ],
    description:
      'Beautiful family home in Groveland with stunning pool, spacious layout, and modern amenities. Perfect for families looking for comfort and style in Central Florida.',
    features: [
      'Swimming Pool',
      'Modern Kitchen',
      'Spacious Living Areas',
      'Master Suite',
      'Large Backyard',
      '2-Car Garage',
      'Updated Appliances',
    ],
    hoaFee: 150,
    propertyTax: 4200,
    insurance: 1800,
  },
]

const statusLabels: Record<LocalProperty['status'], string> = {
  available: 'Available',
  under_contract: 'Under Contract',
  sold: 'Sold',
  off_market: 'Off Market',
}

const toApiProperty = (property: LocalProperty, id: number): ApiProperty => ({
  id,
  address: property.address,
  city: property.city,
  state: property.state,
  zip_code: property.zipCode,
  neighborhood: property.neighborhood,
  price: property.price,
  bedrooms: property.beds,
  bathrooms: property.baths,
  square_feet: property.sqft,
  lot_size: property.lotSize ?? null,
  year_built: property.yearBuilt ?? null,
  property_type: property.propertyType.charAt(0).toUpperCase() + property.propertyType.slice(1),
  property_tax: property.propertyTax ?? null,
  insurance_estimate: property.insurance ?? null,
  hoa_fee: property.hoaFee ?? null,
  status: statusLabels[property.status] ?? 'Available',
  description: property.description,
  image_urls: property.images,
  features: property.features,
  created_at: new Date().toISOString(),
  updated_at: null,
  listed_at: null,
  sold_at: null,
})

const fallbackProperties: ApiProperty[] = properties.map((property, index) =>
  toApiProperty(property, index + 1),
)

const idToProperty = new Map<number, ApiProperty>()
const slugToId = new Map<string, number>()

fallbackProperties.forEach((property, index) => {
  idToProperty.set(property.id, property)
  slugToId.set(properties[index].id, property.id)
})

export const getFallbackProperties = (): ApiProperty[] => fallbackProperties

export const getFallbackPropertyById = (routeId: string): ApiProperty | undefined => {
  const numericId = Number(routeId)
  if (!Number.isNaN(numericId)) {
    return idToProperty.get(numericId)
  }

  const slugId = slugToId.get(routeId)
  return slugId ? idToProperty.get(slugId) : undefined
}

