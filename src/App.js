import './styles/App.css'
import MainWrapper from './components/MainWrapper'
import "animate.css/animate.min.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope, faExternalLinkAlt)



function App() {
  return (
    <div className="App">
        <MainWrapper />
    </div>
  )
}

export default App;
