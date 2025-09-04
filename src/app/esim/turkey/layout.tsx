import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/esim/turkey',
  },
}

export default function TurkeyLayout({ children }: { children: React.ReactNode }) {
  return children
} 