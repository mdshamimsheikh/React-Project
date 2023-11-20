
import { useState } from 'react';
import './App.css';

function App() {

  const [Counter,setCounter]=useState(0);


const addData=()=>{
  if (Counter<20) 
  {
    setCounter(Counter+1);
  }
}

const removeData=()=>{
  if (Counter>0) 
  {
    setCounter(Counter-1);
  }
}

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1 style={{backdropFilter:"ShadowRoot",color:"purple"}}>Counter React Project</h1>
        <label>{Counter}</label>
       <div>
        <button style={{ backgroundColor:'red'}} onClick={addData}>+</button>
       </div>
        <a>
          {Counter}
        </a>
        <button style={{ backgroundColor:'green'}} onClick={removeData}>-</button>
        <div>
      <footer  style={{ color:'black'}}><h1>Counter Range 1 to 20</h1></footer>
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
