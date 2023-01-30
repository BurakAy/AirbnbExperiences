import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./components/data";

function App() {
  const cards = cardData.map((info) => {
    const card = (
      <Card
        key={info.id}
        img={info.coverImg}
        rating={info.stats.rating}
        count={info.stats.reviewCount}
        country={info.location}
        title={info.title}
        price={info.price}
        label={info.openSpots}
      />
    );
    return card;
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards--wrapper">{cards}</section>
    </div>
  );
}

export default App;
