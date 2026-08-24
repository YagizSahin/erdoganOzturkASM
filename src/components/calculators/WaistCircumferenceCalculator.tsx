import { useState } from 'react'

type Gender = 'E' | 'K'

function classify(waist: number, gender: Gender) {
  const threshold = gender === 'E' ? { risk: 94, high: 102 } : { risk: 80, high: 88 }
  const genderLabel = gender === 'E' ? 'Erkeklerin' : 'Kadınların'

  if (waist >= threshold.high) {
    return {
      label: 'Yüksek Risk',
      desc: `${genderLabel} bel çevresinin ${threshold.high} cm'den büyük olması şişmanlığın göstergesidir. Bu sağlığınız için risklidir. Lütfen bir sağlık kuruluşuna başvurunuz.`,
    }
  }
  if (waist >= threshold.risk) {
    return {
      label: 'Artmış Risk',
      desc: `${genderLabel} bel çevresinin ${threshold.risk} cm'den büyük olması risklidir. Yeterli ve dengeli beslenerek, düzenli fiziksel aktivite yaparak uygun ağırlığa ulaşmaya özen gösterin.`,
    }
  }
  return {
    label: 'Normal',
    desc: `${genderLabel} bel çevresinin ${threshold.risk} cm'den küçük olması normaldir. Yeterli ve dengeli beslenerek, düzenli aktivite yaparak formunuzu korumaya özen gösterin.`,
  }
}

export default function WaistCircumferenceCalculator() {
  const [waist, setWaist] = useState('')
  const [gender, setGender] = useState<Gender>('E')
  const [result, setResult] = useState<{ label: string; desc: string } | null>(null)

  const handleCalculate = () => {
    const cm = parseFloat(waist)
    if (!cm) return
    setResult(classify(cm, gender))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bel Çevresi (cm)</label>
          <input
            type="number"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            placeholder="Örnek: 90"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#b0264f]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cinsiyet</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value as Gender)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#b0264f]"
          >
            <option value="E">Erkek</option>
            <option value="K">Kadın</option>
          </select>
        </div>
        <button
          onClick={handleCalculate}
          className="bg-[#b0264f] hover:bg-[#8a1d3d] transition-colors text-white px-5 py-2.5 rounded-md text-sm font-medium"
        >
          Hesapla
        </button>
      </div>
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 flex flex-col justify-center">
        {result ? (
          <>
            <div className="font-semibold text-[#b0264f] text-lg">{result.label}</div>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">{result.desc}</p>
          </>
        ) : (
          <p className="text-sm text-gray-400 italic">Sonucu görmek için bilgilerinizi girip "Hesapla" butonuna basınız.</p>
        )}
      </div>
    </div>
  )
}
