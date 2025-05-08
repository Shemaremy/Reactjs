import { React } from 'react'

// Syntax: condition ? <expression if true> : <expression if false>

const Ternary = () => {
    
    const a = 500;
    const b = 100;


    const NormalCheck = () => {
        if(a > b) {
            return (<h1>a is greater than b</h1>)
        } else if (a < b) {
            return(<h1>b is greater than a</h1>)
        } else {
            return (<h1>b is equal to a</h1>)
        }
    }

    const TernaryCheck = () => {
        return (
            a > b ? <h1>a is greater than b</h1> : a < b ? <h1>b is greater than a</h1> : <h1>a & b are equal</h1>
        )
    }

  return (
    //NormalCheck()
    TernaryCheck()
  );
}

export default Ternary;
