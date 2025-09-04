import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://esimcountry.fyi'),
  alternates: { canonical: '/does-iphone-12-have-esim' },
  title: 'Does iPhone 12 Have eSIM? (2025): Yes — Full Guide',
  description: 'Yes, iPhone 12 has eSIM. Learn activation, dual SIM use, carrier support, troubleshooting, and compare travel eSIM plans by country.',
  openGraph: {
    title: 'Does iPhone 12 Have eSIM? (2025): Yes — Full Guide',
    description: 'All you need to know about eSIM on iPhone 12: setup, compatibility, dual SIM, and plan comparison.',
    url: 'https://esimcountry.fyi/does-iphone-12-have-esim',
    type: 'article',
  },
}

export default function Page() {
  const related = [
    '/iphone-12-esim',
    '/does-iphone-12-support-esim',
    '/is-iphone-12-esim-compatible',
    '/does-iphone-12-pro-have-esim',
    '/can-iphone-12-use-esim',
  ]

  const faq = [
    { q: 'Does iPhone 12 have eSIM?', a: 'Yes. iPhone 12 supports eSIM across all models in 2025. Availability depends on carrier support in your country.' },
    { q: 'Is dual SIM possible?', a: 'Yes. You can use one eSIM together with a physical nano‑SIM at the same time.' },
    { q: 'How to activate eSIM on iPhone 12?', a: 'Settings → Cellular → Add eSIM. Scan a QR code, use a carrier app, or enter SM‑DP+ and activation code.' },
    { q: 'Can I move my eSIM later?', a: 'Often yes via eSIM transfer/Quick Transfer. Some carriers require issuing a new profile.' },
    { q: 'What are good travel eSIM options?', a: 'Use our Best eSIM Plans hub to compare providers and coverage by destination.' },
  ]

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  const articleJsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Does iPhone 12 Have eSIM? (2025): Yes — Full Guide', datePublished: '2025-01-20', author: { '@type': 'Organization', name: 'eSIM Country' }, wordCount: 1600 }
  const breadcrumbJsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://esimcountry.fyi' }, { '@type': 'ListItem', position: 2, name: 'eSIM Guides', item: 'https://esimcountry.fyi/best-esim-plans' }, { '@type': 'ListItem', position: 3, name: 'Does iPhone 12 Have eSIM?' } ] }

  return (
    <main className="prose prose-lg max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <h1>Does iPhone 12 Have eSIM? (2025 Guide)</h1>
      <p><strong>Yes.</strong> iPhone 12 supports eSIM on all models. This guide shows how to activate it, how dual SIM works, the requirements, and common fixes.</p>
      <p>For travel, you can purchase and activate a plan digitally. Compare options on <Link href="/best-esim-plans" className="text-blue-600">Best eSIM Plans</Link>.</p>

      <blockquote>
        <p className="font-semibold">Quick Answer</p>
        <ul>
          <li>All iPhone 12 models support eSIM.</li>
          <li>Dual SIM: one eSIM + one physical SIM.</li>
          <li>Activation via QR, SM‑DP+ code, or carrier app.</li>
        </ul>
      </blockquote>

      <h2>What is eSIM & how it works?</h2>
      <p>eSIM is a digital SIM profile provisioned over the air. You can store multiple profiles and switch them as needed.</p>

      <h2>Compatibility & Requirements</h2>
      <ul>
        <li>Models: iPhone 12, 12 mini, 12 Pro, 12 Pro Max</li>
        <li>iOS: 16+ recommended for transfer features</li>
        <li>Carrier: must support eSIM activation and optionally Quick Transfer</li>
      </ul>

      <h2>Activation Steps</h2>
      <ol>
        <li>Settings → Cellular → Add eSIM</li>
        <li>Scan QR or enter activation details</li>
        <li>Choose line labels and defaults</li>
      </ol>

      <h2>Issues & Solutions</h2>
      <ul>
        <li>Activation failed → verify Wi‑Fi and activation code</li>
        <li>No data → ensure correct line is set for mobile data</li>
      </ul>

      <h2>Plan Comparison</h2>
      <p>Use the <Link href="/best-esim-plans" className="text-blue-600">Best eSIM Plans</Link> hub to compare providers by country.</p>

      <h2>FAQ</h2>
      {faq.map((item) => (
        <div key={item.q} className="mb-4">
          <p className="font-semibold">{item.q}</p>
          <p>{item.a}</p>
        </div>
      ))}

      <h2>Conclusion</h2>
      <p>iPhone 12 does have eSIM. Activation is fast and flexible, especially for travel. Compare before you buy.</p>

      <h3>Internal Links</h3>
      <ul>
        <li><Link href="/best-esim-plans">/best-esim-plans</Link></li>
        {related.slice(0, 4).map((u) => (
          <li key={u}><Link href={u}>{u}</Link></li>
        ))}
      </ul>
    </main>
  )
} 