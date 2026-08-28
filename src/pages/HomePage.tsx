import { Link } from 'react-router-dom'
import { siteInfo } from '../data/siteInfo'
import { galleryPhotos } from '../data/gallery'
import { doctors } from '../data/doctors'
import Reveal from '../components/Reveal'
import doctorIcon from '../assets/doktor.png'
import hekimlerimizIcon from '../assets/hekimlerimiz.png'
import hizmetlerimizIcon from '../assets/hizmetlerimiz.png'
import yerindeIcon from '../assets/yerinde.png'
import iletisimIcon from '../assets/iletisim.png'

const quickLinks = [
  {
    title: 'Hekimlerimiz',
    desc: '7 aile hekimimizin iletişim ve çalışma saatleri bilgileri.',
    to: '/hekimlerimiz',
    icon: hekimlerimizIcon,
    iconWidth: 1402,
    iconHeight: 1122,
  },
  {
    title: 'Hizmetlerimiz',
    desc: 'Merkezimizde sunulan koruyucu ve tedavi edici sağlık hizmetleri.',
    to: '/hizmetlerimiz',
    icon: hizmetlerimizIcon,
    iconWidth: 1402,
    iconHeight: 1122,
  },
  {
    title: 'Gezici / Yerinde Hizmet',
    desc: 'Köy ve mahallelere yönelik gezici sağlık hizmeti programları.',
    to: '/gezici-hizmet',
    icon: yerindeIcon,
    iconWidth: 1448,
    iconHeight: 1086,
  },
  {
    title: 'İletişim',
    desc: 'Adres, telefon ve konum bilgilerimize buradan ulaşabilirsiniz.',
    to: '/iletisim',
    icon: iletisimIcon,
    iconWidth: 1448,
    iconHeight: 1086,
  },
]

export default function HomePage() {
  return (
    <div>
      <section className="relative">
        <div className="h-[320px] md:h-[420px] w-full overflow-hidden">
          <img src={galleryPhotos[0].src} alt={galleryPhotos[0].caption} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <p className="text-white/80 text-sm md:text-base font-medium mb-2">T.C. Sağlık Bakanlığı</p>
            <h1 className="text-white text-3xl md:text-5xl font-semibold max-w-2xl leading-tight">
              {siteInfo.centerName}
            </h1>
            <p className="text-white/85 mt-4 max-w-xl text-sm md:text-base">{siteInfo.address}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/hekimlerimiz" className="bg-[#b0264f] hover:bg-[#8a1d3d] transition-colors text-white px-5 py-2.5 rounded-md text-sm font-medium">
                Hekimlerimizi Görüntüle
              </Link>
              <Link to="/iletisim" className="bg-white/10 hover:bg-white/20 transition-colors backdrop-blur text-white px-5 py-2.5 rounded-md text-sm font-medium border border-white/30">
                İletişim Bilgileri
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {quickLinks.map((q, idx) => (
            <Reveal key={q.to} delay={idx * 90} className="h-full">
              <Link
                to={q.to}
                className="group h-full flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                {q.icon ? (
                  <div className="w-full h-40 bg-[#f8e6ec] shrink-0">
                    <img
                      src={q.icon}
                      alt=""
                      width={q.iconWidth}
                      height={q.iconHeight}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 mt-6 ml-6 rounded-lg bg-[#f8e6ec] text-[#b0264f] flex items-center justify-center font-semibold">
                    {q.title.charAt(0)}
                  </div>
                )}
                <div className="p-6 pt-4">
                  <h3 className="font-semibold text-[#26232a] mb-1 group-hover:text-[#b0264f] transition-colors">{q.title}</h3>
                  <p className="text-sm text-gray-600">{q.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <h2 className="text-2xl font-semibold text-[#26232a] mb-4">Hakkımızda</h2>
            <p className="text-gray-600 leading-relaxed">{siteInfo.about}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {[
                { label: 'Aile Hekimi', value: siteInfo.staffSummary.doctors },
                { label: 'Aile Sağlığı Çalışanı', value: siteInfo.staffSummary.ase },
                { label: 'Yardımcı Personel', value: siteInfo.staffSummary.assistantHealthStaff },
                { label: 'Hizmet Personeli', value: siteInfo.staffSummary.servicePersonnel },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-[#b0264f]">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <Link to="/hakkimizda" className="inline-block mt-8 text-[#b0264f] font-medium text-sm hover:underline">
              Devamını okuyun →
            </Link>
          </Reveal>
          <Reveal delay={150} className="grid grid-cols-2 gap-4">
            {galleryPhotos.slice(1, 5).map((photo) => (
              <img key={photo.src} src={photo.src} alt={photo.caption} className="rounded-lg h-40 w-full object-cover" />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-semibold text-[#26232a] mb-6">Hekimlerimiz</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {doctors.map((doc, idx) => (
            <Reveal key={doc.id} delay={idx * 70}>
              <Link
                to={`/hekimlerimiz/${doc.id}`}
                className="block rounded-xl border border-gray-200 bg-white p-5 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#f8e6ec] overflow-hidden mb-3">
                  <img src={doctorIcon} alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-[#26232a] text-sm">{doc.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{doc.code} Nolu Aile Hekimi</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
