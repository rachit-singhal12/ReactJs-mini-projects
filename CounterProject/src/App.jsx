import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Conuter Project</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Add Value</button>{" "}
      <button onClick={()=>setCount(count-1)}>Remove Value</button>
      <p>Footer:{count}</p>
    </>
  )
}

export default App