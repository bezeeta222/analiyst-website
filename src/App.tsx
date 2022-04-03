import { Box } from '@mui/system'
import { useState } from 'react'
import './App.css'
import { default as Header } from './component/header/index'
import { default as Widget } from './component/widget/index'
import { default as HeaderPage } from './component/mainpage/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Box>
        <Header />
      </Box>
      <Box>
        <HeaderPage/>
      </Box>
      <Box>
        <Widget />
      </Box>
    </div>
  )
}

export default App
