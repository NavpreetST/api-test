import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Axios from "axios"
function App() {

  const factHandler = () =>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      setCatFact(res.data.fact)
    })
  }
  useEffect(() =>{
    factHandler();

  },[])
  const [catFact, setCatFact] = useState("")
  return (
    <div className="App">
      <button onClick={factHandler}>Generate Cat Fact</button>
      <h1>{catFact}</h1>
    </div>
  );
}

export default App;


// fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{
//     console.log(data)
//   })