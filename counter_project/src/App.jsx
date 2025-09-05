import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [Counter,setcounter] =  useState(0);
const AddValue=()=>{
setcounter(Counter+1);
}

const  RemoveValue=()=>{
setcounter(Counter-1)
}
  return (
    <>
     <h1>Mnz or React</h1>
     <h3> Counter Value:{Counter}</h3>
     <button onClick={AddValue}>Add Value</button>
     <button onClick={RemoveValue}>Remove Value</button>
    </>
  )
}

export default App
