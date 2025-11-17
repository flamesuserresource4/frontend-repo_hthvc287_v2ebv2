import { useState } from 'react'
import { Menu, X, Phone, Calculator, Home, FileText } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/calculator', label: 'Calculator', icon: Calculator },
    { to: '/apply', label: 'Apply', icon: FileText },
    { to: '/contact', label: 'Contact', icon: Phone },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/30" />
            <span className="font-semibold text-gray-900">SwiftLoan</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-gray-900/5 ${
                  location.pathname === to ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                <Icon size={16} />
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/apply" className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors">
              Get Started
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(({ to, label }) => (
              <Link key={to} to={to} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-gray-800 hover:bg-gray-900/5">
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
