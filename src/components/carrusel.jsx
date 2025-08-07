import Card from "./card"

export default function Carrusel() {
    

    return <div style={{
        display: "flex",
        height: "25%",
        backgroundColor: "GrayText",
        boxSizing: "border-box",
        zIndex: "-10",
        alignItems: "center"
    }}>
        <Card></Card>
    </div>
}