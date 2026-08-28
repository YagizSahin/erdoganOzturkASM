import koruyucuIcon from '../assets/services/koruyucu.png'
import anneIcon from '../assets/services/anne.png'
import bebekIcon from '../assets/services/bebek.png'
import bagisiklamaIcon from '../assets/services/bagisiklama.png'
import tedaviIcon from '../assets/services/tedavi.png'
import geziciIcon from '../assets/services/gezici.png'
import egitimIcon from '../assets/services/egitim.png'

export interface ServiceCategory {
  title: string
  description: string
  icon: string
}

// All category icons share these intrinsic dimensions.
export const serviceIconWidth = 1536
export const serviceIconHeight = 1024

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Koruyucu Sağlık Hizmetleri',
    description: 'Hastalıkların ortaya çıkmadan önlenmesine yönelik tarama, danışmanlık ve izlem hizmetleri.',
    icon: koruyucuIcon,
  },
  {
    title: 'Anne ve Kadın Sağlığı Hizmetleri',
    description: 'Gebe izlemleri, lohusa takibi, aile planlaması danışmanlığı ve kadın sağlığı hizmetleri.',
    icon: anneIcon,
  },
  {
    title: 'Bebek ve Çocuk Sağlığı Hizmetleri',
    description: 'Yenidoğan, bebek ve çocuk izlemleri ile büyüme-gelişme takibi.',
    icon: bebekIcon,
  },
  {
    title: 'Bağışıklama Hizmetleri',
    description: 'Ulusal aşı takvimine uygun çocukluk çağı ve erişkin aşılama hizmetleri.',
    icon: bagisiklamaIcon,
  },
  {
    title: 'Tedavi Edici Sağlık Hizmetleri',
    description: 'Poliklinik muayenesi, küçük cerrahi müdahaleler ve gerekli sağlık kurumlarına sevk işlemleri.',
    icon: tedaviIcon,
  },
  {
    title: 'Gezici ve Yerinde Sağlık Hizmetleri',
    description: 'Merkeze bağlı köy ve mahallelere planlı ziyaretlerle götürülen sağlık hizmetleri.',
    icon: geziciIcon,
  },
  {
    title: 'Eğitim ve Danışmanlık Hizmetleri',
    description: 'Danışanlarımıza sağlıklı yaşam, beslenme ve emzirme gibi konularda eğitim ve danışmanlık verilmektedir.',
    icon: egitimIcon,
  },
]

export const requiredDocumentsNote =
  'Müdahaleler hariç tüm işlemler için, yanınızda kimlik numarası içeren kimlik kartınızı bulundurmanız gereklidir. Enjeksiyon işlemi için yanınızda kimliğiniz ile birlikte reçetenizi getirmeniz gereklidir.'
