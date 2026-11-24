import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { promoVideos } from '../data/videos'
import { siteInfo } from '../data/siteInfo'

export default function PromoVideoPage() {
  return (
    <div>
      <PageHeader title="Tanıtım Videosu" subtitle={siteInfo.centerName} />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {promoVideos.map((video, idx) => {
            const landscape = video.orientation === 'landscape'
            return (
              <Reveal key={video.src} delay={idx * 100} className={`h-full ${landscape ? 'lg:col-span-2' : ''}`}>
                <figure className="h-full flex flex-col rounded-xl overflow-hidden border border-gray-200 bg-white">
                  {/* On large screens the landscape video sets the row height; the portrait
                      video is absolutely positioned so it fills that height instead of growing it. */}
                  <div
                    className={`bg-black flex justify-center ${
                      landscape ? 'aspect-video' : 'aspect-[9/16] max-h-[75vh] mx-auto w-full lg:aspect-auto lg:max-h-none lg:flex-1 lg:relative'
                    }`}
                  >
                    <video
                      src={`${video.src}#t=0.1`}
                      controls
                      playsInline
                      preload="metadata"
                      className={`w-full h-full object-contain ${landscape ? '' : 'lg:absolute lg:inset-0'}`}
                    >
                      Tarayıcınız video oynatmayı desteklemiyor.
                    </video>
                  </div>
                  <figcaption className="p-4">
                    <h2 className="font-semibold text-[#26232a]">{video.title}</h2>
                  </figcaption>
                </figure>
              </Reveal>
            )
          })}
        </div>
      </section>
    </div>
  )
}
