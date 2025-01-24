import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/home'
import AboutMe from './components/about_me/about_me'
import Projects from './components/projects/projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> 
        <div>
          <Home />
        </div>

        <div>
          <AboutMe />
        </div>

        <div>
          <Projects />
        </div>

    </div>
  )
}

export default App
