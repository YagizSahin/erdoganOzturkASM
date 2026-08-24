import { Link } from 'react-router-dom'
import { siteInfo } from '../data/siteInfo'
import { navItems } from '../data/nav'

const quickLinks = navItems.flatMap((item) => (item.children ? item.children : [{ label: item.label, to: item.to as string }]))

export default function Footer() {
  return (
    <footer className="bg-[#26232a] text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="text-white font-semibold mb-3">{siteInfo.shortName}</div>
          <p className="text-sm leading-relaxed">{siteInfo.address}</p>
          <p className="text-sm mt-2">{siteInfo.affiliatedUnit}</p>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">Hızlı Erişim</div>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">Bağlantılar</div>
          <ul className="space-y-2 text-sm">
            {siteInfo.externalLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">İletişim</div>
          <ul className="space-y-2 text-sm">
            {siteInfo.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 text-xs text-gray-400 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-7xl mx-auto">
        <span>© {new Date().getFullYear()} {siteInfo.centerName}</span>
        <span>T.C. Sağlık Bakanlığı resmi web sitesi değildir.</span>
      </div>
    </footer>
  )
}
