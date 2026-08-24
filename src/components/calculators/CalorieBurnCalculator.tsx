import { useState } from 'react'
import { activityGroups } from '../../data/healthCalculators'

export default function CalorieBurnCalculator() {
  const [met, setMet] = useState('')
  const [minutes, setMinutes] = useState('')
  const [weight, setWeight] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const handleCalculate = () => {
    const metVal = parseFloat(met)
    const min = parseFloat(minutes)
    const kg = parseFloat(weight)
    if (!metVal || !min || !kg) return
    const calories = (metVal / 60) * kg * min
    setResult(Math.round(calories * 100) / 100)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Aktivite Türü</label>
          <select
            value={met}
            onChange={(e) => setMet(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#b0264f]"
          >
            <option value="">...seçiniz</option>
            {activityGroups.map((group) => (
              <optgroup key={group.group} label={group.group}>
                {group.activities.map((a) => (
                  <option key={a.name} value={a.met}>
                    {a.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Aktivite Süresi (dk)</label>
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            placeholder="Örnek: 30"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#b0264f]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Vücut Ağırlığı (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Örnek: 70"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#b0264f]"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="bg-[#b0264f] hover:bg-[#8a1d3d] transition-colors text-white px-5 py-2.5 rounded-md text-sm font-medium"
        >
          Hesapla
        </button>
      </div>
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 flex flex-col justify-center">
        {result !== null ? (
          <>
            <div className="text-3xl font-bold text-[#b0264f]">{result} Kal</div>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">Bu sürede yaklaşık {result} kalori enerji harcanmıştır.</p>
            <p className="text-xs text-gray-400 mt-3">
              Not: Bu değer ortalama bir tahmindir; bireyin vücut tipi, aktivite şiddeti ve yaşı gibi faktörlere göre değişebilir.
            </p>
          </>
        ) : (
          <p className="text-sm text-gray-400 italic">Sonucu görmek için bilgilerinizi girip "Hesapla" butonuna basınız.</p>
        )}
      </div>
    </div>
  )
}
