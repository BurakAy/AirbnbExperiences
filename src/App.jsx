import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        label="sold out"
        img="katie_z.png"
        rating={parseFloat(5.0).toFixed(1)}
        count={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
      />
    </div>
  );
}

export default App;
