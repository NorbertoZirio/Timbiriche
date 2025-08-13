

export default function Footer() {
    return (
      <footer
        style={{
          marginTop: 'auto',
          backgroundColor: '#E37C20',
          height: '70px'
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '40%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            style={{
              height: '100%',
              aspectRatio: '1/1',
              objectFit: 'contain'
            }}
            src="/Copilot_20250806_125910-Photoroom.png"
            alt="image"
          />
          <h1
            style={{
              fontSize: '100%',
              color: 'white'
            }}
          >
            Timbiriche
          </h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3
            style={{
              margin: '0%',
              padding: '0%',
              fontSize: '80%'
            }}
          >
            Contactame:
          </h3>
        </div>
        <p
          style={{
            fontSize: '60%'
          }}
        >
          © 2025 NZRCompany. Todos los derechos reservados.
        </p>
      </footer>
    )
}