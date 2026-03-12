import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import siteConfig from '../siteConfig'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <span
            className="font-accent text-2xl leading-none"
            style={{ color: scrolled ? '#C47F5A' : '#FAF7F2', fontFamily: 'Caveat, cursive' }}
          >
            Mommy Liss
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-body text-sm font-600 transition-colors hover:text-[#C47F5A] ${
                  scrolled ? 'text-[#6B4226]' : 'text-white'
                }`}
                style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 600 }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Phone */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="hidden md:flex items-center gap-2 bg-[#C47F5A] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#A8B89A] transition-colors"
          style={{ fontFamily: 'Mulish, sans-serif' }}
        >
          <FiPhone size={14} />
          {siteConfig.phone}
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg"
          style={{ color: scrolled ? '#6B4226' : 'white' }}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF7F2] border-t border-[#E8D5B7] overflow-hidden"
          >
            <ul className="px-5 py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-[#6B4226] font-semibold text-base hover:text-[#C47F5A] transition-colors"
                    style={{ fontFamily: 'Mulish, sans-serif' }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 bg-[#C47F5A] text-white px-4 py-3 rounded-full text-sm font-semibold w-full justify-center"
                  style={{ fontFamily: 'Mulish, sans-serif' }}
                >
                  <FiPhone size={14} />
                  Llamar ahora
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
