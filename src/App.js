import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Stars from './components/Stars'
import "animate.css/animate.min.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope, faExternalLinkAlt)



function App() {
  return (
    <div className="App">
        <Router>
            <Stars />
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Footer />
        </Router>
    </div>
  )
}

export default App;
