import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Intro extends Component {
    render() {
        return (
            <div className="intro">
                <h1>Mathieu Dessaint</h1>
                <h3>Développeur Fullstack</h3>
                <h4 className='project-featured'>Freelance</h4>
                {/* <h4>Rouen</h4> */}
                {/* <h5>“La refactorisation c’est comme faire la vaisselle après la cuisine.” <br></br>
                &nbsp; Toby Parkins</h5>     */}
            </div>

            // CARTE
            // <div className="intro">
            //     <h1>Mathieu Dessaint</h1>
            //     <h3>Développeur Web</h3>
            //     <h4 className='project-featured'>Freelance</h4>

            //     <div className='separator'></div>

            //     <p className='carte-info'><FontAwesomeIcon className ='carte-icon' icon='envelope' />contact@mathieu-dessaint.com</p>
            //     <p className='carte-info'><FontAwesomeIcon className ='carte-icon' icon='phone' />06 46 52 40 88</p>
            // </div>
        )
    }
}

export default Intro
