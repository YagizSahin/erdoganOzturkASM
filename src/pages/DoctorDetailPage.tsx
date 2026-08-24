import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { doctors } from '../data/doctors'
import { mobileServiceRoutes } from '../data/mobileServiceRoutes'
import Reveal from '../components/Reveal'

export default function DoctorDetailPage() {
  const { doctorId } = useParams()
  const doctor = doctors.find((d) => d.id === doctorId)

  if (!doctor) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h1 className="text-xl font-semibold text-[#26232a] mb-3">Hekim bulunamadı</h1>
        <Link to="/hekimlerimiz" className="text-[#b0264f] font-medium">
          Hekimlerimiz sayfasına dön
        </Link>
      </div>
    )
  }

  const mobileService = mobileServiceRoutes.find((r) => r.doctorCode === doctor.code)

  return (
    <div>
      <PageHeader title={doctor.name} subtitle={`${doctor.code} Nolu Aile Hekimi`} />

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="rounded-xl border border-gray-200 bg-white p-6 mb-8 flex flex-wrap gap-8">
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Aile Sağlığı Elemanı</div>
            <div className="font-medium text-[#26232a]">{doctor.ase}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Hekim Kodu</div>
            <div className="font-medium text-[#26232a]">{doctor.code}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Gezici Hizmet Günü</div>
            <div className="font-medium text-[#26232a]">{doctor.mobileServiceDay ?? 'Belirtilmemiştir'}</div>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-[#26232a] mb-4">Haftalık Çalışma Saatleri</h2>
        <Reveal className="overflow-x-auto rounded-xl border border-gray-200 bg-white mb-10">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-500">
              <tr>
                <th className="px-4 py-3 font-medium">Gün</th>
                <th className="px-4 py-3 font-medium">Sabah</th>
                <th className="px-4 py-3 font-medium">Öğleden Sonra</th>
              </tr>
            </thead>
            <tbody>
              {doctor.weeklySchedule.map((slot) => (
                <tr key={slot.day} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-[#26232a]">{slot.day}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {slot.morning}
                    {slot.mobileService && (
                      <span className="ml-2 inline-block text-xs bg-[#f8e6ec] text-[#b0264f] px-2 py-0.5 rounded">
                        Gezici Hizmet
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {slot.afternoon}
                    {slot.mobileService && (
                      <span className="ml-2 inline-block text-xs bg-[#f8e6ec] text-[#b0264f] px-2 py-0.5 rounded">
                        Gezici Hizmet
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <h2 className="text-lg font-semibold text-[#26232a] mb-4">Gezici / Yerinde Hizmet Güzergahı</h2>
        {mobileService && mobileService.routes.length > 0 ? (
          <div className="space-y-4">
            {mobileService.routes.map((route, routeIdx) => (
              <Reveal key={route.routeNo} delay={routeIdx * 100} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mb-3">
                  <span className="font-medium text-[#b0264f]">{route.day}</span>
                  <span>{route.weekPattern}</span>
                  <span>{route.distanceKm} km</span>
                  <span>Sefer sayısı: {route.tripCount}</span>
                </div>
                <ul className="text-sm divide-y divide-gray-100">
                  {route.stops.map((stop, idx) => (
                    <li key={idx} className="grid grid-cols-3 items-center gap-2 py-2">
                      <span className="font-medium text-[#26232a] text-left">{stop.place}</span>
                      <span className="text-gray-500 text-center">{stop.timeRange}</span>
                      <span className="text-gray-400 text-xs text-right">Mobil nüfus: {stop.population}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400 italic">Bu hekim için gezici hizmet güzergahı belirtilmemiştir.</p>
        )}
      </section>
    </div>
  )
}
