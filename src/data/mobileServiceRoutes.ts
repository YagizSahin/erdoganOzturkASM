export interface MobileServiceStop {
  place: string
  population: number
  timeRange: string
}

export interface MobileServiceRoute {
  routeNo: number
  distanceKm: number
  tripCount: number
  day: string
  weekPattern: string
  stops: MobileServiceStop[]
}

export interface DoctorMobileService {
  doctorCode: string
  totalSettlements: number | null
  routes: MobileServiceRoute[]
}

export const mobileServiceRoutes: DoctorMobileService[] = [
  {
    doctorCode: '60.06.002',
    totalSettlements: 5,
    routes: [
      {
        routeNo: 1,
        distanceKm: 42,
        tripCount: 1,
        day: 'Perşembe',
        weekPattern: '1. Hafta',
        stops: [
          { place: 'Esence', population: 51, timeRange: '08:30 - 09:35' },
          { place: 'Sulugöl', population: 120, timeRange: '09:50 - 12:15' },
          { place: 'Boyluca', population: 53, timeRange: '12:25 - 13:30' },
        ],
      },
      {
        routeNo: 2,
        distanceKm: 36,
        tripCount: 1,
        day: 'Perşembe',
        weekPattern: '3. Hafta',
        stops: [
          { place: 'Işıklı', population: 112, timeRange: '08:30 - 10:45' },
          { place: 'Hanyeri', population: 83, timeRange: '11:00 - 12:40' },
        ],
      },
    ],
  },
  {
    doctorCode: '60.06.003',
    totalSettlements: 3,
    routes: [
      {
        routeNo: 1,
        distanceKm: 37,
        tripCount: 1,
        day: 'Salı',
        weekPattern: '3. Hafta',
        stops: [
          { place: 'Yeşilhisar', population: 88, timeRange: '08:30 - 10:16' },
          { place: 'Direkli', population: 67, timeRange: '10:23 - 11:30' },
          { place: 'Serenli', population: 993, timeRange: '11:40 - 14:30' },
        ],
      },
      {
        routeNo: 2,
        distanceKm: 34,
        tripCount: 4,
        day: 'Salı',
        weekPattern: '1. 2. 4. 5. Hafta',
        stops: [{ place: 'Serenli', population: 993, timeRange: '08:30 - 14:00' }],
      },
    ],
  },
  {
    doctorCode: '60.06.004',
    totalSettlements: 5,
    routes: [
      {
        routeNo: 1,
        distanceKm: 11,
        tripCount: 1,
        day: 'Perşembe',
        weekPattern: '1. Hafta',
        stops: [
          { place: 'Kumçiftlik', population: 193, timeRange: '09:00 - 13:15' },
          { place: 'Haydarbey', population: 263, timeRange: '13:15 - 16:00' },
        ],
      },
      {
        routeNo: 2,
        distanceKm: 17,
        tripCount: 1,
        day: 'Perşembe',
        weekPattern: '2. Hafta',
        stops: [
          { place: 'Haydarbey', population: 263, timeRange: '09:00 - 11:30' },
          { place: 'Şahinli Köyü', population: 213, timeRange: '11:30 - 16:30' },
        ],
      },
      {
        routeNo: 3,
        distanceKm: 33,
        tripCount: 1,
        day: 'Perşembe',
        weekPattern: '4. Hafta',
        stops: [
          { place: 'Yeşilyurt', population: 75, timeRange: '09:00 - 11:00' },
          { place: 'Günlüce', population: 173, timeRange: '11:30 - 15:30' },
        ],
      },
    ],
  },
  {
    doctorCode: '60.06.009',
    totalSettlements: 9,
    routes: [
      {
        routeNo: 1,
        distanceKm: 57,
        tripCount: 1,
        day: 'Çarşamba',
        weekPattern: '1. Hafta',
        stops: [
          { place: 'Çiçekli', population: 238, timeRange: '08:30 - 13:16' },
          { place: 'Mercimekdüzü', population: 22, timeRange: '14:00 - 14:27' },
          { place: 'Örenler', population: 16, timeRange: '14:45 - 15:05' },
          { place: 'Musapınarı', population: 18, timeRange: '15:20 - 15:42' },
        ],
      },
      {
        routeNo: 2,
        distanceKm: 55,
        tripCount: 1,
        day: 'Çarşamba',
        weekPattern: '3. Hafta',
        stops: [
          { place: 'Derindere', population: 39, timeRange: '08:30 - 09:17' },
          { place: 'Umurlu', population: 26, timeRange: '09:30 - 10:02' },
          { place: 'Güzelyayla', population: 108, timeRange: '10:30 - 12:40' },
          { place: 'Tahtalı', population: 24, timeRange: '12:50 - 13:20' },
          { place: 'Yeşilkaya', population: 136, timeRange: '13:40 - 16:24' },
        ],
      },
    ],
  },
  {
    doctorCode: '60.06.010',
    totalSettlements: 2,
    routes: [
      {
        routeNo: 1,
        distanceKm: 53,
        tripCount: 1,
        day: 'Çarşamba',
        weekPattern: '2. Hafta',
        stops: [
          { place: 'Ormancık', population: 266, timeRange: '09:20 - 11:30' },
          { place: 'Kümbetli', population: 226, timeRange: '11:45 - 14:15' },
        ],
      },
      {
        routeNo: 2,
        distanceKm: 24,
        tripCount: 1,
        day: 'Çarşamba',
        weekPattern: '4. Hafta',
        stops: [
          { place: 'Ormancık', population: 266, timeRange: '08:20 - 11:30' },
          { place: 'Kümbetli (güzergah dışı)', population: 226, timeRange: '11:45 - 14:15' },
        ],
      },
    ],
  },
  {
    doctorCode: '60.06.017',
    totalSettlements: null,
    routes: [],
  },
  {
    doctorCode: '60.06.019',
    totalSettlements: null,
    routes: [],
  },
]
