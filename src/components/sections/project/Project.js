import React, { Component } from 'react'
import OtherProjects from './OtherProjects'
import fishfollow from '../../../images/fishfollow.jpg'
import speedype from '../../../images/speedype.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Project extends Component {
    render() {
        return (  
            <div className="project section">
                <h2>Mes projets</h2>

                <div className="one-project">
                    <div className="project-thumb">    
                        <a href="https://fishnfollow.com" 
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
                        <a href="https://fishnfollow.com"
                           className="project-title" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <p className="project-featured">Projet vedette</p>
                            Fish & Follow
                        </a> 
                        <div className="project-description">
                            Application de pêche et de partage, déployé sur Docker <br></br>
                            Version accessible, toujours en développement
                        </div>
                        <p className="project-tools">Vue.js &nbsp; Node.js/Express &nbsp; MongoDB</p>
                        <div className="project-links">
                            <a href="https://github.com/Math657/Fish-Follow" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fab', 'github']} className="project-icons" />
                            </a>  
                            <a href="https://fishnfollow.com/" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fas', 'external-link-alt']} className="project-icons" /> 
                            </a>  
                        </div>
                    </div>  
                </div>


                <div className="one-project-left">
                    <div className="project-thumb">    
                        <a href="https://github.com/Math657/speedype" 
                            target="_blank"
                            rel="noopener noreferrer">
                            <div className="overlay"></div>
                        </a>
                        <div className="fishfollow-img">
                            <img src={speedype}
                                alt="screenshot du projet Fish & Follow"
                                width="450">
                            </img>
                        </div>     
                    </div>

                    <div className="project-info-left">
                        
                        <a href="https://github.com/Math657/speedype"
                           className="project-title-left" 
                           target="_blank"
                           rel="noopener noreferrer">
                            <p className="project-featured">Projet vedette</p>
                            Speedype
                        </a> 
                        <div className="project-description-left">
                            Tapez le plus de mots possible en 60 secondes et classez-vous dans le top 50 (bientôt online)<br></br>
                            {/* Version bientôt accessible, toujours en développement */}
                        </div>
                        <p className="project-tools">React &nbsp; Symfony/PHP &nbsp; MariaDB</p>
                        <div className="project-links">
                            <a href="https://github.com/Math657/speedype" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fab', 'github']} className="project-icons-left" />
                            </a>  
                            <a href="https://github.com/Math657/speedype" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fas', 'external-link-alt']} className="project-icons-left" /> 
                            </a>  
                        </div>
                    </div>

                    
                </div>

                <OtherProjects />

            </div>
        )
    }
}

export default Project
