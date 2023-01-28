import React, { Component } from 'react'
import RoutedComponents from './RoutedComponents'
import { BrowserRouter as Router} from 'react-router-dom'
import DarkModeContext from './DarkModeContext';;

export class MainWrapper extends Component {
    constructor() {
        super()
        this.state = {
          showHeader: true,
          scrollPos: 0,
          isDarkMode: false
        }
    }

    toggleDarkMode = () => {
        this.setState(prevState => ({
          isDarkMode: !prevState.isDarkMode
        }));
      }

   static contextType = DarkModeContext;

    render() {
        const { isDarkMode } = this.context;
        return (
            <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
                <Router>
                    <RoutedComponents></RoutedComponents>
                </Router>
            </div>
        )
    }
}

export default MainWrapper
