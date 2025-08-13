
export async function ShopData() {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      mode: 'cors'
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const products = await response.json()
    return products
  } catch (error) {
    console.error('Error fetching shop data:', error)
    throw error
  }
}