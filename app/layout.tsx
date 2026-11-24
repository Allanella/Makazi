import type { Metadata, Viewport } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { organization } from '@/data/organization'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')),
  title: {
    default: 'MAKAZI Education Initiative | Empowering Communities in Iganga, Uganda',
    template: '%s | MAKAZI Education Initiative',
  },
  description: 'MAKAZI Education Initiative partners with local stakeholders in Iganga, Uganda to support education, health, practical skills and sustainable community development.',
  keywords: ['MAKAZI Education Initiative', 'NGO in Iganga Uganda', 'education support in Iganga', 'community development Uganda', 'children education Uganda'],
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    siteName: organization.name,
    title: 'MAKAZI Education Initiative | Empowering Communities in Iganga, Uganda',
    description: 'Partnering with local stakeholders to build opportunity through education, health and sustainable community development.',
    images: [{ url: '/images/education-classroom.png', width: 1536, height: 1024, alt: 'Children learning together in a classroom' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAKAZI Education Initiative',
    description: 'Empowering communities through education, health and sustainable development.',
    images: ['/images/education-classroom.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#15523E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
