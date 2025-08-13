import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Card({ url, name = 'Item', price, description }) {
  let shortName = ''
  if (name.length > 12) {
    shortName = name.slice(0, 12) + '...'
  }
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  function handleMouseEnter() {
    setIsHovered(true)
  }
  function handleMouseLeave() {
    setIsHovered(false)
  }
  function handleClick() {
    navigate('/item', { state: { url, name, price, description } })
  }

  return (
    <div
      className="embla__slide"
      style={{
        color: 'white',
        backgroundColor: '#E37C20',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        style={{
          width: '90%',
          height: '60%',
          border: 'solid black 2px',
          borderRadius: '10px',
          backgroundColor: 'rgb(223, 216, 216)',
          margin: '0%',
          marginTop: '5px'
        }}
        src={url}
        alt=""
        onClick={handleClick}
      />
      <h3
        style={{
          margin: '0%',
          fontSize: '100%',
          marginLeft: '2%',
          marginRight: '2%',
          textWrap: 'nowrap'
        }}
      >
        {shortName}
      </h3>
      <div
        style={{
          display: 'flex',
          margin: '5px',
          height: '20%',
          alignItems: 'center'
        }}
      >
        <button
          style={{
            backgroundColor: '#2E2E2E',
            border: 'solid 2px white',
            height: '80%',
            width: '50%',
            color: 'white',
            borderRadius: '5px'
          }}
        >
          Buy
        </button>
        <p
          style={{
            marginTop: '0',
            marginBottom: '0',
            marginLeft: 'auto'
          }}
        >
          {price}$
        </p>
      </div>
    </div>
  )
}
