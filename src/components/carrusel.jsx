import Card from "./card";

export default function Carrusel() {
  return (
    <div
      style={{
        position: "relative",
        height: "25%",
        backgroundColor: "rgba(169, 170, 170, 0.77)",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow:
          "inset 6px 10px 20px rgba(0, 0, 0, 0.6), inset -6px -10px 20px rgba(0, 0, 0, 0.6)",
      }}
    >
      {/* Flechas fijas */}
      <svg
        className="arrow-lefth"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>skip-previous-circle-outline</title>
        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4C7.59,4 4,7.59 4,12C4,16.41 7.59,20 12,20C16.41,20 20,16.41 20,12C20,7.59 16.41,4 12,4M16,8V16L11,12M10,8V16H8V8" />
      </svg>

      <svg
        className="arrow-rigth"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>skip-next-circle-outline</title>
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4M8,8V16L13,12M14,8V16H16V8" />
      </svg>

      {/* Carrusel scrollable */}
      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          padding: "0 60px", // espacio para que las flechas no tapen las cards
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
}
