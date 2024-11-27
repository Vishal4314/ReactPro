import "./App.css";

import { useState } from "react";

import AnimalShow from "./AnimalShow";

function addAnimal() {
  const animalsToShow = ["cat", "dog", "cow", "horse", "gator", "bird"];

  return animalsToShow[Math.floor(Math.random() * animalsToShow.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, addAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
