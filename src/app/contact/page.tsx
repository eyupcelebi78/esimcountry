import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - eSIM Country | Get in Touch with Our Team',
  description: 'Contact eSIM Country team for questions, suggestions, or partnership inquiries. We respond to all emails within 24 hours.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact eSIM Country - Get in Touch with Our Team',
    description: 'Have questions about eSIMs? Contact our expert team for personalized advice and support.',
    type: 'website',
  },
};

export default function ContactPage() {
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
              <Link href="/contact" className="text-blue-600 font-medium">
                📧 Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Have questions about eSIMs? We're here to help you stay connected worldwide.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Contact Methods */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🤝 Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Email */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us your questions and we'll respond within 24 hours
                </p>
                <a 
                  href="mailto:hello@esimcountry.fyi"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  hello@esimcountry.fyi
                </a>
              </div>

              {/* Support */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Support</h3>
                <p className="text-gray-600 mb-4">
                  Need help with eSIM setup or troubleshooting?
                </p>
                <a 
                  href="mailto:support@esimcountry.fyi"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  support@esimcountry.fyi
                </a>
              </div>

              {/* Business */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Inquiries</h3>
                <p className="text-gray-600 mb-4">
                  Partnerships, collaborations, and business opportunities
                </p>
                <a 
                  href="mailto:business@esimcountry.fyi"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  business@esimcountry.fyi
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">❓ Frequently Asked Questions</h2>
            <div className="space-y-6">
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How quickly do you respond to emails?</h3>
                <p className="text-gray-700">
                  We aim to respond to all emails within 24 hours during business days. For urgent technical 
                  support issues, we typically respond within a few hours.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can you help me choose the right eSIM?</h3>
                <p className="text-gray-700">
                  Absolutely! Tell us your destination, travel duration, data needs, and budget, and we'll 
                  provide personalized recommendations based on our extensive testing and research.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you provide eSIM setup support?</h3>
                <p className="text-gray-700">
                  While we don't sell eSIMs directly, we provide detailed setup guides and can help 
                  troubleshoot common activation issues. Check our blog for step-by-step tutorials.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How do you test eSIM providers?</h3>
                <p className="text-gray-700">
                  Our team travels regularly and tests eSIMs in real-world conditions. We measure speed, 
                  coverage, activation ease, and customer support quality to provide accurate comparisons.
                </p>
              </div>
            </div>
          </section>

          {/* Office Hours */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🕒 Response Times</h2>
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Standard Support</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• General questions: 24 hours</li>
                    <li>• eSIM recommendations: 24 hours</li>
                    <li>• Partnership inquiries: 48 hours</li>
                    <li>• Website feedback: 24-48 hours</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Priority Support</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Technical issues: 2-6 hours</li>
                    <li>• Urgent travel questions: 2-6 hours</li>
                    <li>• Press inquiries: 4-8 hours</li>
                    <li>• Business partnerships: 12-24 hours</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-gray-700">
                  <strong>Note:</strong> Response times are based on business days (Monday-Friday). 
                  We're based in Turkey (GMT+3) but serve customers worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Social Media */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🌐 Follow Us</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg text-gray-700 mb-6 text-center">
                Stay updated with the latest eSIM news, deals, and travel tips
              </p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://twitter.com/esimcountry" 
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🐦 Twitter
                </a>
                <a 
                  href="https://facebook.com/esimcountry" 
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📘 Facebook
                </a>
              </div>
            </div>
          </section>

          {/* Contact Form Placeholder */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">💌 Send Us a Message</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg text-gray-700 mb-6">
                For the fastest response, please email us directly at one of the addresses above. 
                Include as much detail as possible about your question or the assistance you need.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <a 
                  href="mailto:hello@esimcountry.fyi"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  General Questions
                </a>
                <a 
                  href="mailto:support@esimcountry.fyi"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Technical Support
                </a>
                <a 
                  href="mailto:business@esimcountry.fyi"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Business Inquiries
                </a>
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
            <Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link>
            <Link href="/about" className="text-gray-300 hover:text-white">About Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 