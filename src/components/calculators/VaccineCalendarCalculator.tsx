import { useState } from 'react'
import { vaccineSchedule, vaccineScheduleNote } from '../../data/healthCalculators'

function formatDate(date: Date) {
  return date.toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' })
}

export default function VaccineCalendarCalculator() {
  const [birthDate, setBirthDate] = useState('')
  const [schedule, setSchedule] = useState<{ label: string; date: string; vaccines: string[] }[] | null>(null)

  const handleCalculate = () => {
    if (!birthDate) return
    const base = new Date(birthDate)
    if (Number.isNaN(base.getTime())) return
    const rows = vaccineSchedule.map((dose) => {
      const date = new Date(base)
      date.setDate(date.getDate() + dose.offsetDays)
      return { label: dose.label, date: formatDate(date), vaccines: dose.vaccines }
    })
    setSchedule(rows)
  }

  return (
    <div>
      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bebeğin Doğum Tarihi</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#b0264f]"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="bg-[#b0264f] hover:bg-[#8a1d3d] transition-colors text-white px-5 py-2.5 rounded-md text-sm font-medium"
        >
          Takvimi Oluştur
        </button>
      </div>

      {schedule && (
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white mt-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-500">
              <tr>
                <th className="px-4 py-3 font-medium">Aşı Zamanı</th>
                <th className="px-4 py-3 font-medium">Tahmini Tarih</th>
                <th className="px-4 py-3 font-medium">Aşılar</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.label} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-[#26232a] whitespace-nowrap">{row.label}</td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.date}</td>
                  <td className="px-4 py-3 text-gray-600">{row.vaccines.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="text-xs text-gray-500 mt-4 leading-relaxed">{vaccineScheduleNote}</p>
    </div>
  )
}
