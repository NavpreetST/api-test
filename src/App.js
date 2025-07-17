
import './App.css';
import { useEffect, useState } from 'react';
import Axios from "axios"


function App() {
 
  const [reason, setExcuse] = useState(null)


  const fetchExcuse = (category) =>{
    const api = `https://excuser-three.vercel.app/v1/excuse/${category}/`
    Axios.get(api).then((res)=>{
      // console.log(res.data)
      setExcuse(res.data[0])
    })
  }
 

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={() =>fetchExcuse('party')}> Party</button>
      <button onClick={() =>fetchExcuse('family')}> Family</button>
      <button onClick={() =>fetchExcuse('office')}> Office</button>

      <h1>{reason?.excuse} </h1> 
      
      <h1>{reason?.category}</h1>
    </div>
  );
}

export default App;
