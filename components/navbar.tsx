'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { label: 'الرئيسية', href: '/' },
    { label: 'من نحن', href: '/about' },
    { label: 'الخدمات', href: '/services' },
    { label: 'فريق العمل', href: '/team' },
    { label: 'المقالات', href: '/articles' },
    { label: 'تواصل معنا', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-bold text-primary">
              الركيزة<span className="text-accent">.</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/consultation"
              className="hidden sm:inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              احجز استشارة
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <Menu size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/consultation"
                className="block w-full px-3 py-2 mt-4 bg-accent text-accent-foreground rounded-lg font-semibold text-center hover:opacity-90 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                احجز استشارة
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
