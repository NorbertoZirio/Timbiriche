import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import '/Copilot_20250812_070631.png'
import '/Copilot_20250812_071226.png'
import '/photo_4960732178463960545_y.jpg'

export default function EmblaSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnInteraction: false })
  ])

  return (
    <div className="embla_slider" ref={emblaRef}>
      <div className="slide__container">
        <div
          style={{
            backgroundImage: 'url(/Copilot_20250812_071226.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}
          className="slide"
        >
          <h1 style={{ alignSelf: 'center', fontSize: '500%' }}>
            Your Beauty, Your Power
          </h1>
        </div>
        <div
          style={{
            backgroundImage: 'url(/Copilot_20250812_070631.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className="slide"
        >
          <h1 style={{ alignSelf: 'center', fontSize: '500%', color: 'white' }}>
            🎉Great discount!!!🎉
          </h1>
          <h3 style={{ alignSelf: 'center', fontSize: '200%', color: 'white' }}>
            🎈🎊Celebrating July 11th🎊🎈
          </h3>
          <button
            style={{
              backgroundColor: 'transparent',
              borderColor: 'white',
              borderStyle: 'solid',
              borderRadius: '10px',
              height: '60px',
              width: '180px',
              fontSize: '150%',
              color: 'white',
              fontWeight: 'bolder'
            }}
          >
            Shoping now
          </button>
        </div>
        <div
          style={{
            backgroundImage: 'url(/photo_4960732178463960545_y.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}
          className="slide"
        >
          <h1
            style={{
              alignSelf: 'center',
              fontSize: '500%',
              color: 'rgb(216, 42, 144)'
            }}
          >
            Sweet flawor coming soon...
          </h1>
        </div>
      </div>
    </div>
  )
}
