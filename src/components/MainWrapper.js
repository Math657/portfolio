import React, { Component } from 'react'
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
        return (
            <div>
                    <Stars />
                    <Header scrollPos={this.state.scrollPos} showHeader={this.state.showHeader} />
                    <Home />
                    {/* <About showHeader = {this.showHeader} /> */}
                    <Footer />
            </div>
        )
    }
}

export default MainWrapper
