/**
 * Strapi API utilities
 */

export interface StrapiPublication {
  id: number
  attributes: {
    title: string
    description?: string
    url: string
    source: string
    publicationLogo?: string
    date: string
    image?: {
      data?: {
        attributes: {
          url: string
          alternativeText?: string
        }
      }
    }
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

export interface StrapiResponse<T> {
  data: T
  meta?: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN

/**
 * Fetch publications from Strapi CMS
 */
export async function getPublications(): Promise<StrapiPublication[]> {
  try {
    const url = `${STRAPI_API_URL}/api/publications?sort=date:desc&pagination[limit]=10`
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    }
    
    // Add API token if available (for protected endpoints)
    if (STRAPI_API_TOKEN) {
      headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`
    }

    const response = await fetch(url, {
      headers,
      next: { revalidate: 60 }, // Revalidate every 60 seconds for ISR
    })

    if (!response.ok) {
      console.error('Failed to fetch publications:', response.statusText)
      return []
    }

    const data: StrapiResponse<StrapiPublication[]> = await response.json()
    return data.data || []
  } catch (error) {
    console.error('Error fetching publications from Strapi:', error)
    return []
  }
}

/**
 * Get image URL from Strapi media object
 */
export function getStrapiImageUrl(image?: StrapiPublication['attributes']['image']): string | null {
  if (!image?.data?.attributes?.url) {
    return null
  }
  
  const url = image.data.attributes.url
  // If URL is already absolute, return as is
  if (url.startsWith('http')) {
    return url
  }
  
  // Otherwise, prepend Strapi URL
  return `${STRAPI_API_URL}${url}`
}

/**
 * Transform Strapi publication to component format
 */
export function transformPublication(publication: StrapiPublication) {
  return {
    id: publication.id,
    title: publication.attributes.title,
    description: publication.attributes.description,
    url: publication.attributes.url,
    source: publication.attributes.source,
    publicationLogo: publication.attributes.publicationLogo || null,
    date: publication.attributes.date,
    image: getStrapiImageUrl(publication.attributes.image),
  }
}

