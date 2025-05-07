import { React } from 'react'

// onClick={functionName}
// onClick={() => functionName()}

const ClickEvent = () => {


  const ButtonClick = () => {
    alert("This is a basic click")
  }

  const conditionClick = (text) => {
    alert(`You clicked: ${text}`)
  }
    
  return (
    <div>
      <p>Basic Click</p> 
      <button onClick={ButtonClick}>Click me</button>
      
      <p>Advanced click</p> 
      <button onClick={() => conditionClick('Hello')}>Hello</button>
      <button onClick={() => conditionClick('Good morning')}>Good morning</button>
    </div>
  );
}

export default ClickEvent;
