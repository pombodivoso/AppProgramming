import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
  }

  return (
    <>
      <div class="mainTitle">
        <h1>A lot of clocks and times!!</h1>
      </div>
      <div className="clock">
        <h2 class="title">Time: {formatTime(date)}</h2>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>
          <h4 class="clock">Count: {count}</h4>
      </div>
    </>
  )
}

export default App