import { useState } from 'react'
import Counter from './Counter';
import Team from './Team';




function App() {

  function handleClick(){
    alert('Button Clicked');
  }

  const handleClick2 = () => {
    alert('Button-2 Clicked')
  }


  return (
    <>
     <h3>React core concepts2</h3>

      <Counter></Counter>

      <Team/>

     <button onClick={handleClick}>Click Me</button>
     <button onClick={handleClick2}>Click me 2</button> 
    </>
  )
}

export default App
