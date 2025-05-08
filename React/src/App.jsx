import { React } from 'react'
import './App.css'

import Arrowfunctions from './Components/ES6/Arrowfunctions'
import Arrays from './Components/ES6/Arrays'
import Ternary from './Components/ES6/Ternary'

import Props from './Components/Props/Props'

import ClickEvent from './Components/Events/ClickEvent'
import ChangeEvent from './Components/Events/ChangeEvent'
import SubmitEvent from './Components/Events/SubmitEvent'

import UseStateHook from './Components/Hooks/Usestate'
import UseEffectHook from './Components/Hooks/Useffect'

function App() {

  return (
    <>
      {/* ------ ES6 -----------------------
        <Arrowfunctions />
        <Arrays />
        <Ternary /> 
      */}

      {/* ----- PROPS ----------------------
        <Props name='Remy'/>
        <Props name='Chris' />
        <Props name='Kevin' /> 
      */}

      {/* -------- Events ------------------ 
        <ClickEvent />
        <ChangeEvent />
        <SubmitEvent /> 
      */}

      {/* -------- Hooks ------------------ 
        <UseStateHook />
        <UseEffectHook /> 
      */}
    </>
  )
}

export default App
