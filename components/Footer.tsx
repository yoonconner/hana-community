import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark text-warm-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Logo variant="full" colorMode="light" />
            <p className="text-sm text-warm-white/60 max-w-xs">
              A young adult ministry at Korean Presbyterian Church of Fresno.
              Building bridges through faith, fellowship, and service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-medium text-sm tracking-wide uppercase mb-4 text-warm-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-warm-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gather" className="text-sm hover:text-warm-white transition-colors">
                  Gather
                </Link>
              </li>
              <li>
                <Link href="/connect" className="text-sm hover:text-warm-white transition-colors">
                  Connect
                </Link>
              </li>
              <li>
                <Link href="/serve" className="text-sm hover:text-warm-white transition-colors">
                  Serve
                </Link>
              </li>
              <li>
                <Link href="/give" className="text-sm hover:text-warm-white transition-colors">
                  Give
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-medium text-sm tracking-wide uppercase mb-4 text-warm-white">
              Connect With Us
            </h3>
            <div className="space-y-2 text-sm">
              <p>Korean Presbyterian Church of Fresno</p>
              <p className="text-warm-white/60">
                Every other Friday at 5:30 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-warm-white/50">
            &copy; {currentYear} Hana Community | 하나 공동체. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
