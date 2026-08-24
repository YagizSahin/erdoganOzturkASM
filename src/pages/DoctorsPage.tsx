import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { doctors } from '../data/doctors'
import doctorIcon from '../assets/doktor.png'
import Reveal from '../components/Reveal'

export default function DoctorsPage() {
  return (
    <div>
      <PageHeader title="Hekimlerimiz" subtitle="Merkezimizde görev yapan aile hekimlerimiz" />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc, idx) => (
            <Reveal key={doc.id} delay={(idx % 3) * 90}>
              <Link
                to={`/hekimlerimiz/${doc.id}`}
                className="block rounded-xl border border-gray-200 bg-white p-6 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-[#f8e6ec] overflow-hidden mb-4">
                  <img src={doctorIcon} alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-[#26232a]">{doc.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{doc.code} Nolu Aile Hekimi</p>
                <p className="text-xs text-gray-400 mt-1">ASE: {doc.ase}</p>
                <span className="inline-block mt-4 text-sm text-[#b0264f] font-medium">Detayları Görüntüle →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
