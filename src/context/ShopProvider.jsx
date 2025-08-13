import { useState, useEffect } from 'react'
import { ShopContext } from './ShopContext'
import { ShopData } from '../components/shopData'

export function ShopProvider({ children }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchItems() {
      try {
        const data = await ShopData()
        setItems(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchItems()
  }, [])

  return (
    <ShopContext.Provider value={{ items, loading, error }}>
      {children}
    </ShopContext.Provider>
  )
}
