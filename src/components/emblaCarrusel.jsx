import useEmblaCarousel from 'embla-carousel-react'
import Card from './card'
import AutoScroll from 'embla-carousel-auto-scroll'

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [
      AutoScroll({
        stopOnInteraction: false,
        startDelay: 500,
        stopOnMouseEnter: true
      })
    ]
  )

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {Array.from({ length: 20 }, (_, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  )
}
