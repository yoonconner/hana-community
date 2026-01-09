'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import Logo from './Logo'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: { href: string; label: string }[]
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-navy-dark z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-warm-white/10">
          <Logo variant="icon" colorMode="light" />
          <button
            onClick={onClose}
            className="p-2 text-warm-white/90 hover:text-warm-white transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-4 py-6">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block py-3 px-4 text-warm-white/90 hover:text-warm-white hover:bg-warm-white/5 rounded-soft font-body text-lg transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-warm-white/10 mt-4">
              <Link
                href="/admin/login"
                onClick={onClose}
                className="block py-3 px-4 text-warm-white/60 hover:text-warm-white/80 hover:bg-warm-white/5 rounded-soft font-body text-sm transition-colors duration-200"
              >
                Admin Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
