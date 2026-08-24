import { useState } from 'react'

function classify(bmi: number) {
  if (bmi < 18.5) {
    return {
      label: 'Zayıf',
      desc: 'Boyunuza göre uygun ağırlıkta olmadığınızı, zayıf olduğunuzu gösterir. Yeterli ve dengeli beslenmeye özen gösteriniz.',
    }
  }
  if (bmi < 25) {
    return {
      label: 'Normal',
      desc: 'Boyunuza göre uygun ağırlıktasınız. Yeterli ve dengeli beslenerek ve düzenli fiziksel aktivite yaparak bu ağırlığınızı korumaya özen gösteriniz.',
    }
  }
  if (bmi < 30) {
    return {
      label: 'Fazla Kilolu',
      desc: 'Boyunuza göre vücut ağırlığınız fazladır. Gerekli önlemler alınmadığı takdirde obeziteye yol açabilir.',
    }
  }
  if (bmi < 35) {
    return { label: 'Obez - I. Sınıf', desc: 'Lütfen bir sağlık kuruluşuna başvurarak hekim/diyetisyen kontrolünde takip ediniz.' }
  }
  if (bmi < 40) {
    return { label: 'Obez - II. Sınıf', desc: 'Lütfen bir sağlık kuruluşuna başvurarak hekim/diyetisyen kontrolünde takip ediniz.' }
  }
  return { label: 'Aşırı Obez - III. Sınıf', desc: 'Lütfen bir sağlık kuruluşuna başvurarak hekim/diyetisyen kontrolünde takip ediniz.' }
}

export default function AdultBmiCalculator() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState<{ bmi: number; label: string; desc: string } | null>(null)

  const handleCalculate = () => {
    const kg = parseFloat(weight)
    const cm = parseFloat(height)
    if (!kg || !cm) return
    const m = cm / 100
    const bmi = kg / (m * m)
    setResult({ bmi: Math.round(bmi * 100) / 100, ...classify(bmi) })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Boy Uzunluğu (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Örnek: 170"
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
        {result ? (
          <>
            <div className="text-3xl font-bold text-[#b0264f]">{result.bmi}</div>
            <div className="font-semibold text-[#26232a] mt-1">{result.label}</div>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">{result.desc}</p>
          </>
        ) : (
          <p className="text-sm text-gray-400 italic">Sonucu görmek için bilgilerinizi girip "Hesapla" butonuna basınız.</p>
        )}
      </div>
    </div>
  )
}
