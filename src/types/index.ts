export type Role = 'customer' | 'admin'

export interface Profile {
  id: string
  full_name: string
  phone?: string
  avatar_url?: string
  role: Role
}

export interface Service {
  id: string
  name: string
  slug: string
  description?: string
  short_description?: string
  image_url?: string
  price: number
  duration: number
  active?: boolean
  category?: string
  created_at?: string
  updated_at?: string
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  stock?: number
  image?: string
  image_url?: string
  category?: string
  active?: boolean
  created_at?: string
  updated_at?: string
}

export interface CartItem {
  id: string
  productId: string
  name: string
  price: number
  quantity: number
  image?: string
}

export interface Booking {
  id: string
  serviceName?: string
  service_id?: string
  price?: number
  specialist?: string
  date?: string
  time?: string
  customerName?: string
  customerPhone?: string
  customer_email?: string
  status?: string
  createdAt?: string
  created_at?: string
  notes?: string
}

export interface GalleryItem {
  id: string
  title: string
  url: string
  category?: string
  position?: number
  active?: boolean
  created_at?: string
}

export interface InstagramPost {
  id: string
  shortcode: string
  image_url: string
  caption: string
  permalink: string
  media_type: 'image' | 'video' | 'carousel' | string
}

export interface Testimonial {
  id: string
  name: string
  photo: string
  comment: string
  rating: number
  active?: boolean
  created_at?: string
}

export interface Transformation {
  id: string
  title: string
  description: string
  service: string
  before_image: string
  after_image: string
  active?: boolean
}

export interface SiteSettings {
  name: string
  tagline: string
  whatsapp: string
  instagram: string
  instagram_url: string
  facebook: string
  address: string
  hours: string
  description: string
  logo: string
  location: string
}

export interface DashboardMetric {
  label: string
  value: string
  trend: string
}

export interface SEOSettings {
  title: string
  description: string
  keywords: string
  ogTitle: string
  ogDescription: string
  canonical: string
}
