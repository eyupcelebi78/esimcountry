import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - eSIM Country | Data Protection & Privacy',
  description: 'eSIM Country privacy policy explaining how we collect, use, and protect your personal information. Last updated January 2025.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - eSIM Country',
    description: 'Learn how eSIM Country protects your privacy and handles your personal data.',
    type: 'website',
  },
};

export default function PrivacyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we protect your data.
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
                eSIM Country ("we," "our," or "us") operates the website esimcountry.fyi (the "Service"). 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>
              <p className="text-gray-700">
                By using our Service, you consent to the data practices described in this Privacy Policy. 
                If you do not agree with the practices described in this policy, please do not use our Service.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📊 Information We Collect</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                <p className="text-gray-700 mb-3">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Contact us via email</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Submit feedback or suggestions</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-700 mb-3">
                  When you visit our website, we automatically collect certain information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>IP address and browser information</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website and search terms used</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 How We Use Your Information</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide and maintain our Service</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Send you updates and newsletters (with consent)</li>
                  <li>Improve our website and user experience</li>
                </ul>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Analyze website usage and performance</li>
                  <li>Prevent fraud and ensure security</li>
                  <li>Comply with legal obligations</li>
                  <li>Display relevant advertisements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🍪 Cookies and Tracking Technologies</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Essential Cookies</h4>
                  <p className="text-gray-700">Required for basic website functionality and security.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Analytics Cookies</h4>
                  <p className="text-gray-700">Help us understand how visitors interact with our website (Google Analytics).</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Advertising Cookies</h4>
                  <p className="text-gray-700">Used to display relevant advertisements (Google AdSense).</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                You can control cookies through your browser settings, but disabling certain cookies may 
                affect website functionality.
              </p>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🤝 Third-Party Services</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-4">
                We use the following third-party services that may collect information:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                  <p className="text-gray-700 text-sm">
                    Website analytics and user behavior tracking. 
                    <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      Google Privacy Policy
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Google AdSense</h4>
                  <p className="text-gray-700 text-sm">
                    Advertisement serving and personalization. 
                    <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      Google Privacy Policy
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Vercel</h4>
                  <p className="text-gray-700 text-sm">
                    Website hosting and performance analytics. 
                    <a href="https://vercel.com/legal/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      Vercel Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🔒 Data Security</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure hosting infrastructure</li>
                <li>Regular security updates and monitoring</li>
                <li>Limited access to personal information</li>
                <li>Data minimization practices</li>
              </ul>
              <p className="text-gray-700 mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. 
                While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">⚖️ Your Rights</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your personal information</li>
                  <li>Restrict processing of your data</li>
                </ul>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Data portability</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent</li>
                  <li>File a complaint with authorities</li>
                </ul>
              </div>
              <p className="text-gray-700 mt-4">
                To exercise any of these rights, please contact us at 
                <a href="mailto:privacy@esimcountry.fyi" className="text-blue-600 hover:underline">
                  privacy@esimcountry.fyi
                </a>
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📝 Changes to This Policy</h2>
            <div className="bg-blue-50 rounded-lg p-8">
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. When we make changes, we will:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Update the "Last updated" date at the top of this policy</li>
                <li>Notify users of significant changes via email or website notice</li>
                <li>Post the updated policy on our website</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Your continued use of our Service after any changes indicates your acceptance of the 
                updated Privacy Policy.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📧 Contact Us</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg text-gray-700 mb-6">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> 
                  <a href="mailto:privacy@esimcountry.fyi" className="text-blue-600 hover:underline ml-2">
                    privacy@esimcountry.fyi
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
            <Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link>
            <Link href="/about" className="text-gray-300 hover:text-white">About Us</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 