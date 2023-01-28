import React, { Component } from 'react'
import Header from './Header'
import Home from '../pages/Home'
// import About from '../pages/About'
import Footer from './Footer'
import Stars from './Stars'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ProjectDetails from './sections/project/ProjectDetails'
import DarkModeContext from './DarkModeContext';
import { withRouter } from 'react-router-dom';

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

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    handleScroll = () => {
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            showHeader: document.body.getBoundingClientRect().top > this.state.scrollPos
            || this.state.scrollPos >= 200
        })
    }

    showHeader = () => {
        this.setState({
            showHeader: true
        })
    }

    render() {
        const { isDarkMode } = this.context;
        return (
            <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
                <Router>
                    <Stars />
                    <Header scrollPos={this.state.scrollPos} showHeader={this.state.showHeader} currentRoute={this.props.location.pathname}/>
                    <Route exact path='/' component={Home} />
                    {/* <Home /> */}
                    {/* <About showHeader = {this.showHeader} /> */}
                    <Route path='/mecabecane' component={ProjectDetails} />
                    <Route path='/umanage' component={ProjectDetails} />
                    <Route path='/wotso' component={ProjectDetails} />
                    <Route path='/francemineraux' component={ProjectDetails} />
                    <Route path='/spacebanditos' component={ProjectDetails} />
                    <Footer />
                    {/* <Route 
                            path='/mecabecane'
                            render={(props) => (
                                <ProjectDetails {...props}/>
                            )} 
                        /> */}
                </Router>
            </div>
        )
    }
}

export default withRouter(MainWrapper)
