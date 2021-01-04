import React, { Component } from 'react'
import SkillItem from './SkillItem'

export class Skill extends Component {
    render() {
        return (
            <div class="skill">
                <h2>Spécialités</h2>
                <SkillItem />
            </div>
        )
    }
}

export default Skill
