export interface ServiceStandardItem {
  no: number
  service: string
  requiredDocuments: string
  completionTime: string
}

export const serviceStandards: ServiceStandardItem[] = [
  { no: 1, service: 'Hekim Seçme (İlk Kayıt)', requiredDocuments: 'T.C. Kimlik Numarası, T.C. Kimlik Belgesi', completionTime: '20 dk' },
  { no: 2, service: 'Hekim Seçme (Hekim Değiştirme)', requiredDocuments: 'T.C. Kimlik Numarası, Seçilen Hekimin Adı Soyadı, Dilekçe', completionTime: '5 gün' },
  { no: 3, service: 'Poliklinik Muayene', requiredDocuments: 'T.C. Kimlik Numarası, T.C. Kimlik Belgesi', completionTime: '20 dk' },
  { no: 4, service: 'Misafir Hasta Muayenesi', requiredDocuments: 'T.C. Kimlik Numarası', completionTime: '20 dk' },
  { no: 5, service: 'Sağlık Kurumuna Sevk', requiredDocuments: 'T.C. Kimlik Numarası, T.C. Kimlik Belgesi', completionTime: '20 dk' },
  { no: 6, service: 'Küçük Cerrahi Müdahale', requiredDocuments: 'T.C. Kimlik Numarası, T.C. Kimlik Belgesi', completionTime: '30 dk' },
  { no: 7, service: 'Tek Hekim Raporu', requiredDocuments: 'T.C. Kimlik Numarası, dilekçe, 2 adet fotoğraf', completionTime: '20 dk' },
  { no: 8, service: 'Basit Laboratuvar Tetkikleri', requiredDocuments: 'T.C. Kimlik Numarası, T.C. Kimlik Belgesi', completionTime: '5 saat' },
  { no: 9, service: 'Detaylı Laboratuvar Tetkikleri', requiredDocuments: 'T.C. Kimlik Numarası, T.C. Kimlik Belgesi', completionTime: '5 saat' },
  { no: 10, service: 'Adli İşlemler (Defin Ruhsatı vb.)', requiredDocuments: 'T.C. Kimlik Numarası, T.C. Kimlik Belgesi (Defin Ruhsatı verilecek kişinin yakını)', completionTime: '1 saat' },
  { no: 11, service: 'İzlemler (Bebek, Çocuk, Kadın)', requiredDocuments: 'T.C. Kimlik Numarası, T.C. Kimlik Belgesi', completionTime: '20 dk' },
  { no: 12, service: 'Ev Ziyareti', requiredDocuments: 'T.C. Kimlik Numarası, T.C. Kimlik Belgesi', completionTime: 'Yılda 1 defa' },
  { no: 13, service: 'Bağışıklama Faaliyetleri', requiredDocuments: 'T.C. Kimlik Numarası, T.C. Kimlik Belgesi', completionTime: '20 dk' },
  { no: 14, service: 'Gezici ve Yerinde Bakım Hizmeti', requiredDocuments: 'T.C. Kimlik Numarası, T.C. Kimlik Belgesi', completionTime: 'Haftada 1 gün' },
  { no: 15, service: 'Aile Planlaması Hizmetleri', requiredDocuments: 'T.C. Kimlik Numarası, T.C. Kimlik Belgesi', completionTime: '40 dk' },
  { no: 16, service: 'Evde Bakım Hizmetleri', requiredDocuments: 'T.C. Kimlik Numarası, T.C. Kimlik Belgesi', completionTime: 'Ayda 1 gün' },
  { no: 17, service: 'Eğitimler (Örn. Halk Sağlığı Eğitimleri)', requiredDocuments: '', completionTime: '' },
  { no: 18, service: 'Sürekli İlaç Kullanım Raporu (AH Uzmanı)', requiredDocuments: 'T.C. Kimlik Numarası, tetkikler vs.', completionTime: '' },
]

export const serviceStandardsNote =
  'Başvuru esnasında yukarıda belirtilen belgelerin dışında belge istenmesi, eksiksiz belge ile başvuru yapılmasına rağmen hizmetin belirtilen sürede tamamlanamaması veya yukarıdaki tabloda bazı hizmetlerin bulunmadığının tespiti durumunda ilk müracaat yerine ya da ikinci müracaat yerine başvurunuz.'

export interface ApplicationContact {
  title: string
  name: string
  role: string
  address: string
  phone: string
  fax?: string
  email?: string
}

export const firstApplicationContact: ApplicationContact = {
  title: 'İlk Müracaat Yeri',
  name: 'Dr. Ruveyda Yurtseven',
  role: '60.06.019 Nolu Aile Hekimi',
  address: 'Niksar Merkez Şehit J. Er Erdoğan Öztürk ASM.',
  phone: '0356 527 28 23',
}

export const secondApplicationContact: ApplicationContact = {
  title: 'İkinci Müracaat Yeri',
  name: 'Dr. Ali Aksu',
  role: 'İlçe Sağlık Müdür V.',
  address: 'Gazi Osman Paşa, Mehmet Akif Ersoy Cd. No:122, 60630 Niksar/Tokat',
  phone: '0356 528 06 55',
  fax: '0356 528 16 62',
  email: 'niksartsm@hotmail.com',
}
