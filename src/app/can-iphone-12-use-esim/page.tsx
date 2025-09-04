import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://esimcountry.fyi'),
  alternates: { canonical: '/can-iphone-12-use-esim' },
  title: 'Can iPhone 12 Use eSIM? (2025): Yes — Setup and Tips',
  description: 'Yes, iPhone 12 can use eSIM. Learn how to set it up, use dual SIM, fix issues, and compare travel eSIM plans by country.',
  openGraph: {
    title: 'Can iPhone 12 Use eSIM? (2025): Yes — Setup and Tips',
    description: 'Guide to using eSIM on iPhone 12: activation, dual SIM, troubleshooting, and plan comparison.',
    url: 'https://esimcountry.fyi/can-iphone-12-use-esim',
    type: 'article',
  },
}

export default function Page() {
  const related = [
    '/iphone-12-esim',
    '/does-iphone-12-have-esim',
    '/is-iphone-12-esim-compatible',
    '/does-iphone-12-pro-have-esim',
    '/can-all-of-the-iphone-12-use-esims',
  ]

  const faq = [
    { q: 'Can iPhone 12 use eSIM?', a: 'Yes. All models can use eSIM in 2025. You need carrier support and an activation profile.' },
    { q: 'Can I keep my physical SIM?', a: 'Yes. You can run one eSIM and one physical SIM simultaneously for dual SIM.' },
    { q: 'Is eSIM good for travel?', a: 'Yes. It allows instant activation and easy switching. Compare options in our hub.' },
  ]

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  const articleJsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Can iPhone 12 Use eSIM? (2025): Yes — Setup and Tips', datePublished: '2025-01-20', author: { '@type': 'Organization', name: 'eSIM Country' }, wordCount: 1500 }

  return (
    <main className="prose prose-lg max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <h1>Can iPhone 12 Use eSIM? (2025)</h1>
      <p><strong>Yes.</strong> iPhone 12 can use eSIM alongside a physical SIM. Below is how to activate and use it confidently.</p>

      <blockquote>
        <p className="font-semibold">Quick Answer</p>
        <ul>
          <li>eSIM works on iPhone 12 (all models).</li>
          <li>Dual SIM: one eSIM + one physical.</li>
          <li>Activation via QR, SM‑DP+ code, or carrier app.</li>
        </ul>
      </blockquote>

      <h2>Compare Plans</h2>
      <p>Use the <Link href="/best-esim-plans" className="text-blue-600">Best eSIM Plans</Link> hub to compare travel eSIMs.</p>

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