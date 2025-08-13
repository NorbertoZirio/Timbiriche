import Card from "./card"


export default function GreedCards() {
    return <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "270px"
    }}>
        <Card></Card>
    </div>
}