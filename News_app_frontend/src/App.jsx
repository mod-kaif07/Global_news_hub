import { useState } from 'react'
import News from './components/News'
import { Navbar } from './components/Navbar'
import './App.css'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
         <Navbar/>
        < News/>
        <Footer/>
    </>
  )
}

export default App
