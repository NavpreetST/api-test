import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Axios from "axios"
function App() {

  useEffect(() =>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      setCatFact(res.data.fact)
    })

  },[])
  const [catFact, setCatFact] = useState("")
  return (
    <div className="App">
      <button onClick={console.log("Hi")}>Generate Cat Fact</button>
      <h1>{catFact}</h1>
    </div>
  );
}

export default App;


// fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{
//     console.log(data)
//   })