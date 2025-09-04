import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://esimcountry.fyi'),
  alternates: { canonical: '/blog/iphone-12-esim' },
  title: 'iPhone 12 eSIM (2025): Setup, Compatibility, Dual SIM',
  description: 'Does iPhone 12 support eSIM in 2025? Yes. Learn setup steps, carrier support, dual SIM tips, troubleshooting, and compare travel eSIM plans.',
  openGraph: {
    title: 'iPhone 12 eSIM (2025): Setup, Compatibility, Dual SIM',
    description: 'Complete iPhone 12 eSIM guide: activation, compatibility, carriers, dual SIM, and plan comparison.',
    url: 'https://esimcountry.fyi/blog/iphone-12-esim',
    type: 'article',
  },
}

export default function Page() {
  const related = [
    '/blog/does-iphone-12-have-esim',
    '/blog/does-iphone-12-support-esim',
    '/blog/iphone-12-mini-esim',
    '/blog/does-iphone-12-pro-have-esim',
    '/blog/can-iphone-12-use-esim',
  ]

  const faq = [
    { q: 'Does iPhone 12 support eSIM in 2025?', a: 'Yes. All iPhone 12 models (12, 12 mini, 12 Pro, 12 Pro Max) support eSIM alongside a physical nano‑SIM in most regions.' },
    { q: 'Can I use dual SIM on iPhone 12?', a: 'Yes. You can use one eSIM + one physical SIM simultaneously (Dual SIM Dual Standby). In eSIM‑only countries, two eSIM profiles may be possible depending on carrier.' },
    { q: 'How do I add an eSIM on iPhone 12?', a: 'Go to Settings → Cellular → Add eSIM. Scan a QR code, enter activation code (SM‑DP+), or use carrier app/Quick Transfer.' },
    { q: 'Will an eSIM lock my iPhone 12?', a: 'No. eSIM itself does not lock an iPhone; lock status depends on carrier policy and device purchase terms.' },
    { q: 'Can I move my eSIM to a new iPhone?', a: 'Usually yes using eSIM transfer/Quick Transfer. Some carriers require issuing a new eSIM profile.' },
    { q: 'Is eSIM available on prepaid travel plans?', a: 'Yes. Many providers offer instant‑activation eSIMs for travel. Compare options on Best eSIM Plans.' },
  ]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'iPhone 12 eSIM (2025): Setup, Compatibility, Dual SIM',
    datePublished: '2025-01-20',
    author: { '@type': 'Organization', name: 'eSIM Country' },
    wordCount: 1700,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://esimcountry.fyi' },
      { '@type': 'ListItem', position: 2, name: 'eSIM Guides', item: 'https://esimcountry.fyi/best-esim-plans' },
      { '@type': 'ListItem', position: 3, name: 'iPhone 12 eSIM' },
    ],
  }

  return (
    <main className="prose prose-lg max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <h1>iPhone 12 eSIM (2025 Guide)</h1>

      <p>Yes — the iPhone 12 series supports eSIM in 2025. All models (iPhone 12, 12 mini, 12 Pro, 12 Pro Max) work with an eSIM profile, letting you activate service digitally without a physical SIM. Below is a complete, up‑to‑date guide on compatibility, activation, dual SIM, troubleshooting, and plan selection.</p>
      <p>If you are traveling, an eSIM can be activated instantly on arrival. For home carriers, check your operator’s eSIM support. For travel, compare options on <Link href="/best-esim-plans" className="text-blue-600">Best eSIM Plans</Link>.</p>

      <blockquote>
        <p className="font-semibold">Quick Answer</p>
        <ul>
          <li>All iPhone 12 models support eSIM in 2025.</li>
          <li>Dual SIM: one eSIM + one physical SIM simultaneously.</li>
          <li>Activation: Settings → Cellular → Add eSIM (QR/activation code/Quick Transfer).</li>
          <li>Travel plans: instant activation; compare before you buy.</li>
        </ul>
      </blockquote>

      <h2>What is eSIM & how it works?</h2>
      <p>eSIM is an embedded SIM that stores your carrier profile digitally. Activation happens over the air using a QR code, SM‑DP+ address, or carrier app. Profiles can be added, enabled, disabled, or removed from Settings without swapping cards.</p>

      <h2>iPhone 12 (mini/Pro/Pro Max) eSIM Compatibility</h2>
      <p>The iPhone 12 family supports eSIM globally, but carrier availability varies by country. In the US, newer iPhones can be eSIM‑only; iPhone 12 supports both eSIM and physical SIM. Check your carrier’s eSIM page for availability and transfer policies.</p>

      <h2>Requirements & Dual SIM</h2>
      <ul>
        <li>iOS 16+ recommended for best eSIM transfer support.</li>
        <li>Carrier support for eSIM and, if needed, Quick Transfer/eSIM transfer.</li>
        <li>Dual SIM works with one eSIM + one physical SIM.</li>
      </ul>

      <h2>Step‑by‑Step Activation</h2>
      <ol>
        <li>Open Settings → Cellular → Add eSIM.</li>
        <li>Choose QR code, use carrier app, or enter activation details (SM‑DP+ and activation code).</li>
        <li>Name the plan (e.g., Travel) and set default line for data/calls.</li>
        <li>Turn on Data Roaming for travel plans as needed.</li>
      </ol>

      <h2>Common Issues & Fixes</h2>
      <ul>
        <li>Activation failed: verify Wi‑Fi, correct SM‑DP+ address, and that the code is valid.</li>
        <li>No signal: ensure the correct line is enabled and APN is set by the profile.</li>
        <li>Transfer to new iPhone: use Quick Transfer if your carrier supports it.</li>
      </ul>

      <h2>Plan Selection & Comparison</h2>
      <p>For travel, choose coverage and data that match your itinerary. Before purchase, compare prices and coverage. Use our <Link href="/best-esim-plans" className="text-blue-600">Best eSIM Plans</Link> hub to explore options by country.</p>

      <h2>FAQ</h2>
      {faq.map((item) => (
        <div key={item.q} className="mb-4">
          <p className="font-semibold">{item.q}</p>
          <p>{item.a}</p>
        </div>
      ))}

      <h2>Conclusion</h2>
      <p>The iPhone 12 supports eSIM across all models, enabling fast activation, flexible dual SIM, and easy travel connectivity. Compare plans on <Link href="/best-esim-plans" className="text-blue-600">Best eSIM Plans</Link> before you buy.</p>

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