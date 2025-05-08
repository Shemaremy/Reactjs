import React, { useEffect, useState } from 'react';


// Syntax: useEffect(() => {}, []);


function UseEffectHook() {

    const [count, setCount] = useState(0);


  useEffect(() => {
    setCount(count + 1)
  }, [count]);

  return (
    <div>
        <h1>{count}</h1>
    </div>
  );
}

export default UseEffectHook;
