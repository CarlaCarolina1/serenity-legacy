import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export interface Property {
  id: number
  address: string
  city: string
  state: string
  zip_code: string
  neighborhood: string | null
  price: number
  bedrooms: number
  bathrooms: number
  square_feet: number | null
  lot_size: number | null
  year_built: number | null
  property_type: string
  property_tax: number | null
  insurance_estimate: number | null
  hoa_fee: number | null
  status: string
  description: string | null
  image_urls: string[]
  features?: string[]
  created_at: string
  updated_at: string | null
  listed_at: string | null
  sold_at: string | null
}

export interface PropertyListResponse {
  properties: Property[]
  total: number
  page: number
  page_size: number
}

export interface ContactSubmission {
  name: string
  email: string
  phone?: string
  message: string
  property_id?: number
  interest_type?: string
  submission_type?: string
  preferred_date?: string
  preferred_time?: string
}

export const propertyApi = {
  getAll: async (params?: {
    page?: number
    page_size?: number
    neighborhood?: string
    min_price?: number
    max_price?: number
    bedrooms?: number
    bathrooms?: number
    property_type?: string
    status?: string
  }): Promise<PropertyListResponse> => {
    const response = await api.get<PropertyListResponse>('/api/v1/properties', { params })
    return response.data
  },

  getById: async (id: number): Promise<Property> => {
    const response = await api.get<Property>(`/api/v1/properties/${id}`)
    // Parse image_urls if it's a string
    if (typeof response.data.image_urls === 'string') {
      try {
        response.data.image_urls = JSON.parse(response.data.image_urls)
      } catch {
        response.data.image_urls = []
      }
    }
    // Parse features if it's a string
    if (response.data.features && typeof response.data.features === 'string') {
      try {
        response.data.features = JSON.parse(response.data.features)
      } catch {
        response.data.features = []
      }
    }
    return response.data
  },
}

export const contactApi = {
  submit: async (data: ContactSubmission): Promise<void> => {
    await api.post('/api/v1/contact', data)
  },
}

export default api

