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

import Images from './Components/Images/Images'

import image1 from './Components/Images/image1.png'
import image2 from './Components/Images/image2.png'
import image3 from './Components/Images/image3.png'

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

      <Images value={image1}/>
      <Images value={image2}/>
      <Images value={image3}/>
    </>
  )
}

export default App
