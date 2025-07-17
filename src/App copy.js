import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [catFact, setCatFact] = useState()
  const factHandler = () =>{
    const catF = fetch("https://catfact.ninja/fact").then((res)=>res.json())
  setCatFact(catF)
  }
  return (
    <div className="App">
      <button onClick={factHandler}>Generate Cat Fact</button>
      <h1>{catFact}</h1>
    </div>
  );
}

export default App;
