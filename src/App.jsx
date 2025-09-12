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
        <button onClick={() => handelDecriment()}></button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
