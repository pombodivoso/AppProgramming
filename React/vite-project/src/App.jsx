import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BlueSquare } from '../components/BlueSquare/BlueSquare'
import { PinkSquare } from '../components/PinkSquare/PinkSquare'
import { PurpleSquare } from '../components/PurpleSquare/PurpleSquare'
import { Square } from '../components/Square'


function App() {
  const [texto, setTexto] = useState("")

  return (
    <>
      <BlueSquare/>
      <PinkSquare/>
      <PurpleSquare/>
      <Square/>
      <input type="text" onChange={(e) => setTexto(e.target.value)} />
      <h1>{texto}</h1>
    </>
  )
}

export default App
