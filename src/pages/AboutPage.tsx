import PageHeader from '../components/PageHeader'
import { siteInfo } from '../data/siteInfo'
import { doctors } from '../data/doctors'
import { supportStaff } from '../data/staff'
import Reveal from '../components/Reveal'

export default function AboutPage() {
  return (
    <div>
      <PageHeader title="Hakkımızda" subtitle={siteInfo.centerName} />

      <section className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-gray-700 leading-relaxed text-base">{siteInfo.about}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <Reveal className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="font-semibold text-[#b0264f] mb-2">Vizyonumuz</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{siteInfo.vision}</p>
          </Reveal>
          <Reveal delay={100} className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="font-semibold text-[#b0264f] mb-2">Misyonumuz</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{siteInfo.mission}</p>
          </Reveal>
        </div>

        <h2 className="text-xl font-semibold text-[#26232a] mt-12 mb-4">Aile Hekimlerimiz ve Aile Sağlığı Elemanlarımız</h2>
        <Reveal className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-500">
              <tr>
                <th className="px-4 py-3 font-medium">Kod</th>
                <th className="px-4 py-3 font-medium">Aile Hekimi</th>
                <th className="px-4 py-3 font-medium">Aile Sağlığı Elemanı</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doc) => (
                <tr key={doc.id} className="border-t border-gray-100">
                  <td className="px-4 py-3 text-gray-500">{doc.code}</td>
                  <td className="px-4 py-3 font-medium text-[#26232a]">{doc.name}</td>
                  <td className="px-4 py-3 text-gray-600">{doc.ase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <h2 className="text-xl font-semibold text-[#26232a] mt-12 mb-4">Yardımcı Personel</h2>
        <Reveal className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-500">
              <tr>
                <th className="px-4 py-3 font-medium">Görev</th>
                <th className="px-4 py-3 font-medium">Ad Soyad</th>
              </tr>
            </thead>
            <tbody>
              {supportStaff.map((s) => (
                <tr key={s.name} className="border-t border-gray-100">
                  <td className="px-4 py-3 text-gray-500">{s.role}</td>
                  <td className="px-4 py-3 font-medium text-[#26232a]">{s.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </section>
    </div>
  )
}
