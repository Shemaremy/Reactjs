import { React, useState } from 'react'

function UseStateHook() {

  const [count, setCount] = useState(0, 10)

  function Increment() {
    setCount(count + 1)
  }

  function Decrement() {
    setCount(count - 1)
  }
    
  return (
    <div>
      <button onClick={Decrement}>Decrement</button>
      <h3>{count}</h3>
      <button onClick={Increment}>Increment</button>
    </div>
  );
}

export default UseStateHook;
