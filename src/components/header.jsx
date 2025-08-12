import { Link } from 'react-router-dom'

export default function BuildHeader() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100px',
        minHeight: '50px',
        boxSizing: 'border-box',
        padding: '10px',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '5px solid #E37C20',
        borderLeft: '5px solid #E37C20',
        borderRight: '5px solid #E37C20',
        boxShadow: '0px 4px 5px #E37C20',
        backgroundImage: 'url("/public/Copilot_20250807_072503.png")',
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 300%',
        backgroundPosition: 'top center',
        overflow: 'hidden',
        filter: 'contrast(120%)',
        zIndex: '10'
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          style={{
            height: '70%',
            aspectRatio: '1/1',
            objectFit: 'contain'
          }}
          src="/public/Copilot_20250806_125910-Photoroom.png"
          alt="image"
        />
        <h1>Timbiriche</h1>
      </div>

      <nav
        style={{
          //position: "absolute",
          width: '15%',
          height: '50%',
          margin: '0%',
          padding: '0%',
          //left: "50%",
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
            margin: '0%',
            padding: '0%',
            listStyle: 'none',
            height: '100%'
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
        </ul>
      </nav>

      <svg
        className="shopingCart"
        style={{
          height: '50%',
          aspectRatio: '1/1'
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>cart-outline</title>
        <path
          d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 
          17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58
          16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1
          5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1
          7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z"
        />
      </svg>
    </div>
  )
}
