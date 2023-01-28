import React, { Component } from 'react'
import Header from './Header'
import Home from '../pages/Home'
// import About from '../pages/About'
import Footer from './Footer'
import Stars from './Stars'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ProjectDetails from './sections/project/ProjectDetails'
import { withRouter } from 'react-router-dom';

export class RoutedComponents extends Component {
    constructor() {
        super()
        this.state = {
          showHeader: true,
          scrollPos: 0,
        }
    }

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
                <Stars />
                <Header scrollPos={this.state.scrollPos} showHeader={this.state.showHeader} currentRoute={this.props.location.pathname} history={this.props.history}/>
                <Route exact path='/' component={Home} />
                <Route path='/mecabecane' component={ProjectDetails} />
                <Route path='/umanage' component={ProjectDetails} />
                <Route path='/wotso' component={ProjectDetails} />
                <Route path='/francemineraux' component={ProjectDetails} />
                <Route path='/spacebanditos' component={ProjectDetails} />
                <Footer />  
            </div>
        )
    }
}

export default withRouter(RoutedComponents)
