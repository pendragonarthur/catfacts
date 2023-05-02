import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [catFact, setCatFact] = useState("");
  const fetchCatFact = () => {
    fetch(`https://catfact.ninja/fact`)
      .then((response) => response.json())
      .then((data) => {
        setCatFact(data.fact);
      });
  };

  const handleGenerateFact = (e) => {
    e.preventDefault();
    fetchCatFact();
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">Generate your cat fact!</h1>
        <button className="button" onClick={handleGenerateFact}>
          Meow!
        </button>
        <p className="fact">{catFact}</p>
      </div>
    </>
  );
}

export default App;
