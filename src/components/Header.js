import React, { Component } from 'react'

export class Header extends Component {
    constructor() {
        super()
        this.state = {
          show: true,
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
            show: document.body.getBoundingClientRect().top > this.state.scrollPos
        })
    }

    getStyle() {
        if (this.state.scrollPos >= 100 || this.state.scrollPos === 0) {
            return {
                backgroundColor: 'transparent'
            }
        }
    }

    render() {
        return (
            <header className={this.state.show ? "active" : "hidden"} style={this.getStyle()}>
                <h2>MD</h2>
                <ul className="nav">
                    <li>À propos</li>
                    <li>Projets</li>
                    <li>Expériences</li>
                    <li>Contact</li>
                </ul>
            </header>
        )
    }
}

export default Header
