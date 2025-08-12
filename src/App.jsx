import './styles/App.css'
import BuildHeader from "./components/header";
import EmblaCarousel from './components/emblaCarrusel'
import EmblaSlider from './components/slider'
import Footer from './components/foother'

function App() {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <BuildHeader></BuildHeader>
      <EmblaSlider></EmblaSlider>
      <EmblaCarousel></EmblaCarousel>
      <Footer></Footer>
    </div>
  )
}

export default App
