import React, { useEffect } from 'react';


// Syntax: useEffect(() => {}, []);


function UseEffectHook() {

    const a = 5;

  useEffect(() => {
    console.log(a); 
  }, []);

  return (
    <div>
      <h1>Hello from useEffect!</h1>
    </div>
  );
}

export default UseEffectHook;
