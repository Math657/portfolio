import React, { Component } from 'react'
import fishfollow from '../../../images/fishfollow.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Project extends Component {
    render() {
        return (  
            <div className="project section">
                <h2>Mes projets</h2>

                <div className="one-project">
                    <div className="project-thumb">    
                        <a href="https://github.com/Math657/Fish-Follow" 
                            target="_blank"
                            rel="noopener noreferrer">
                            <div className="overlay"></div>
                        </a>
                        <div className="fishfollow-img">
                            <img src={fishfollow}
                                alt="screenshot du projet Fish & Follow"
                                width="450">
                            </img>
                        </div>     
                    </div>

                    <div className="project-info">
                        
                        <a href="https://github.com/Math657/Fish-Follow"
                           className="project-title" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <p className="project-featured">Projet vedette</p>
                            Fish & Follow
                        </a> 
                        <div className="project-description">
                            Application de pêche et de partage, déployé avec Docker <br></br>
                            Version bientôt accessible, toujours en développement
                        </div>
                        <p className="project-tools">Vuejs &nbsp; Node/Express &nbsp; MongoDB</p>
                        <div className="project-links">
                            <a href="https://github.com/Math657/Fish-Follow" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fab', 'github']} className="project-icons" />
                                <FontAwesomeIcon icon={['fas', 'external-link-alt']} className="project-icons" />
                                
                            </a>  
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Project
