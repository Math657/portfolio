import React, { Component } from 'react'

export class SkillItem extends Component {
    state = {
        skill0: true,
        skill1: false,
        skill2: false,
        skill3: false,      
    }

    // getStyle = () => {
    //     if (this.state.skills.active) {
    //         return {
    //             display: 'inline'
    //         }
    //     } else {
    //         return {
    //             display: 'none'
    //         }
    //     }
    // }
    // if active true so style it and show its div


    // refactoriser (map?)
    activeSkill = (id) => {
       switch(id) {
           case '0':
               this.setState({ skill0: true })
               this.setState({ skill1: false })
               this.setState({ skill2: false })
               this.setState({ skill3: false })
            break

            case '1':
               this.setState({ skill0: false })
               this.setState({ skill1: true })
               this.setState({ skill2: false })
               this.setState({ skill3: false })
            break

            case '2':
               this.setState({ skill0: false})
               this.setState({ skill1: false })
               this.setState({ skill2: true })
               this.setState({ skill3: false })
            break

            case '3':
               this.setState({ skill0: false})
               this.setState({ skill1: false })
               this.setState({ skill2: false })
               this.setState({ skill3: true })
            break

            default:
                this.setState({ skill0: true })
                this.setState({ skill1: false })
                this.setState({ skill2: false })
                this.setState({ skill3: false })
       }
    }

    render() {
        return (
            <div class="skill-container">
                <div class="skill-item">
                    <ul>
                        <li onClick={() => this.activeSkill('0')}>Langages de <br></br> progammation</li>
                        <li onClick={() => this.activeSkill('1')}>Technologies <br></br> Front-end</li>
                        <li onClick={() => this.activeSkill('2')}>Technologies <br></br> Back-end</li>
                        <li onClick={() => this.activeSkill('3')}>Technologies <br></br> Base de données</li>
                    </ul>
                </div>
                {this.state.skill0 === true &&
                    <div class="skill-details">
                        <p>JavaScript</p>
                    </div>
                } 

                {this.state.skill1 === true &&
                    <div class="skill-details">         
                        <p>Vue.js, React, HTML, CSS, SASS</p>  
                    </div>
                } 

                {this.state.skill2 === true &&
                    <div class="skill-details">
                        <p>Node.js, Express, MySQL</p>                     
                    </div>
                }

                {this.state.skill3 === true &&
                    <div class="skill-details">                  
                        <p>MySQL, MongoDB</p>             
                    </div>
                }
            </div>
        )
    }
}

export default SkillItem
