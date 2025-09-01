import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - eSIM Country | Website Terms & Conditions',
  description: 'eSIM Country terms of service and conditions for using our website and services. Last updated January 2025.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service - eSIM Country',
    description: 'Read our terms of service and conditions for using eSIM Country website and services.',
    type: 'website',
  },
};

export default function TermsPage() {
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
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Terms and conditions for using eSIM Country services
          </p>
          <p className="text-lg mt-4 opacity-90">Last updated: January 20, 2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to eSIM Country. These Terms of Service ("Terms") govern your use of our website 
                located at esimcountry.fyi (the "Service") operated by eSIM Country ("us", "we", or "our").
              </p>
              <p className="text-gray-700 mb-4">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
                with any part of these terms, then you may not access the Service.
              </p>
              <p className="text-gray-700">
                <strong>Please read these Terms carefully before using our Service.</strong>
              </p>
            </div>
          </section>

          {/* Acceptance of Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">✅ Acceptance of Terms</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
              <p className="text-gray-700">
                These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
            </div>
          </section>

          {/* Description of Service */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📊 Description of Service</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-4">
                eSIM Country provides:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Comparison of eSIM plans from various providers</li>
                <li>Educational content about eSIM technology</li>
                <li>Reviews and recommendations for eSIM services</li>
                <li>Guides and tutorials for eSIM setup and usage</li>
                <li>Price information and market analysis</li>
              </ul>
              <p className="text-gray-700">
                <strong>Important:</strong> We do not sell eSIM plans directly. We are an informational 
                and comparison service that may contain affiliate links to third-party providers.
              </p>
            </div>
          </section>

          {/* User Obligations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">👤 User Obligations</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-4">When using our Service, you agree to:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">✅ Permitted Uses</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Use the Service for personal, non-commercial purposes</li>
                    <li>Provide accurate information when contacting us</li>
                    <li>Respect intellectual property rights</li>
                    <li>Follow applicable laws and regulations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">❌ Prohibited Uses</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Scrape or copy our content without permission</li>
                    <li>Use the Service for illegal activities</li>
                    <li>Attempt to hack or disrupt our Service</li>
                    <li>Spam or send unsolicited communications</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🔒 Intellectual Property</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-4">
                The Service and its original content, features, and functionality are and will remain 
                the exclusive property of eSIM Country and its licensors.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Our Content</h4>
                  <p className="text-gray-700 text-sm">
                    All text, graphics, logos, images, and software on this website are protected by 
                    copyright and other intellectual property laws.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fair Use</h4>
                  <p className="text-gray-700 text-sm">
                    You may reference our content for personal use or with proper attribution, but 
                    commercial use requires written permission.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Affiliate Disclosures */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🤝 Affiliate Relationships</h2>
            <div className="bg-blue-50 rounded-lg p-8">
              <p className="text-gray-700 mb-4">
                <strong>Important Disclosure:</strong> eSIM Country may earn commissions from affiliate 
                partnerships with eSIM providers featured on our website.
              </p>
              <div className="space-y-3">
                <p className="text-gray-700">
                  • When you click on links to eSIM providers and make a purchase, we may receive a commission
                </p>
                <p className="text-gray-700">
                  • This does not affect the price you pay for eSIM services
                </p>
                <p className="text-gray-700">
                  • Our reviews and recommendations remain unbiased and based on objective criteria
                </p>
                <p className="text-gray-700">
                  • We clearly mark affiliate links where applicable
                </p>
              </div>
            </div>
          </section>

          {/* Disclaimers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">⚠️ Disclaimers</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Information Accuracy</h4>
                  <p className="text-gray-700 text-sm">
                    While we strive for accuracy, eSIM pricing and availability change frequently. 
                    Always verify current information directly with providers before purchasing.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">No Warranties</h4>
                  <p className="text-gray-700 text-sm">
                    The Service is provided "as is" without warranties of any kind, either express or implied.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Third-Party Services</h4>
                  <p className="text-gray-700 text-sm">
                    We are not responsible for the products, services, or policies of third-party eSIM providers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">⚖️ Limitation of Liability</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-4">
                In no event shall eSIM Country, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses, resulting from your use of the Service.
              </p>
              <p className="text-gray-700">
                Our total liability to you for all claims arising from or relating to the Service shall 
                not exceed $100 USD.
              </p>
            </div>
          </section>

          {/* Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🔐 Privacy</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs 
                your use of the Service, to understand our practices.
              </p>
              <Link 
                href="/privacy"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Read Privacy Policy
              </Link>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🚫 Termination</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your access immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-gray-700">
                Upon termination, your right to use the Service will cease immediately.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📝 Changes to Terms</h2>
            <div className="bg-blue-50 rounded-lg p-8">
              <p className="text-gray-700 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
              </p>
              <p className="text-gray-700 mb-4">
                If a revision is material, we will try to provide at least 30 days notice prior to any 
                new terms taking effect.
              </p>
              <p className="text-gray-700">
                Your continued use of the Service after any changes constitutes acceptance of the new Terms.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🏛️ Governing Law</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-4">
                These Terms shall be interpreted and governed by the laws of Turkey, without regard to 
                its conflict of law provisions.
              </p>
              <p className="text-gray-700">
                Our failure to enforce any right or provision of these Terms will not be considered a 
                waiver of those rights.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📧 Contact Us</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg text-gray-700 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> 
                  <a href="mailto:legal@esimcountry.fyi" className="text-blue-600 hover:underline ml-2">
                    legal@esimcountry.fyi
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Website:</strong> 
                  <a href="https://esimcountry.fyi" className="text-blue-600 hover:underline ml-2">
                    esimcountry.fyi
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 eSIM Country. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
            <Link href="/about" className="text-gray-300 hover:text-white">About Us</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 