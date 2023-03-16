import './App.css';
import style from './App.module.css';
import {useState, useEffect} from 'react';

function useCount(initValue){
  let [count, setCount] = useState(initValue);
  useEffect(()=>{
    init(); 
  },[])
  async function init(){
    const resp = await fetch('http://localhost:9999/counter')
    const result = await resp.json();
    setCount(result.value);
  }
  const up = async ()=>{
    const resp = await fetch('http://localhost:9999/counter', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value: count + 1 }) 
    })
    const result = await resp.json();
    setCount(result.value);
  }
  const down = async ()=>{
    const resp = await fetch('http://localhost:9999/counter', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value: count - 1 }) 
    })
    const result = await resp.json();
    setCount(result.value);
  }
  return [count, up, down];
}

function Counter({title, initValue}) {
  const[count, up, down] = useCount(initValue);
  return <div>
    <h1>{title}</h1>
    <button className="spaceRight" onClick={up}>➕</button> <button onClick={down}>➖</button> 👉👉 {count}  
  </div>
}

function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue={10}></Counter>
    </div>
  );
}

export default App;