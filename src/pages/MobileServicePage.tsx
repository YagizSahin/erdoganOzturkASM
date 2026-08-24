import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { doctors } from '../data/doctors'
import { mobileServiceRoutes } from '../data/mobileServiceRoutes'
import Reveal from '../components/Reveal'

export default function MobileServicePage() {
  return (
    <div>
      <PageHeader
        title="Gezici / Yerinde Sağlık Hizmeti"
        subtitle="Merkezimize bağlı köy ve mahallelere yönelik planlı sağlık hizmeti programı"
      />

      <section className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {doctors.map((doctor, idx) => {
          const mobileService = mobileServiceRoutes.find((r) => r.doctorCode === doctor.code)
          return (
            <Reveal key={doctor.id} delay={Math.min(idx, 3) * 90} className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div>
                  <h2 className="font-semibold text-[#26232a]">{doctor.name}</h2>
                  <p className="text-xs text-gray-500">{doctor.code} Nolu Aile Hekimi</p>
                </div>
                <Link to={`/hekimlerimiz/${doctor.id}`} className="text-sm text-[#b0264f] font-medium hover:underline">
                  Hekim Detayı →
                </Link>
              </div>

              {mobileService && mobileService.routes.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-left text-gray-500">
                      <tr>
                        <th className="px-4 py-2 font-medium">Yerleşim Yeri</th>
                        <th className="px-4 py-2 font-medium">Mobil Nüfus</th>
                        <th className="px-4 py-2 font-medium">Saat Aralığı</th>
                        <th className="px-4 py-2 font-medium">Gün</th>
                        <th className="px-4 py-2 font-medium">Hafta</th>
                        <th className="px-4 py-2 font-medium">Mesafe</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mobileService.routes.map((route) =>
                        route.stops.map((stop, idx) => (
                          <tr key={`${route.routeNo}-${idx}`} className="border-t border-gray-100">
                            <td className="px-4 py-2 font-medium text-[#26232a]">{stop.place}</td>
                            <td className="px-4 py-2 text-gray-600">{stop.population}</td>
                            <td className="px-4 py-2 text-gray-600 whitespace-nowrap">{stop.timeRange}</td>
                            {idx === 0 ? (
                              <>
                                <td className="px-4 py-2 text-gray-600" rowSpan={route.stops.length}>
                                  {route.day}
                                </td>
                                <td className="px-4 py-2 text-gray-600" rowSpan={route.stops.length}>
                                  {route.weekPattern}
                                </td>
                                <td className="px-4 py-2 text-gray-600" rowSpan={route.stops.length}>
                                  {route.distanceKm} km
                                </td>
                              </>
                            ) : null}
                          </tr>
                        )),
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-sm text-gray-400 italic">Bu hekim için gezici hizmet güzergahı belirtilmemiştir.</p>
              )}
            </Reveal>
          )
        })}
      </section>
    </div>
  )
}
