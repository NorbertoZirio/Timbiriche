import Card from './card'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'

export default function GreedCards() {
  const { items, loading } = useContext(ShopContext)

  if (loading) {
    return <div>Cargando productos…</div>
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gridAutoRows: '270px',
        justifyContent: 'center',
        backgroundImage: 'url("/Copilot_20250807_072503.png")'
      }}
    >
      {items.map((item, i) => (
        <Card
          key={item.id || i}
          url={item.image}
          name={item.title}
          price={item.price}
        />
      ))}
    </div>
  )
}
