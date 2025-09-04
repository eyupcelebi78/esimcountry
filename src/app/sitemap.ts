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
    'airalo-vs-holafly-turkey',
    'saily-esim-review-2025'
  ]

  // iPhone 12 guides (blog pages)
  const iphone12Guides = [
    'iphone-12-esim',
    'does-iphone-12-have-esim',
    'does-iphone-12-support-esim',
    'iphone-12-mini-esim',
    'is-iphone-12-esim-compatible',
    'iphone-12-esim-support',
    'can-iphone-12-use-esim',
    'is-iphone-12-support-esim',
    'does-iphone-12-pro-have-esim',
    'can-all-of-the-iphone-12-use-esims',
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
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/best-esim-plans`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
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

  // iPhone 12 guide pages
  const guidePages = iphone12Guides.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...mainPages, ...countryPages, ...blogPages, ...guidePages]
} 