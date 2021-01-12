import React, { Component } from 'react'
import photo from '../images/photo.jpg'

export class About extends Component {
    componentDidMount() {
        console.log('mounted')
        // show header true
    }

    render() {
        return (
            <div className="about">
                <p>Hello World</p>
                <img src={photo} alt="profile"></img>
            </div>
        )
    }
}

export default About
