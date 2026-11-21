import PageHeader from '../components/PageHeader'
import { serviceStandards, serviceStandardsNote } from '../data/serviceStandards'
import { siteInfo } from '../data/siteInfo'
import Reveal from '../components/Reveal'

export default function ServiceStandardsPage() {
  return (
    <div>
      <PageHeader title="Hizmet Standartları" subtitle={`${siteInfo.affiliatedUnit} — ${siteInfo.centerName}`} />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <Reveal className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-500">
              <tr>
                <th className="px-4 py-3 font-medium w-14">Sıra</th>
                <th className="px-4 py-3 font-medium">Hizmetin Adı</th>
                <th className="px-4 py-3 font-medium">Başvuruda İstenen Belgeler</th>
                <th className="px-4 py-3 font-medium">Tamamlanma Süresi (En Geç)</th>
              </tr>
            </thead>
            <tbody>
              {serviceStandards.map((item) => (
                <tr key={item.no} className="border-t border-gray-100 align-top">
                  <td className="px-4 py-3 text-gray-500">{item.no}</td>
                  <td className="px-4 py-3 font-medium text-[#26232a]">{item.service}</td>
                  <td className="px-4 py-3 text-gray-600">{item.requiredDocuments}</td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{item.completionTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <p className="text-xs text-gray-500 mt-4 leading-relaxed">{serviceStandardsNote}</p>
      </section>
    </div>
  )
}
