# Şehit J. Er Erdoğan Öztürk Aile Sağlığı Merkezi — Web Sitesi

Vite + React + TypeScript + Tailwind CSS ile hazırlanmış kurumsal tanıtım sitesi.

## Çalıştırma

```bash
npm install
npm run dev
```

Prod derleme:

```bash
npm run build
npm run preview
```

## İçerik güncelleme

Tüm site içeriği `src/data/` altındaki dosyalarda tutulur, kod ile içerik ayrıdır:

- `siteInfo.ts` — merkez adı, adres, telefon, hakkımızda/vizyon/misyon metinleri
- `doctors.ts` — 7 hekim, ASE'leri, haftalık çalışma saatleri, gezici hizmet günü
- `mobileServiceRoutes.ts` — hekim bazlı gezici/yerinde hizmet güzergahları (köy/mahalle, saat, hafta düzeni)
- `serviceStandards.ts` — hizmet standartları tablosu
- `services.ts` — hizmetlerimiz sayfasındaki kategori kartları (görselleri `src/assets/services/`)
- `staff.ts` — yardımcı personel listesi
- `gallery.ts` — galeri fotoğrafları (`src/assets/gallery/`)
- `healthCalculators.ts` — Sağlık Hesaplamaları sayfasındaki aktivite/kalori listesi ve aşı takvimi verisi (`src/components/calculators/`)
- `nav.ts` — üst menü yapısı

Yeni bir sayfa/bölüm eklemek için: `src/pages/` altına sayfa bileşeni ekleyin, `src/App.tsx` içine route tanımlayın ve `src/data/nav.ts` içine menü öğesi ekleyin.

## Bilinen eksik / takip edilmesi gereken

- **Hizmet Standartları** sayfasında "İlk Müracaat Yeri" / "İkinci Müracaat Yeri" bilgileri, kaynak Excel dosyasındaki isimler güncel olmadığı için **placeholder** bırakıldı. Gerçek bilgi teyit edildiğinde `src/pages/ServiceStandardsPage.tsx` içindeki placeholder kutuları doldurulmalı.
- **Duyurular** bölümü ilk sürüme dahil edilmedi; menü yapısı (`src/data/nav.ts`) bu bölümün eklenmesine uygun.
- **Sağlık Hesaplamaları** sayfasındaki aşı takvimi, T.C. Sağlık Bakanlığı Genişletilmiş Bağışıklama Programı'nın standart yaş noktalarına göre hesaplanan bir tahmindir; kesinlik gerektiren durumlarda aile hekimine yönlendirme notu eklendi.
