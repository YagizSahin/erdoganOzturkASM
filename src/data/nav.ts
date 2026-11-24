export interface NavItem {
  label: string
  to?: string
  children?: { label: string; to: string }[]
}

export const navItems: NavItem[] = [
  { label: 'Ana Sayfa', to: '/' },
  {
    label: 'Kurumsal',
    children: [
      { label: 'Hakkımızda', to: '/hakkimizda' },
      { label: 'Hizmet Standartları', to: '/hizmet-standartlari' },
    ],
  },
  { label: 'Hizmetlerimiz', to: '/hizmetlerimiz' },
  { label: 'Hekimlerimiz', to: '/hekimlerimiz' },
  { label: 'Gezici / Yerinde Hizmet', to: '/gezici-hizmet' },
  { label: 'Sağlık Hesaplamaları', to: '/saglik-hesaplamalari' },
  { label: 'Galeri', to: '/galeri' },
  { label: 'Tanıtım Videosu', to: '/tanitim-videosu' },
  { label: 'İletişim', to: '/iletisim' },
]
