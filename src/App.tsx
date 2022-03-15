import { useState } from 'react'
import './App.css'
import {default as Header} from "./component/header/index"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Header />
  )
}

export default App
