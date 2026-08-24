import PageHeader from '../components/PageHeader'
import { galleryPhotos } from '../data/gallery'
import Reveal from '../components/Reveal'

export default function GalleryPage() {
  return (
    <div>
      <PageHeader title="Fotoğraf Galerisi" subtitle="Merkezimizden kareler" />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPhotos.map((photo, idx) => (
            <Reveal key={photo.src} delay={(idx % 3) * 90}>
              <figure className="rounded-xl overflow-hidden border border-gray-200 bg-white">
                <img src={photo.src} alt={photo.caption} className="w-full h-56 object-cover" />
                <figcaption className="p-4 text-sm text-gray-600">{photo.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
