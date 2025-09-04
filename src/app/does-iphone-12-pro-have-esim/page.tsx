import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://esimcountry.fyi'),
  alternates: { canonical: '/does-iphone-12-pro-have-esim' },
  title: 'Does iPhone 12 Pro Have eSIM? (2025): Yes — Setup & Dual SIM',
  description: 'Yes, iPhone 12 Pro has eSIM. Learn setup steps, dual SIM usage, troubleshooting, and compare travel eSIM plans by destination.',
  openGraph: {
    title: 'Does iPhone 12 Pro Have eSIM? (2025): Yes — Setup & Dual SIM',
    description: 'All about eSIM on iPhone 12 Pro: activation, dual SIM tips, fixes, and plan comparison.',
    url: 'https://esimcountry.fyi/does-iphone-12-pro-have-esim',
    type: 'article',
  },
}

export default function Page() {
  const related = [
    '/iphone-12-esim',
    '/does-iphone-12-have-esim',
    '/does-iphone-12-support-esim',
    '/is-iphone-12-esim-compatible',
    '/can-iphone-12-use-esim',
  ]

  const faq = [
    { q: 'Does iPhone 12 Pro have eSIM?', a: 'Yes. iPhone 12 Pro supports eSIM in 2025 with most carriers.' },
    { q: 'Can I use dual SIM?', a: 'Yes. One eSIM with one physical SIM simultaneously.' },
  ]

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  const articleJsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Does iPhone 12 Pro Have eSIM? (2025): Yes — Setup & Dual SIM', datePublished: '2025-01-20', author: { '@type': 'Organization', name: 'eSIM Country' }, wordCount: 1500 }

  return (
    <main className="prose prose-lg max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <h1>Does iPhone 12 Pro Have eSIM? (2025)</h1>
      <p><strong>Yes.</strong> iPhone 12 Pro supports eSIM and dual SIM. Here’s how to activate it and what to check before you buy a plan.</p>

      <h2>Compare Plans</h2>
      <p>See <Link href="/best-esim-plans" className="text-blue-600">Best eSIM Plans</Link> for travel options.</p>

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