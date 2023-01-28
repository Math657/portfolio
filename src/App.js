import './styles/App.css'
import MainWrapper from './components/MainWrapper'
import "animate.css/animate.min.css"
import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faExternalLinkAlt, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import DarkModeContext from './components/DarkModeContext';

library.add(fab, faEnvelope, faExternalLinkAlt, faMoon, faSun)



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: true
    };
  }

  componentDidMount() {
    document.body.classList.add('dark-mode');
  }

  toggleDarkMode = () => {
    this.setState(prevState => {
        const newMode = !prevState.isDarkMode;
        document.body.classList.toggle('dark-mode', newMode);
        document.body.classList.toggle('light-mode', !newMode);
        return {isDarkMode: newMode};
    });
  }

  render() {
    return (
      <DarkModeContext.Provider value={{isDarkMode: this.state.isDarkMode, toggleDarkMode: this.toggleDarkMode}}>
        <MainWrapper />
      </DarkModeContext.Provider>
    );
  }
}

export default App;

