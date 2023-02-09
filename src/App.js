
import './App.css';
import { useState } from 'react';
import { Compteur } from './components/compteur/compteur';
function App() {
  let [number, setNumber] = useState(0)
  const Incrementer = () =>{
    number = number+1;
    setNumber(number)
  }
  const decrementer = () =>{
    number = number-1;
    setNumber(number)
  }
  const Reset = () =>{
    number = 0;
    setNumber(number)
  }
  return (
    <div className="App">
      <p>compteur:{number}</p>
      <div className='flex justify-around'>
      <Compteur _Onclick={Incrementer} _Click={"incrémenter"} />
      <Compteur _Onclick={decrementer} _Click={"décrémenter"}/>
      <Compteur _Onclick={Reset} _Click={"Reset"}/>
      </div>
    </div>
  );
}

export default App;
