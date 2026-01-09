'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gather', label: 'Gather' },
  { href: '/connect', label: 'Connect' },
  { href: '/give', label: 'Give' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 bg-navy-dark transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo size={100} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white font-body text-lg font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  )
}
