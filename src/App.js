import Header from './components/Header'
import Intro from './components/sections/Intro'
import Skill from './components/sections/skill/Skill'
import Project from './components/sections/project/Project'
import Contact from './components/sections/Contact'
import Stars from './components/Stars'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css";

import './App.css'


function App() {
  return (
    <div className="App">
      <Stars />
      <Header />
      
      <ScrollAnimation animateIn="animate__animated animate__fadeIn" 
                       duration="0.8"
                       offset="550">
        <Intro />
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__animated animate__fadeIn" 
                       duration="0.8"
                       offset="450">
        <Skill />
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__animated animate__fadeIn" 
                        duration="0.8"
                        offset="450">
        <Project />
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__animated animate__fadeIn" 
                       duration="0.8"
                       offset="200">
        <Contact />
      </ScrollAnimation> 
    </div>
  )
}

export default App;
