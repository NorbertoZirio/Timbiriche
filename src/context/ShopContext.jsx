import { createContext } from 'react'

export const ShopContext = createContext({
  items: [],
  loading: true,
  error: null
})
