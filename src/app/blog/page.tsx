import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'eSIM Travel Guides & Comparisons | Latest 2025 Reviews',
  description: 'Expert eSIM guides, provider comparisons, and travel tips. Discover the best eSIM deals for Turkey, Germany, USA, Japan and more. Updated daily with real prices.',
  keywords: 'esim guide, esim comparison, travel esim, best esim 2025, airalo vs holafly, nomad esim review',
  openGraph: {
    title: 'eSIM Travel Guides & Expert Comparisons',
    description: 'Get expert eSIM advice, compare providers, and find the best deals for your next trip.',
    type: 'website',
  },
};

const blogPosts = [
  {
    slug: 'best-esim-turkey-2025',
    title: 'Best Turkey eSIM Plans 2025: Complete Comparison',
    excerpt: 'Compare 16+ Turkey eSIM plans from top providers. Real prices from $1.99. Saily, Airalo, Nomad, Holafly reviews.',
    date: 'December 2024',
    readTime: '8 min read',
    category: 'Guides',
    featured: true
  },
  {
    slug: 'best-esim-usa-2025',
    title: 'Best USA eSIM Plans 2025: T-Mobile, Verizon, AT&T Coverage',
    excerpt: 'Complete guide to USA eSIM plans. Compare coverage, data speeds, and prices across all major US networks.',
    date: 'December 2024',
    readTime: '10 min read',
    category: 'Guides',
    featured: true
  },
  {
    slug: 'best-esim-japan-2025',
    title: 'Best Japan eSIM Plans 2025: NTT Docomo, SoftBank Coverage',
    excerpt: 'Comprehensive Japan eSIM guide. Compare data plans, network coverage, and prices for your trip to Japan.',
    date: 'December 2024',
    readTime: '9 min read',
    category: 'Guides',
    featured: true
  },
  {
    slug: 'best-esim-germany-2025',
    title: 'Best Germany eSIM Plans 2025: Deutsche Telekom, Vodafone',
    excerpt: 'Complete Germany eSIM comparison. Coverage maps, data speeds, and real prices for travel and business.',
    date: 'December 2024',
    readTime: '8 min read',
    category: 'Guides',
    featured: false
  },
  {
    slug: 'airalo-vs-holafly-turkey',
    title: 'Airalo vs Holafly Turkey eSIM: Which is Better 2025?',
    excerpt: 'Detailed comparison of Airalo and Holafly eSIM plans for Turkey. Coverage, prices, speeds tested.',
    date: 'December 2024',
    readTime: '6 min read',
    category: 'Comparisons',
    featured: false
  },
];

const categories = [
  { name: 'All Posts', count: blogPosts.length, slug: 'all' },
  { name: 'Country Guides', count: blogPosts.filter(p => p.category === 'Guides').length, slug: 'country-guides' },
  { name: 'Comparisons', count: blogPosts.filter(p => p.category === 'Comparisons').length, slug: 'comparisons' },
  { name: 'Provider Reviews', count: blogPosts.filter(p => p.category === 'Provider Reviews').length, slug: 'reviews' },
  { name: 'City Guides', count: blogPosts.filter(p => p.category === 'City Guides').length, slug: 'city-guides' },
  { name: 'Digital Nomads', count: blogPosts.filter(p => p.category === 'Digital Nomads').length, slug: 'digital-nomads' },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              eSIM Travel Guides & Expert Reviews
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover the best eSIM deals, compare providers, and get expert travel advice
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                ✅ Real 2025 Prices
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                ✅ Expert Reviews
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                ✅ Updated Daily
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.slug}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Guides</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article 
                key={post.slug}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-3">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500">{post.date}</time>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <article 
                key={post.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-gradient-to-r from-gray-400 to-gray-500"></div>
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs ml-2">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-xs text-gray-500">{post.date}</time>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-xs"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Get eSIM Deals & Travel Tips</h2>
          <p className="text-blue-100 mb-6">
            Subscribe to get the latest eSIM deals, price alerts, and expert travel advice.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
} 