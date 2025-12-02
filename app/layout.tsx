import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatbotWidget from './components/ChatbotWidget'
import SEO from './components/SEO'

export const metadata: Metadata = {
  title: 'APTS TECH | Enterprise Software, AI & Cybersecurity Solutions',
  description:
    'APTS TECH delivers enterprise-grade AI, software, and cybersecurity solutions worldwide. Build next-generation technology with our expert team.',
  keywords: 'enterprise software, AI solutions, cybersecurity, technology services, digital transformation',
  authors: [{ name: 'APTS TECH' }],
  generator: 'Next.js 15',
  applicationName: 'APTS TECH Website',
  referrer: 'strict-origin-when-cross-origin',
  colorScheme: 'light',
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    title: 'APTS TECH | Enterprise Software, AI & Cybersecurity Solutions',
    description:
      'APTS TECH delivers enterprise-grade AI, software, and cybersecurity solutions worldwide.',
    url: 'https://apts-techs.vercel.app',
    siteName: 'APTS TECH',
    images: [
      {
        url: 'https://apts-techs.vercel.app/Logooo.png',
        width: 1200,
        height: 630,
        alt: 'APTS TECH Logo'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APTS TECH | Enterprise Software, AI & Cybersecurity Solutions',
    description:
      'APTS TECH delivers enterprise-grade AI, software, and cybersecurity solutions worldwide.',
    images: ['https://apts-techs.vercel.app/Logoo.png'],
    site: '@apts_tech'
  },
  icons: {
    icon: '/Logooo.png',          // ✅ Favicon
    shortcut: '/Logooo.png',
    apple: '/Logooo.png'          // ✅ Apple Touch Icon
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#f7fbff]">
        <Header />
        <main className="flex-1">
          <SEO
            title="Next-Gen AI & Enterprise Software Solutions"
            desc="Discover enterprise AI, software, and cybersecurity solutions by APTS TECH."
            url="https://apts-techs.vercel.app"
            image="https://apts-techs.vercel.app/Logooo.png"
            keywords="AI software, enterprise solutions, cybersecurity, digital transformation"
          />
          {children}
          <ChatbotWidget />
        </main>
        <Footer />
      </body>
    </html>
  )
}
