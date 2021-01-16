import React, { Component } from 'react'
import photo from '../images/photo.jpg'

export class About extends Component {

    render() {
        return (
            <div className="about section">
                <h2>À propos de moi</h2>
                <div className="about-me">
                    <p>Passionné par le développement web, je me suis spécialisé en Javascript en utilisant principalement Vuejs et React côté frontend, et Nodejs/Express pour le backend.
                    Je développe actuellement une application (réseau social) de pêche, qui sera déployé sur Docker et bientôt disponible sur le web.</p>
                    <img src={photo} alt="profile"></img>
                </div>       
            </div>
        )
    }
}

export default About
