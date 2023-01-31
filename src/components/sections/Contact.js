import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profilPicture from '../../images/profil.webp'

export class Contact extends Component {


    render() {
        return (
            <div className="contact section">
                <h2>Me contacter</h2>
                <p className="email">contact@mathieu-dessaint.com</p>
                
                {/* <h5>Autres plateformes</h5> */}
                <a href="https://www.linkedin.com/in/mathieu-dessaint-864ab2162/">
                    <button className="contact-btn">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} className="contact-icons" />
                    </button>
                </a>
                <a href="https://twitter.com/DessaintMathieu">
                    <button className="contact-btn">
                        <FontAwesomeIcon icon={['fab', 'twitter']} className="contact-icons" />
                    </button>
                </a>
                <a href="https://github.com/Math657">
                    <button className="contact-btn">
                        <FontAwesomeIcon icon={['fab', 'github']} className="contact-icons" />
                    </button>
                </a>
                
                <div className='pic'>
                    <img className="clip" src={profilPicture} alt="Mathieu Dessaint" />
                    <p className='info-pic'>Créateur de sites web et applications fonctionnelles, je m'adapte à la plupart des projets.</p>
                </div>
            </div>
        )
    }
}

export default Contact
