import PageHeader from '../components/PageHeader'
import { siteInfo } from '../data/siteInfo'
import Reveal from '../components/Reveal'

export default function ContactPage() {
  const mapQuery = encodeURIComponent(siteInfo.address)

  return (
    <div>
      <PageHeader title="İletişim" subtitle={siteInfo.centerName} />

      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <Reveal className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="font-semibold text-[#26232a] mb-4">İletişim Bilgilerimiz</h2>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-gray-400">Adres</dt>
                <dd className="text-[#26232a] font-medium">{siteInfo.address}</dd>
              </div>
              <div>
                <dt className="text-gray-400">Telefon</dt>
                <dd className="text-[#26232a] font-medium space-x-3">
                  {siteInfo.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-[#b0264f]">
                      {phone}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-gray-400">Bağlı Olduğu Birim</dt>
                <dd className="text-[#26232a] font-medium">{siteInfo.affiliatedUnit}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={100} className="rounded-xl border border-[#f0c9d6] bg-[#f8e6ec] p-6">
            <h2 className="font-semibold text-[#8a1d3d] mb-3">Bugünkü Nöbetçi Eczane (Niksar)</h2>
            <a href="https://www.eczaneler.gen.tr/nobetci-tokat-niksar" target="_blank" rel="noreferrer" className="block">
              <img
                src="https://www.eczaneler.gen.tr/resimler/nobetci-eczane.jpg"
                alt="Niksar nöbetçi eczaneleri"
                className="w-full max-w-[400px] mx-auto rounded-sm"
              />
            </a>
            <iframe
              src="https://www.eczaneler.gen.tr/iframe.php?lokasyon=1545"
              title="Niksar nöbetçi eczaneleri"
              className="w-full max-w-[400px] mx-auto block h-[240px] border-0 mt-2"
              loading="lazy"
            />
            <a
              href="https://www.eczaneler.gen.tr/nobetci-tokat-niksar"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-sm font-medium text-[#b0264f] hover:underline"
            >
              Tüm nöbetçi eczaneleri görüntüle →
            </a>
          </Reveal>

          <Reveal delay={200} className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="font-semibold text-[#26232a] mb-4">Çalışma Saatlerimiz</h2>
            <dl className="text-sm space-y-2">
              {siteInfo.workingHours.days.map((day) => (
                <div key={day} className="flex items-center justify-between">
                  <dt className="text-gray-500">{day}</dt>
                  <dd className="text-[#26232a] font-medium">{siteInfo.workingHours.weekday}</dd>
                </div>
              ))}
              {siteInfo.workingHours.closedDays.map((day) => (
                <div key={day} className="flex items-center justify-between">
                  <dt className="text-gray-400">{day}</dt>
                  <dd className="text-gray-400">Kapalı</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={150} className="rounded-xl overflow-hidden border border-gray-200 bg-white min-h-[320px]">
          <iframe
            title="Merkez Konumu"
            src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
            className="w-full h-full min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </div>
  )
}
