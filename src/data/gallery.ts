import disCephe from '../assets/gallery/dis-cephe.jpeg'
import beklemeGiris from '../assets/gallery/bekleme-giris.jpeg'
import koridor1 from '../assets/gallery/koridor-1.jpeg'
import hastaKabul from '../assets/gallery/hasta-kabul.jpeg'
import koridor2 from '../assets/gallery/koridor-2.jpeg'
import wcArsiv from '../assets/gallery/wc-arsiv.jpeg'

export interface GalleryPhoto {
  src: string
  caption: string
}

export const galleryPhotos: GalleryPhoto[] = [
  { src: disCephe, caption: 'Merkezimizin dış cephesi ve girişi' },
  { src: beklemeGiris, caption: 'Giriş ve bekleme alanı' },
  { src: koridor1, caption: 'Hekim kat koridoru ve bekleme koltukları' },
  { src: hastaKabul, caption: 'Hasta kabul bankosu' },
  { src: koridor2, caption: 'Bekleme salonu ve emzirme köşesi panosu' },
  { src: wcArsiv, caption: 'WC ve arşiv alanı' },
]
