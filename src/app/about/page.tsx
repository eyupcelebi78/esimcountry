import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - eSIM Country | Expert eSIM Comparison Team',
  description: 'Learn about eSIM Country team, our mission to help travelers find the best eSIM deals, and our commitment to unbiased reviews and transparent pricing.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About eSIM Country - Expert eSIM Comparison Team',
    description: 'Meet the team behind eSIM Country and learn about our mission to help travelers find the best eSIM deals worldwide.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-blue-600">
              🌍 eSIM Country
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
                📝 Blog
              </Link>
              <Link href="/about" className="text-blue-600 font-medium">
                👥 About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                📧 Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About eSIM Country</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted source for unbiased eSIM comparisons and expert travel connectivity advice
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Our Mission */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 Our Mission</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg text-gray-700 mb-4">
                At eSIM Country, we believe that staying connected while traveling shouldn't be complicated or expensive. 
                Our mission is to provide travelers with comprehensive, unbiased comparisons of eSIM plans from providers 
                worldwide, helping you make informed decisions about your mobile connectivity needs.
              </p>
              <p className="text-lg text-gray-700">
                We research, test, and compare eSIM plans across different countries and providers, ensuring our 
                recommendations are based on real-world testing and current pricing. Our goal is to save you time, 
                money, and frustration when choosing the perfect eSIM for your travels.
              </p>
            </div>
          </section>

          {/* What We Do */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🔍 What We Do</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">📊 Comprehensive Research</h3>
                <p className="text-gray-700">
                  We continuously monitor eSIM providers, track pricing changes, and test coverage quality 
                  to ensure our comparisons reflect the most current market conditions.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">🧪 Real-World Testing</h3>
                <p className="text-gray-700">
                  Our team travels extensively and tests eSIM plans in real conditions, measuring speed, 
                  coverage, and reliability across different countries and networks.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">💡 Expert Guides</h3>
                <p className="text-gray-700">
                  We create detailed setup guides, troubleshooting tips, and country-specific advice 
                  to help you get the most out of your eSIM experience.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">🏷️ Price Transparency</h3>
                <p className="text-gray-700">
                  All prices on our site are updated regularly and include any hidden fees or restrictions. 
                  We believe in complete transparency when it comes to eSIM pricing.
                </p>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">⭐ Our Values</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">🔍 Transparency</h3>
                  <p className="text-gray-700">
                    We disclose our methodology, update frequency, and any affiliate relationships. 
                    Our reviews are honest and based on objective testing criteria.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">🎯 Accuracy</h3>
                  <p className="text-gray-700">
                    We strive for accuracy in all our comparisons and regularly update our data to 
                    reflect current market conditions and pricing.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">🌍 Global Perspective</h3>
                  <p className="text-gray-700">
                    We understand that travelers come from different countries and have varying needs. 
                    Our recommendations consider diverse use cases and budgets.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How We Stay Updated */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🔄 How We Stay Updated</h2>
            <div className="bg-blue-50 rounded-lg p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>Monthly price updates from all major eSIM providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>Continuous monitoring of new eSIM providers and plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>Regular testing of eSIM performance in popular travel destinations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>Community feedback integration and user experience updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>Technology advancement tracking and compatibility updates</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📧 Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-8">
              Have questions about eSIMs or suggestions for our service? We'd love to hear from you!
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 eSIM Country. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 