import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Footer from './Footer'
import Stars from './Stars'

export class MainWrapper extends Component {
    constructor() {
        super()
        this.state = {
          showHeader: true,
          scrollPos: 0
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
            scrollPos: document.body.getBoundingClientRect().top, // + 150 ?
            showHeader: document.body.getBoundingClientRect().top > this.state.scrollPos
        })
        // showheader at 150
    }

    showHeader = () => {
        this.setState({
            showHeader: true
        })
    }

    render() {
        return (
            <div>
                <Router>
                    <Stars />
                    <Header scrollPos={this.state.scrollPos} showHeader={this.state.showHeader} />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" render={props => <About showHeader = {this.showHeader} />} />
                    <Footer />
                </Router>
            </div>
        )
    }
}

export default MainWrapper
