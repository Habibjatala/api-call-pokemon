import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const[num,setNum]= useState();
  const[name,setName]= useState();
   const[move,setMove]= useState();
  useEffect(()=>{
    //alert('hi')
    async function getdata() {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      console.log(data);
      setName(data.data.name);
      setMove(data.data.moves.length);
    }
    getdata();
  })
  
  return (
    <>
      
      <h1>You Choose the number <span style={{color:'red'}}> {num}</span></h1>
      <h1>My name is <span style={{color:'red'}}> {name}</span></h1>

      <h1>I have  <span style={{color:'red'}}> {move} moves</span></h1>
      <select value={num} onChange={(event) =>{
        setNum(event.target.value);


      }}>
        <option value="1">1</option>
        <option value="4">4</option>
        <option value="2">25</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
    </>
  );
}

export default App;
