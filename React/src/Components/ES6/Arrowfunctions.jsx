import { React } from 'react'

// Format: const Remy = () => {};


const Arrowfunctions = () => {

    function NormalFunction () {
        return (
            <h1>Hello, Im from Normal function</h1>
        )
    }


    const ES6Function = () => {
        return(
            <h1>Hello, Im from ES6 function</h1>
        )
    }

    return(
        ES6Function()
    )
};


export default Arrowfunctions;

