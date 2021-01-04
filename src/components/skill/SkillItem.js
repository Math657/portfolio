import React, { Component } from 'react'

export class SkillItem extends Component {
    state = {
        skills: [
            {
                id: 1,
                title: '',
                active: true
            },
            {
                id: 2,
                title: '',
                active: false
            }
        ]
    }

    getStyle = () => {

    }
    // if active true so style it and show its div

    render() {
        return (
            <div class="skill-item">
                <ul>
                    <li>Langages de <br></br> progammation</li>
                    <li>Technologies <br></br> Front-end</li>
                    <li>Technologies <br></br> Back-end</li>
                    <li>Technologies <br></br> Base de données</li>
                </ul>
            </div>
        )
    }
}

export default SkillItem
