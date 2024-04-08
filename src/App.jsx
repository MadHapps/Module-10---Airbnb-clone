import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import dataList from "./data"

function App() {

  const cards = dataList.map(data => {
    return <Card
      key={data.id} 
      cardData={data}
    />
  })

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <section className="card-section">
        {cards}
      </section>
    </div>
  );
}

export default App;
