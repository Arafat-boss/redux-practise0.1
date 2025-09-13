import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleInrement = () => {
    setCount(count + 1)
  }

  const handelDecriment = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>This is my First Practice for useing redux</h1>
      <h1>Practice Redux</h1>
      <div className="card">
        <button onClick={() => handleInrement()}></button>
        <h1>{count}</h1>
        <button onClick={() => handelDecriment()}></button>
      </div>
    
    </>
  )
}

export default App
