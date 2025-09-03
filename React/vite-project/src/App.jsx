import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BlueSquare } from '../components/BlueSquare/BlueSquare'
import { PinkSquare } from '../components/PinkSquare/PinkSquare'
import { PurpleSquare } from '../components/PurpleSquare/PurpleSquare'
import { Square } from '../components/Square'


function App() {
  const [texto, setTexto] = useState("")
  const [visibility, setVisibility] = useState(true)
  const [color, setColor] = useState("rebeccapurple")
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)

    useEffect(() => {
      console.log("Conteúdo restaurado!")
    }, [num])

  return (
    <>
    { visibility &&
      <div>
        <BlueSquare/>
        <PinkSquare/>
        <PurpleSquare/>
        <Square/>
      </div>
    }
      <input type="text" onChange={(e) => setTexto(e.target.value)} />
      <h1>{texto}</h1>
      <button onClick={() => {setVisibility(visibility == true ? false : true)}}>Alterar visibilidade</button>
      
      <div style={{backgroundColor: color}}>
        <h1>Mude a cor deste texto</h1>
      </div>

      <button onClick={() => {setColor(color == "rebeccapurple" ? "blue" : "rebeccapurple")}}>Alterar cor</button>

      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count => count += 1)}>Clique aqui!</button>

      {/* ========================================================================================================= */}

      <button onClick = {() => setNum(num => num + 1)}>Incrementar número</button>
      <h1>{num}</h1>
    </>
  )
}

export default App
