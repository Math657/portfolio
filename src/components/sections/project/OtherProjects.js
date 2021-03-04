import React, { Component } from 'react'
import groupomania from '../../../images/groupomania.jpg'
import orinico from '../../../images/orinoco.jpg'
import portfolio from '../../../images/portfolio.jpg'
import piquante from '../../../images/piquante.jpg'
import cv from '../../../images/cv.jpg'

export class OtherProjects extends Component {  
        state = {
          seeMore: false
        }
    

    seeMore() {
        this.setState({ seeMore: true })
    }

    render() {
        return (
            <div className="other-projects">
                <h4>Autres projets</h4>
                <div className="container-other-projects">
                    <div className="row-1">
                        <div className="one-other-project">
                            <p>Portfolio</p>
                            <div className="one-other-project-thumb">
                                <a href="https://github.com/Math657/portfolio" target="_blank"
                                    rel="noopener noreferrer" >
                                    <img src={portfolio} alt="portfolio thumbnail" width="250px" />
                                </a>
                            </div>
                        </div>

                        <div className="one-other-project">
                            <p>Orinoco</p>
                            <div className="one-other-project-thumb">
                                <a href="https://github.com/Math657/JWDP5" target="_blank"
                                    rel="noopener noreferrer" >
                                    <img src={orinico} alt="portfolio thumbnail" width="250px" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row-2">
                        <div className="one-other-project">
                            <p>Groupomania</p>
                            <div className="one-other-project-thumb">
                                <a href="https://github.com/Math657/P7" target="_blank"
                                    rel="noopener noreferrer" >
                                    <img src={groupomania} alt="portfolio thumbnail" width="250px" />
                                    {/* <p className="one-other-project-info">Création d'un réseau interne sécurisé d'une entreprise, <br></br>
                                    réalisé dans le cadre de ma formation</p> */}
                                </a>
                            </div>
                        </div>

                        <div className="one-other-project">
                            <p>Piquante</p>
                            <div className="one-other-project-thumb">
                                <a href="https://github.com/Math657/P6" target="_blank"
                                    rel="noopener noreferrer" >
                                    <img src={piquante} alt="portfolio thumbnail" width="250px" />
                                </a>
                            </div>
                        </div>
                    </div> 

                    <div className="see-more">
                        {this.state.seeMore === false &&
                            <button onClick={() => this.seeMore()} className="see-more-btn">Voir plus</button>
                        } 
    
                        {this.state.seeMore === true &&
                            <div className="row-3">
                                <div className="one-other-project">
                                    <p>CV</p>
                                    <div className="one-other-project-thumb">
                                        <a href="https://github.com/Math657/P2" target="_blank"
                                            rel="noopener noreferrer" >
                                            <img src={cv} alt="portfolio thumbnail" width="250px" />
                                        </a>
                                    </div>
                                </div>
                            </div> 
                        }
                    </div>
                </div>
                
            </div>
        )
    }
}

export default OtherProjects
