import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import * as Scroll from 'react-scroll'
let LinkScroll = Scroll.Link
export class Header extends Component {

    getStyle() {
        if (this.props.scrollPos >= 100 || this.props.scrollPos === 0) {
            return {
                backgroundColor: 'transparent'
            }
        }
    }

    render() {
        return (
            <header className={this.props.showHeader ? "active" : "hidden"} style={this.getStyle()}>
                <h2><Link className ="logo" to ="/">MD</Link></h2>
                <ul className="nav">

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
                    
                    <li><Link to ="/about" className="nav-link">À propos</Link></li>
                </ul>
            </header>
        )
    }
}

export default Header
