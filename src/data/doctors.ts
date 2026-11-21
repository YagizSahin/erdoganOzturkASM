export interface WeeklySlot {
  day: string
  morning: string
  afternoon: string
  mobileService?: boolean
}

export interface Doctor {
  id: string
  code: string
  name: string
  title: string
  ase: string
  mobileServiceDay: string | null
  weeklySchedule: WeeklySlot[]
}

const standardWeek = (mobileDay?: string): WeeklySlot[] =>
  ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'].map((day) => ({
    day,
    morning: '08:00 - 12:00',
    afternoon: '13:00 - 17:00',
    mobileService: day === mobileDay,
  }))

export const doctors: Doctor[] = [
  {
    id: 'ozgur-bayrak',
    code: '60.06.002',
    name: 'Dr. Özgür Bayrak',
    title: 'Aile Hekimi',
    ase: 'Azize Özyurt',
    mobileServiceDay: 'Perşembe',
    weeklySchedule: standardWeek('Perşembe'),
  },
  {
    id: 'murat-ertugral',
    code: '60.06.003',
    name: 'Dr. Murat Ertuğral',
    title: 'Aile Hekimi',
    ase: 'Çiğdem Başsoy Akbaş',
    mobileServiceDay: 'Salı',
    weeklySchedule: standardWeek('Salı'),
  },
  {
    id: 'seniz-konakci',
    code: '60.06.004',
    name: 'Dr. Şeniz Konakçı',
    title: 'Aile Hekimi',
    ase: 'Rukiye Baştürk',
    mobileServiceDay: 'Perşembe',
    weeklySchedule: standardWeek('Perşembe'),
  },
  {
    id: 'ahmet-kurtay',
    code: '60.06.009',
    name: 'Dr. Ahmet Kurtay',
    title: 'Aile Hekimi',
    ase: 'Nazife Yaylacı',
    mobileServiceDay: 'Çarşamba',
    weeklySchedule: standardWeek('Çarşamba'),
  },
  {
    id: 'emre-ozyurek',
    code: '60.06.010',
    name: 'Dr. Emre Özyürek',
    title: 'Aile Hekimi',
    ase: 'Türkan Şahin',
    mobileServiceDay: 'Çarşamba',
    weeklySchedule: standardWeek('Çarşamba'),
  },
  {
    id: 'kursad-altin',
    code: '60.06.017',
    name: 'Dr. Kürşad Altın',
    title: 'Aile Hekimi',
    ase: 'Aysun Atasoy',
    mobileServiceDay: null,
    weeklySchedule: standardWeek(),
  },
  {
    id: 'ruveyda-yurtseven',
    code: '60.06.019',
    name: 'Dr. Ruveyda Yurtseven',
    title: 'Aile Hekimi',
    ase: 'Merve Yılmaz',
    mobileServiceDay: null,
    weeklySchedule: standardWeek(),
  },
]
