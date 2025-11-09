import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'APTS TECH — Building the Future of Technology',
  description: 'Enterprise-grade software, AI, and cybersecurity solutions by APTS TECH.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
