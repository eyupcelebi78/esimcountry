import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://esimcountry.fyi'),
  alternates: { canonical: '/blog/iphone-12-mini-esim' },
  title: 'iPhone 12 mini eSIM (2025): Compatibility, Setup, Dual SIM',
  description: 'Does iPhone 12 mini support eSIM? Yes. Learn how to activate eSIM, use dual SIM, fix common issues, and compare travel eSIM plans by country.',
  openGraph: {
    title: 'iPhone 12 mini eSIM (2025): Compatibility, Setup, Dual SIM',
    description: 'Full iPhone 12 mini eSIM guide: activation, dual SIM, troubleshooting, and plan comparison.',
    url: 'https://esimcountry.fyi/blog/iphone-12-mini-esim',
    type: 'article',
  },
}

export default function Page() {
  const related = [
    '/blog/iphone-12-esim',
    '/blog/does-iphone-12-have-esim',
    '/blog/does-iphone-12-support-esim',
    '/blog/is-iphone-12-esim-compatible',
    '/blog/does-iphone-12-pro-have-esim',
  ]

  const faq = [
    { q: 'Does iPhone 12 mini support eSIM?', a: 'Yes. iPhone 12 mini supports eSIM in 2025 with most carriers. Availability depends on your region and operator.' },
    { q: 'Can iPhone 12 mini use dual SIM?', a: 'Yes. One eSIM + one physical SIM at the same time.' },
    { q: 'How do I add an eSIM on iPhone 12 mini?', a: 'Settings → Cellular → Add eSIM, then scan QR code or use carrier app/activation code.' },
    { q: 'Is eSIM good for travel?', a: 'Yes. You can buy and activate plans digitally. Compare options on Best eSIM Plans.' },
  ]

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  const articleJsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: 'iPhone 12 mini eSIM (2025): Compatibility, Setup, Dual SIM', datePublished: '2025-01-20', author: { '@type': 'Organization', name: 'eSIM Country' }, wordCount: 1600 }
  const breadcrumbJsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://esimcountry.fyi' }, { '@type': 'ListItem', position: 2, name: 'eSIM Guides', item: 'https://esimcountry.fyi/best-esim-plans' }, { '@type': 'ListItem', position: 3, name: 'iPhone 12 mini eSIM' } ] }

  return (
    <main className="prose prose-lg max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <h1>iPhone 12 mini eSIM (2025 Guide)</h1>
      <p><strong>Yes.</strong> iPhone 12 mini supports eSIM and dual SIM (eSIM + physical). Below you will find activation steps, requirements, common fixes, and plan tips.</p>
      <p>For travel, see <Link href="/best-esim-plans" className="text-blue-600">Best eSIM Plans</Link> to compare options by country.</p>

      <blockquote>
        <p className="font-semibold">Quick Answer</p>
        <ul>
          <li>iPhone 12 mini supports eSIM in 2025.</li>
          <li>Dual SIM works: one eSIM + one physical SIM.</li>
          <li>Activation via QR, SM‑DP+ code, or carrier app.</li>
        </ul>
      </blockquote>

      <h2>Activation Steps</h2>
      <ol>
        <li>Settings → Cellular → Add eSIM</li>
        <li>Scan QR or enter the activation code</li>
        <li>Label the line and choose defaults</li>
      </ol>

      <h2>Plan Comparison</h2>
      <p>Use the <Link href="/best-esim-plans" className="text-blue-600">Best eSIM Plans</Link> hub to evaluate travel eSIM options.</p>

      <h2>FAQ</h2>
      {faq.map((item) => (
        <div key={item.q} className="mb-4">
          <p className="font-semibold">{item.q}</p>
          <p>{item.a}</p>
        </div>
      ))}

      <h2>Conclusion</h2>
      <p>iPhone 12 mini supports eSIM and dual SIM for flexible connectivity. Compare plans before purchasing.</p>

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