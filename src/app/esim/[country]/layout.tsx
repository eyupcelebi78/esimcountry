import type { Metadata } from 'next'

function formatCountryFromSlug(slug: string): string {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export function generateMetadata({ params }: { params: { country: string } }): Metadata {
  const countrySlug = params.country
  const countryName = formatCountryFromSlug(countrySlug)

  return {
    title: `Best eSIM ${countryName} 2025: Compare Plans & Providers`,
    description: `Compare eSIM plans for ${countryName}. Real 2025 prices, coverage details, and provider reviews to help you pick the best plan for your trip.`,
    alternates: {
      canonical: `/esim/${countrySlug}`,
    },
    openGraph: {
      title: `Best eSIM ${countryName} 2025: Plans & Coverage | eSIM Country`,
      description: `Up-to-date comparison of eSIM plans for ${countryName}. Find the best data, validity, and pricing for your needs.`,
      type: 'website',
      url: `https://esimcountry.fyi/esim/${countrySlug}`,
    },
  }
}

export default function CountryLayout({ children }: { children: React.ReactNode }) {
  return children
} 