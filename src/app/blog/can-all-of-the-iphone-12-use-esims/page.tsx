import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://esimcountry.fyi'),
  alternates: { canonical: '/blog/can-all-of-the-iphone-12-use-esims' },
  title: 'Can All of the iPhone 12 Use eSIMs? (2025): Yes — Model Coverage',
  description: 'Yes, all iPhone 12 models can use eSIM in 2025. See model coverage, dual SIM, activation steps, and plan comparison.',
  openGraph: {
    title: 'Can All of the iPhone 12 Use eSIMs? (2025): Yes — Model Coverage',
    description: 'Model coverage guide: iPhone 12 series and eSIM support with setup tips and plan comparison.',
    url: 'https://esimcountry.fyi/blog/can-all-of-the-iphone-12-use-esims',
    type: 'article',
  },
}

export default function Page() {
  const related = [
    '/blog/iphone-12-esim',
    '/blog/does-iphone-12-have-esim',
    '/blog/does-iphone-12-support-esim',
    '/blog/is-iphone-12-esim-compatible',
    '/blog/can-iphone-12-use-esim',
  ]

  const faq = [
    { q: 'Do all iPhone 12 models support eSIM?', a: 'Yes. iPhone 12, 12 mini, 12 Pro, and 12 Pro Max all support eSIM.' },
    { q: 'Is dual SIM supported on all models?', a: 'Yes. One eSIM + one physical SIM across the lineup.' },
  ]

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  const articleJsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Can All of the iPhone 12 Use eSIMs? (2025): Yes — Model Coverage', datePublished: '2025-01-20', author: { '@type': 'Organization', name: 'eSIM Country' }, wordCount: 1500 }

  return (
    <main className="prose prose-lg max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <h1>Can All of the iPhone 12 Use eSIMs? (2025)</h1>
      <p><strong>Yes.</strong> The entire iPhone 12 lineup supports eSIM in 2025. Activation and policies depend on your carrier and region.</p>

      <h2>Compare Plans</h2>
      <p>Use <Link href="/best-esim-plans" className="text-blue-600">Best eSIM Plans</Link> to compare country‑specific travel eSIMs.</p>

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