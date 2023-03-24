import { useState } from 'react'
import './App.css'
import Load_der from '../Components/Load_der'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> Welcome to my app</h1>
    <p>{count}</p>
      <Load_der />
    </>
  )
}

export default App
