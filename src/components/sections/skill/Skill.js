import React, { Component } from 'react'
import SkillItem from './SkillItem'

export class Skill extends Component {
    render() {
        return (
            <div className="skill section">
                <h2>Spécialités</h2>
                <SkillItem />
            </div>
        )
    }
}

export default Skill
