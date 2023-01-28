import React, { Component } from 'react'
import * as Scroll from 'react-scroll'
import { Link } from 'react-router-dom'
import DarkModeContext from './DarkModeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
let LinkScroll = Scroll.Link
export class Header extends Component {
    static contextType = DarkModeContext;

    handleClick = () => {
        this.props.history.push("/");
      }

    getStyle() {
        if (this.props.scrollPos >= 200) {
            return {
                backgroundColor: 'transparent'
            }
        }
    }

    render() {
        const { isDarkMode, toggleDarkMode } = this.context;
        const scrollTop = () => {
            window[`scrollTo`]({ top: 0, behavior: `smooth` })
        }

        return (        
            <header className={this.props.showHeader ? "active" : "hidden"} style={this.getStyle()}>
                <Link to="/" className='link md'>
                    <h2 onClick={scrollTop} className="md">MD</h2>
                </Link> 
     
                <ul className="nav">

                    <li><LinkScroll activeClass="active" 
                    to="project" spy={true} smooth={true} onClick={this.handleClick}>
                        Projets
                    </LinkScroll></li>
                    
                    <li><LinkScroll activeClass="active" 
                    to="skill" spy={true} smooth={true} onClick={this.handleClick}>
                        Compétences
                    </LinkScroll></li>
            
                    <li><LinkScroll activeClass="active"
                     to="contact" spy={true} smooth={true} onClick={this.handleClick}>
                        Contact
                    </LinkScroll></li>

                    <li onClick={toggleDarkMode}
                        title={isDarkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
                        style={{cursor:'pointer'}}
                    >
                        <FontAwesomeIcon icon={isDarkMode ? "sun" : "moon"} />
                    </li>  
                </ul>
            </header>
        )
    }
}

export default Header
