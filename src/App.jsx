import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@/components/ui/button'
import { Widget } from './components/ui/Widget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Widget />
    </>
  )
}

export default App
