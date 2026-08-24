import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import AdultBmiCalculator from '../components/calculators/AdultBmiCalculator'
import WaistCircumferenceCalculator from '../components/calculators/WaistCircumferenceCalculator'
import CalorieBurnCalculator from '../components/calculators/CalorieBurnCalculator'
import VaccineCalendarCalculator from '../components/calculators/VaccineCalendarCalculator'

const tabs = [
  { id: 'bki', label: 'Beden Kitle İndeksi', component: AdultBmiCalculator },
  { id: 'bel', label: 'Bel Çevresi Risk Hesaplama', component: WaistCircumferenceCalculator },
  { id: 'kalori', label: 'Aktiviteye Göre Harcanan Kalori', component: CalorieBurnCalculator },
  { id: 'asi', label: 'Bebeğinizin Aşı Takvimi', component: VaccineCalendarCalculator },
]

export default function HealthCalculatorsPage() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const ActiveComponent = tabs.find((t) => t.id === activeTab)?.component ?? AdultBmiCalculator

  return (
    <div>
      <PageHeader title="Sağlık Hesaplamaları" subtitle="Beden kitle indeksi, bel çevresi, kalori ve aşı takvimi hesaplama araçları" />

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeTab === tab.id
                  ? 'bg-[#b0264f] text-white border-[#b0264f]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#b0264f] hover:text-[#b0264f]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8">
          <ActiveComponent />
        </div>
      </section>
    </div>
  )
}
