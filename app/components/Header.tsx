'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Projects' },
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)

  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) document.addEventListener('mousedown', handleClickOutside)
    else document.removeEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  // ✅ Detect scroll for shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`bg-white w-full z-50 transition-all duration-300
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/Logoo.png"
            alt="APTS Tech Logo"
            width={130}
            height={60}
            className="rounded-lg transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[20px] font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative hover:text-primary-700 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#00E5FF] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-[#00E5FF] rounded"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        ref={menuRef}
        className={`md:hidden bg-[#fff] border-t border-[#00E5FF33] shadow-lg overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col p-5 space-y-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-2 text-lg hover:text-[#00E5FF] transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Optional floating neon circle for wow effect */}
      <div className="absolute top-0 right-10 w-20 h-20 bg-[#00E5FF33] rounded-full blur-[80px] pointer-events-none animate-pulse opacity-50"></div>
    </header>
  )
}
