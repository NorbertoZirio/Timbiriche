import './styles/App.css'
import BuildHeader from "./components/header";
import Carrusel from "./components/carrusel";

function App() {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <BuildHeader></BuildHeader>
      <Carrusel></Carrusel>
    </div>
  );
}

export default App
