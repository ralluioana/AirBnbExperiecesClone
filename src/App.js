import "./App.css";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Cards } from "./components/Cards";
import { useState } from "react";
import { data } from "./images/data.js";

function App() {
  const [cards, setCards] = useState(data);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      {cards.length > 0 ? <Cards cards={cards} /> : "No cards to show"}
    </div>
  );
}

export default App;
