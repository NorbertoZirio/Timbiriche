import useEmblaCarousel from 'embla-carousel-react'
import Card from './card'
import AutoScroll from 'embla-carousel-auto-scroll'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

export default function EmblaCarousel() {
  const { items, loading } = useContext(ShopContext)
  const [emblaRef] = useEmblaCarousel(
    { loop: false, containScroll: 'keepSnaps', align: 'start' },
    [
      AutoScroll({
        stopOnInteraction: false,
        startDelay: 500,
        //stopOnMouseEnter: true,
        stopOnFocusIn: false,
        speed: 2
      })
    ]
  )

  if (loading) {
    return <div>Cargando productos…</div>
  }

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {items.map((item, i) => (
          <Card
            key={item.id || i}
            url={item.image}
            name={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}
