import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Contact extends Component {


    render() {
        return (
            <div className="contact section">
                <h2>Me contacter</h2>
                <h5>Email</h5>
                <a href="mailto:mathieu.dessaint10@gmail.com">
                    <button className="contact-btn">
                        <FontAwesomeIcon icon={['far', 'envelope']} className="contact-icons" />
                    </button>
                </a>
                
                <h5>Autres plateformes</h5>
                <a href="https://www.linkedin.com/in/mathieu-dessaint-864ab2162/">
                    <button className="contact-btn">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} className="contact-icons" />
                    </button>
                </a>
                <a href="https://github.com/Math657">
                    <button className="contact-btn">
                        <FontAwesomeIcon icon={['fab', 'github']} className="contact-icons" />
                    </button>
                </a>
                
                
            </div>
        )
    }
}

export default Contact
