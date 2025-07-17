import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Axios from "axios"


function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState()



  const apiHandler = (event) =>{
    const api = `https://api.agify.io/?name=${name}`

    Axios.get(api).then((res) =>{
      setAge(res.data.age)
    })
    // Axios.get("https://api.agify.io/?name=")
  }
  
  return (
    <div className="App">
      <input placeholder='ex. Soundwave' onChange={(event) => {setName(event.target.value)}} />
      <button onClick={apiHandler}>Predict Age</button>
      <h1>Name:{name} Predicted Age:{age}</h1>
    </div>
  );
}

export default App;
