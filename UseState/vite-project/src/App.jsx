import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const [texto, setTexto] = useState("")

  return (
    <>
      <div>
      <h1>Atividade 28/08</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          A contagem está em {count}
        </button>
        <br></br>
        <br></br>
        <input type="color" name="Cor nova do texto" id="" />
        <br></br>
        <br></br>
        <input type="text" onChange={(e) => setTexto("Seja bem-vindo(a): " + e.target.value)} />
      <h1>{texto}</h1>
      </div>
      </div>
    </>
  )
}

export default App

