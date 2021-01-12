import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import * as Scroll from 'react-scroll'
let LinkScroll = Scroll.Link
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
                <h2><Link className ="logo" to ="/">MD</Link></h2>
                <ul className="nav">
                    <li><Link to ="/about" className="nav-link">À propos</Link></li>

                    <li><LinkScroll activeClass="active" 
                    to="skill" spy={true} smooth={true}>
                            <Link to ="/" className="nav-link">Compétences</Link>
                    </LinkScroll></li>

                    <li><LinkScroll activeClass="active" 
                    to="project" spy={true} smooth={true}>
                            <Link to ="/" className="nav-link">Projets</Link>  
                    </LinkScroll></li>

                    <li><LinkScroll activeClass="active"
                     to="contact" spy={true} smooth={true}>
                            <Link to ="/" className="nav-link">Contact</Link>
                    </LinkScroll></li>
                </ul>
            </header>
        )
    }
}

export default Header
