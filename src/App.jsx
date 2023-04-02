import './App.css'
import NavBar from './Componants/NavBar'
import Home from './Componants/Home'
import Skill from './Componants/Skill'
import About from './Componants/About'
import Projects from './Componants/Projects'
import Contact from './Componants/Contact'
import Footer from './Componants/Footer'


function App() {
  return (
    <div className="App" id='home'>
      <NavBar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
