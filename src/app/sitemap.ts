import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://esimcountry.fyi'
  
  // Countries we have data for
  const countries = [
    'turkey',
    'united-states', 
    'japan',
    'germany',
    'united-kingdom',
    'france',
    'spain', 
    'italy',
    'canada',
    'australia'
  ]
  
  // Blog posts - sadece gerçekte var olanlar
  const blogPosts = [
    'best-esim-turkey-2025',
    'best-esim-usa-2025',
    'best-esim-japan-2025',
    'best-esim-germany-2025',
    'airalo-vs-holafly-turkey'
  ]

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    }
  ]
  
  // Country pages
  const countryPages = countries.map(country => ({
    url: `${baseUrl}/esim/${country}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))
  
  // Blog posts
  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...mainPages, ...countryPages, ...blogPages]
} 