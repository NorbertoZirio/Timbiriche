import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Shop from './Shop.jsx'
import ItemInfo from './item.jsx'

//import { ShopContext } from './context/ShopContext.jsx'
import { ShopProvider } from './context/ShopProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/shop',
    element: <Shop></Shop>
  },
  {
    path: '/item',
    element: <ItemInfo></ItemInfo>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopProvider>
      <RouterProvider router={router} />
    </ShopProvider>
  </StrictMode>
)
