import Header from './components/Header'
import Intro from './components/sections/Intro'
import Skill from './components/sections/skill/Skill'
import Project from './components/sections/project/Project'
import Contact from './components/sections/Contact'
import Stars from './components/Stars'

import './App.css'


function App() {
  return (
    <div className="App">
      <Stars />
      <Header />
      <Intro />
      <Skill />
      <Project />
      <Contact />
    </div>
  )
}

export default App;
