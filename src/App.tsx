import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  const countUp = () => {
    setCount((prev) => prev + 1)
  }

  const countDown = () => {
    setCount((prev) => prev - 1)
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <h1>カウンターApp(TypeScriptバージョン)</h1>
      <h2>現在のカウント: {count}</h2>
      <button onClick={countUp}>+1をする</button>
      <button onClick={countDown}>-1をする</button>
      <button onClick={reset}>リセットをする</button>
    </>
  )
}

export default App
