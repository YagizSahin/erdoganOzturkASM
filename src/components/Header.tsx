import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { siteInfo } from '../data/siteInfo'
import { navItems } from '../data/nav'
import logo from '../assets/logo.png'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-medium rounded transition-colors ${
      isActive ? 'text-[#b0264f]' : 'text-gray-700 hover:text-[#b0264f]'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="hidden md:flex items-center justify-between bg-[#8a1d3d] text-white text-xs px-6 py-1.5">
        <div className="flex items-center gap-4">
          <span>{siteInfo.address}</span>
        </div>
        <div className="flex items-center gap-4">
          {siteInfo.phones.map((phone) => (
            <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="hover:underline">
              {phone}
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between px-4 md:px-6 py-3 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="T.C. Sağlık Bakanlığı" className="w-11 h-11 shrink-0" />
          <div className="leading-tight">
            <div className="font-semibold text-[#26232a] text-sm md:text-base">T.C. Sağlık Bakanlığı</div>
            <div className="text-xs md:text-sm text-gray-600">{siteInfo.shortName}</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button className="px-3 py-2 text-sm font-medium rounded text-gray-700 hover:text-[#b0264f] transition-colors">
                  {item.label}
                </button>
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md py-2 min-w-[220px] border border-gray-100">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f8e6ec] hover:text-[#b0264f]"
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to as string} className={linkClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <button
          className="lg:hidden p-2 text-gray-700"
          aria-label="Menüyü aç/kapat"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 flex items-center justify-between"
                  onClick={() => setMobileSubOpen((v) => (v === item.label ? null : item.label))}
                >
                  {item.label}
                  <span>{mobileSubOpen === item.label ? '−' : '+'}</span>
                </button>
                {mobileSubOpen === item.label && (
                  <div className="pl-4 flex flex-col gap-1 pb-1">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className="px-3 py-2 text-sm text-gray-600 hover:text-[#b0264f]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to as string}
                className={linkClass}
                end={item.to === '/'}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      )}
    </header>
  )
}
