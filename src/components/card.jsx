

export default function Card({ url, name = 'Item', price }) {
  if (name.length > 12) {
    name = name.slice(0, 12) + '...'
  }

  function handleMausEnter() {
    console.log(name)
  }

  return (
    <div
      className="embla__slide"
      style={{
        color: 'white',
        backgroundColor: '#E37C20'
      }}
      onMouseDown={handleMausEnter()}
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
        {name}
      </h3>
      <p>{price}$</p>
    </div>
  )
}
