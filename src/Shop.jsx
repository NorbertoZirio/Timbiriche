import './styles/Shop.css'
import BuildHeader from "./components/header";
import GreedCards from './components/greed'
import Footer from './components/foother'


export default function Shop() {
    return (
      <div className="shop">
        <BuildHeader></BuildHeader>
        <GreedCards></GreedCards>
        <Footer></Footer>
      </div>
    )
}