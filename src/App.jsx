import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import katieimage from "./assets/katie_z.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        label="sold out"
        img={katieimage}
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
