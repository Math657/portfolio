import React, { Component } from 'react'
import OtherProjects from './OtherProjects'
import Carousel from './Carousel'
import fishfollow from '../../../images/fishfollow.jpg'
import mecabecane from '../../../images/mecabecane.webp'
import umanage from '../../../images/umanage-prev.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import DarkModeContext from '../../DarkModeContext';

export class Project extends Component {
    static contextType = DarkModeContext;
    constructor() {
        super()
        this.state = {
          
        }
    }
    render() {
        const { isDarkMode } = this.context;
        return (  
            <div className="project section">
                <h2>Projets sélectionnés</h2>
                <div className="one-project">
                    <div className="project-thumb">  
                        <Link to="/mecabecane">
                            <div className="overlay"></div>
                        </Link> 
                        <div className="vedette-left-img">
                            <img src={mecabecane}
                                alt="screenshot du projet Mécabécane"
                                width="450">
                            </img>
                        </div>     
                    </div>

                    <div className="project-info">  
                        <Link to="/mecabecane" className="project-title" >
                            <p className="project-featured">Site Web</p>
                            Mécabécane
                        </Link>
                        <div className="project-description">
                            Configurateur de vélo 100% personnalisable <br></br>
                            Permet de configurer et de commander des vélos uniques
                        </div>
                        <p className="project-tools">React &nbsp; Laravel &nbsp; MySQL | <span className="project-featured"><strong>2022</strong></span></p>
                        <div className="project-links">
                            <a href="https://www.mecabecane.com//" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fas', 'external-link-alt']} className="project-icons" fill={isDarkMode ? "#fff" : "#000"} /> 
                            </a>  
                        </div>
                    </div>  
                </div>

                {/* ------------------------------------------ */}


                <div className="one-project-left">
                    <div className="project-thumb">    
                        <Link to="/umanage">
                            <div className="overlay"></div>
                        </Link> 
                        <div className="fishfollow-img">
                            <img src={umanage}
                                alt="screenshot du projet U Manage"
                                width="450"
                                id="speedype-img">
                            </img>
                        </div>     
                    </div>

                    <div className="project-info-left">

                        <Link to="/umanage" className="project-title-left" >
                            <p className="project-featured">Logiciel Web QHSE & RSE</p>
                            U-Manage
                        </Link>
                        
                        <div className="project-description-left">
                        U-Manage aide au pilotage d'entreprise et répond aux attentes et besoins de leurs parties prenantes (clients, auditeurs, inspecteurs, assureurs…) tout en améliorant leurs performances<br></br>
                        </div>
                        <p className="project-tools tools-left">Angular/Ionic &nbsp; Symfony/API Platform &nbsp; PostgreSQL &nbsp; Docker | <span className="project-featured"><strong>2022 - 2023</strong></span></p>
                        <div className="project-links">
                            {/* <a href="https://github.com/Math657/speedype" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fab', 'github']} className="project-icons-left" />
                            </a>   */}
                            {/* <a href="https://github.com/Math657/speedype" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fas', 'external-link-alt']} className="project-icons-left" /> 
                            </a>   */}
                        </div>
                    </div>


                    {/* <div className="project-thumb">    
                        <a href="https://github.com/Math657/speedype" 
                            target="_blank"
                            rel="noopener noreferrer">
                            <div className="overlay"></div>
                        </a>
                        <div className="fishfollow-img">
                            <img src={speedype}
                                alt="screenshot du projet Fish & Follow"
                                width="450"
                                id="speedype-img">
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
                    </div> */}
                    
                </div>

                <OtherProjects />
                {/* <Carousel /> */}
            </div>
        )
    }
}

export default Project
