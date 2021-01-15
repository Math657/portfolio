import React, { Component } from 'react'
import Intro from '../components/sections/Intro'
import Skill from '../components/sections/skill/Skill'
import Project from '../components/sections/project/Project'
import Contact from '../components/sections/Contact'
import ScrollAnimation from 'react-animate-on-scroll'

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <ScrollAnimation animateIn="animate__animated animate__fadeIn" 
                                duration={0.7}
                                offset={10}>
                    <Intro id="intro"/>
                </ScrollAnimation>

                <ScrollAnimation animateIn="animate__animated animate__fadeIn" 
                                duration={0.7}
                                offset={10}>
                    <Skill id="skill"/>
                </ScrollAnimation>

                <ScrollAnimation animateIn="animate__animated animate__fadeIn" 
                                duration={0.7}
                                offset={10}>
                    <Project id="project"/>
                </ScrollAnimation>

                <ScrollAnimation animateIn="animate__animated animate__fadeIn" 
                                duration={0.7}
                                offset={10}>
                    <Contact id="contact"/>
                </ScrollAnimation>
            </div>
        )
    }
}

export default Home
