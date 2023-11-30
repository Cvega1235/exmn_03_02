import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Dashboard from './Components/Dashboard'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
