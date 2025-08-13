import useEmblaCarousel from 'embla-carousel-react'
import Card from './card'
import AutoScroll from 'embla-carousel-auto-scroll'
import { ShopData } from './shopData'
import { useEffect, useState } from 'react'

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      stopOnInteraction: false,
      startDelay: 500,
      stopOnMouseEnter: true,
      speed: 0.5
    })
  ])
  const [url, setUrl] = useState([''])
  const [price, setPrice] = useState([''])
  const [name, setName] = useState([''])

  useEffect(() => {
    async function getData() {
      try {
        let data = await ShopData()
        const itemUrl = data.map((item) => item.image)
        const itemName = data.map((item) => item.title)
        const itemPrice = data.map((item) => item.price)
        setUrl(itemUrl)
        setName(itemName)
        setPrice(itemPrice)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
    console.log(url)
  }, [])
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {Array.from({ length: 20 }, (_, i) => (
          <Card key={i} url={url[i]} name={name[i]} price={price[i]} />
        ))}
      </div>
    </div>
  )
}
