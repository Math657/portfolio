import React, { Component } from 'react'
import * as Scroll from 'react-scroll'
let LinkScroll = Scroll.Link
export class Header extends Component {

    getStyle() {
        if (this.props.scrollPos >= 200) {
            return {
                backgroundColor: 'transparent'
            }
        }
    }

    

    render() {
        const scrollTop = () => {
            window[`scrollTo`]({ top: 0, behavior: `smooth` })
        }

        return (        
            <header className={this.props.showHeader ? "active" : "hidden"} style={this.getStyle()}>
                <h2 onClick={scrollTop}>MD</h2>
                <ul className="nav">

                    <li><LinkScroll activeClass="active" 
                    to="skill" spy={true} smooth={true}>
                        Compétences
                    </LinkScroll></li>

                    <li><LinkScroll activeClass="active" 
                    to="project" spy={true} smooth={true}>
                        Projets
                    </LinkScroll></li>

                    <li><LinkScroll activeClass="active"
                     to="about" spy={true} smooth={true}>
                        À propos
                    </LinkScroll></li>

                    <li><LinkScroll activeClass="active"
                     to="contact" spy={true} smooth={true}>
                        Contact
                    </LinkScroll></li>
                    
                </ul>
            </header>
        )
    }
}

export default Header
