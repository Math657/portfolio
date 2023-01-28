import React, { Component } from 'react'

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
        )
    }
}

export default Intro
