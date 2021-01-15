import React, { Component } from 'react'
import photo from '../images/photo.jpg'

export class About extends Component {
    componentDidMount() {
        this.props.showHeader()
        setTimeout(() => {
            this.props.showHeader()
        }, 10)
        setTimeout(() => {
            this.props.showHeader()
        }, 600)
    }

    render() {
        // let showHeader = this.props.showHeader
        return (
            <div className="about">
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
