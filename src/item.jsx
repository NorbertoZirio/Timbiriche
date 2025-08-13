import BuildHeader from "./components/header"
import Footer from "./components/foother"
import { useLocation, Navigate } from 'react-router-dom'

export default function ItemInfo() {
  const { state } = useLocation()
  const { url, name, price, description } = state || {}

  return (
    <div
      className="itemInfo"
      style={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <BuildHeader></BuildHeader>
      <div
        style={{
          display: 'flex',
          margin: '10px',
          flex: 'auto'
        }}
      >
        <img
          style={{
            width: '40%',
            height: 'auto',
            alignSelf: 'center',
            margin: '10px'
          }}
          src={url}
          alt="image"
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <h2>{name}</h2>
          <p>{description}</p>
          <div
            style={{
              display: 'flex',
              height: '15%',
              marginTop: '5%'
            }}
          >
            <button
              style={{
                backgroundColor: '#2E2E2E',
                border: 'solid 2px white',
                height: '50%',
                width: '30%',
                color: 'white',
                borderRadius: '5px'
              }}
            >
              Add to cart
            </button>
            <h2
              style={{
                marginTop: '0',
                marginBottom: '0',
                marginLeft: 'auto'
              }}
            >
              {price}$
            </h2>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}