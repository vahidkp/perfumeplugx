import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import '@/styles/globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Perfumeplugx',
    default: 'Perfumeplugx — Authentic Arabian Fragrances',
  },
  description:
    'Premium Ouds, Attars, Bakhoor and Perfume Oils. Handcrafted Arabian fragrances delivered to your door.',
  openGraph: {
    siteName: 'Perfumeplugx',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-cream text-ink font-body antialiased">
        {children}
      </body>
    </html>
  )
}
