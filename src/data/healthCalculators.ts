export interface Activity {
  name: string
  met: number
}

export const activityGroups: { group: string; activities: Activity[] }[] = [
  {
    group: 'Günlük Yaşam',
    activities: [
      { name: 'Ayakta durmak', met: 1.2 },
      { name: 'Uyumak', met: 1.2 },
      { name: 'Okumak', met: 1.8 },
      { name: 'Yazı yazmak (elle)', met: 1.8 },
      { name: 'Yazı yazmak (bilgisayarda)', met: 1.4 },
      { name: 'Telefonda konuşmak', met: 0.9 },
      { name: 'Televizyon izlemek', met: 1.3 },
      { name: 'Araba kullanmak', met: 1.9 },
      { name: 'Merdiven inip çıkmak', met: 7.8 },
    ],
  },
  {
    group: 'Ev İşleri',
    activities: [
      { name: 'Bahçe işleri', met: 5.0 },
      { name: 'Gıda alışverişi yapmak', met: 2.4 },
      { name: 'Yemek pişirmek', met: 2.5 },
      { name: 'Bulaşık yıkamak', met: 2.1 },
      { name: 'Temizlik yapmak', met: 3.6 },
      { name: 'Yer silmek (elle)', met: 5.5 },
      { name: 'Cam silmek', met: 3.5 },
      { name: 'Çamaşır yıkamak ve asmak', met: 1.9 },
      { name: 'Ütü yapmak', met: 2.1 },
    ],
  },
  {
    group: 'Egzersiz ve Spor',
    activities: [
      { name: 'Yürüyüş (yavaş)', met: 4.8 },
      { name: 'Yürüyüş (hızlı)', met: 7.0 },
      { name: 'Doğa yürüyüşü', met: 5.9 },
      { name: 'Koşu', met: 7.8 },
      { name: 'Jogging', met: 7.0 },
      { name: 'Yüzme', met: 8.0 },
      { name: 'Bisiklet (orta hızda)', met: 4.0 },
      { name: 'Aerobik (orta şiddette)', met: 5.9 },
      { name: 'Basketbol', met: 5.9 },
      { name: 'Futbol', met: 7.8 },
      { name: 'Voleybol', met: 3.1 },
      { name: 'Tenis', met: 6.9 },
      { name: 'Masa tenisi', met: 4.0 },
      { name: 'Dans etmek', met: 4.5 },
      { name: 'Kayak', met: 6.9 },
    ],
  },
]

export interface VaccineDose {
  label: string
  offsetDays: number
  vaccines: string[]
}

export const vaccineSchedule: VaccineDose[] = [
  { label: 'Doğumda', offsetDays: 0, vaccines: ['Hepatit B (1. doz)'] },
  { label: '1. Ayın Sonu', offsetDays: 30, vaccines: ['Hepatit B (2. doz)'] },
  { label: '2. Ay', offsetDays: 60, vaccines: ['BCG', 'DaBT-İPA-Hib (1. doz)', 'OPA (1. doz)', 'KPA (1. doz)'] },
  { label: '4. Ay', offsetDays: 120, vaccines: ['DaBT-İPA-Hib (2. doz)', 'OPA (2. doz)', 'KPA (2. doz)'] },
  { label: '6. Ay', offsetDays: 180, vaccines: ['DaBT-İPA-Hib (3. doz)', 'Hepatit B (3. doz)', 'OPA (3. doz)'] },
  { label: '12. Ay', offsetDays: 365, vaccines: ['KPA (rapel)', 'KKK (1. doz)'] },
  { label: '18. Ay', offsetDays: 545, vaccines: ['DaBT-İPA-Hib (rapel)', 'OPA (rapel)', 'Hepatit A (1. doz)'] },
  { label: '24. Ay', offsetDays: 730, vaccines: ['Hepatit A (2. doz)'] },
  { label: '6 Yaş (İlkokul 1. Sınıf)', offsetDays: 2190, vaccines: ['DaBT-İPA (rapel)', 'KKK (2. doz)'] },
  { label: '13 Yaş', offsetDays: 4745, vaccines: ['Td (Erişkin Tip Difteri-Tetanoz)'] },
]

export const vaccineScheduleNote =
  'Bu takvim T.C. Sağlık Bakanlığı Genişletilmiş Bağışıklama Programı esas alınarak hesaplanmış, bilgilendirme amaçlı bir tahmindir. Kesin aşı tarihleri için lütfen aile hekiminize danışınız.'
