import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Container1 from './components/Container1'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <Navbar />
      <Container1 />
      <Footer />
    </body>
  )
}

export default App
