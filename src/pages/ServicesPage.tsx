import PageHeader from '../components/PageHeader'
import { serviceCategories, requiredDocumentsNote, serviceIconWidth, serviceIconHeight } from '../data/services'
import Reveal from '../components/Reveal'

export default function ServicesPage() {
  return (
    <div>
      <PageHeader title="Hizmetlerimiz" subtitle="Merkezimizde sunulan başlıca sağlık hizmetleri" />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCategories.map((cat, idx) => (
            <Reveal key={cat.title} delay={(idx % 3) * 90}>
              <div className="rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
                <div className="w-full bg-[#f8e6ec]">
                  <img
                    src={cat.icon}
                    alt=""
                    width={serviceIconWidth}
                    height={serviceIconHeight}
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-[#26232a] mb-2">{cat.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{cat.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-xl bg-[#f8e6ec] border border-[#f0c9d6] p-6">
          <h3 className="font-semibold text-[#8a1d3d] mb-2">Hizmetler İçin Gereken Evraklar</h3>
          <p className="text-sm text-[#8a1d3d]/90 leading-relaxed">{requiredDocumentsNote}</p>
        </Reveal>
      </section>
    </div>
  )
}
