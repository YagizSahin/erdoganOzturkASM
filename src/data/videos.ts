export interface PromoVideo {
  // Path under public/ (served as-is, not bundled)
  src: string
  title: string
  orientation: 'landscape' | 'portrait'
}

export const promoVideos: PromoVideo[] = [
  {
    src: '/videos/tanitim-2.mp4',
    title: 'Merkezimizin İç Mekânı',
    orientation: 'landscape',
  },
  {
    src: '/videos/tanitim-1.mp4',
    title: 'Merkezimize Ulaşım',
    orientation: 'portrait',
  },
]
