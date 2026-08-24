import PageHeader from '../components/PageHeader'
import {
  serviceStandards,
  serviceStandardsNote,
  firstApplicationContact,
  secondApplicationContact,
  type ApplicationContact,
} from '../data/serviceStandards'
import { siteInfo } from '../data/siteInfo'
import Reveal from '../components/Reveal'

const contactRows: { label: string; key: keyof ApplicationContact }[] = [
  { label: 'Adı ve Soyadı', key: 'name' },
  { label: 'Görev Unvanı', key: 'role' },
  { label: 'Adresi', key: 'address' },
  { label: 'Telefon Numarası', key: 'phone' },
  { label: 'Faks Numarası', key: 'fax' },
  { label: 'E-posta Adresi', key: 'email' },
]

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

        <Reveal delay={100} className="overflow-x-auto rounded-xl border border-gray-200 bg-white mt-8">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="px-4 py-3 font-semibold text-white bg-[#8a1d3d] w-40 text-left"> </th>
                <th className="px-4 py-3 font-semibold text-white bg-[#8a1d3d] text-center">{firstApplicationContact.title}</th>
                <th className="px-4 py-3 font-semibold text-white bg-[#8a1d3d] text-center">{secondApplicationContact.title}</th>
              </tr>
            </thead>
            <tbody>
              {contactRows.map((row) => {
                const first = firstApplicationContact[row.key]
                const second = secondApplicationContact[row.key]
                if (!first && !second) return null
                return (
                  <tr key={row.key} className="border-t border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-500 bg-gray-50">{row.label}</td>
                    <td className="px-4 py-3 text-center text-[#26232a]">{first ?? '—'}</td>
                    <td className="px-4 py-3 text-center text-[#26232a]">{second ?? '—'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Reveal>
      </section>
    </div>
  )
}
