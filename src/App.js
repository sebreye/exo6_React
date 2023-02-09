
import './App.css';
import { useState } from 'react';
import { Compteur } from './components/compteur/compteur';
import TaskList from './components/tâches/tâches';
import Devises from './components/devise/devises';
function App() {
  // ajout compteur
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
  // ajout liste des tâches

  return (
    <div className="App">
      <div className='flex-col text-center'>
      <p className='text-3xl m-10'>compteur:{number}</p>
      <div className='flex justify-around'>
      <Compteur _Onclick={Incrementer} _Click={"incrémenter"} />
      <Compteur _Onclick={decrementer} _Click={"décrémenter"}/>
      <Compteur _Onclick={Reset} _Click={"Reset"}/>
      </div>
      </div>
      <div className='flex justify-center mt-10'>
        <TaskList/>
      </div>
      <div className='flex justify-center mt-10'>
        
        <Devises/>
      </div>
    </div>
  );
}

export default App;
