import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import wotso from '../../../images/wotso.webp'
import wotsoPreview from '../../../images/wotso-preview.png'
import spaceBanditos from '../../../images/space-banditos.jpg'
import francemineraux from '../../../images/francemineraux.webp'
// import groupomania from '../../../images/groupomania.jpg'
// import orinico from '../../../images/orinoco.jpg'
// import portfolio from '../../../images/portfolio.jpg'
// import piquante from '../../../images/piquante.jpg'
// import cv from '../../../images/cv.jpg'

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
                {/* <Carousel /> */}
                <div className="container-other-projects">
                    <div className="row-1">
                    <div className="one-other-project">
                            <p>Back Office France Mineraux</p>
                            <p className="project-featured">Site E-commerce</p>
                            <div className="one-other-project-thumb">
                                <Link to="/francemineraux" className=''>
                                    <img src={francemineraux} alt="francemineraux project thumbnail" width="250px" />
                                </Link>
                            </div>
                        </div>

                        <div className="one-other-project">
                            <p>Wotso</p>
                            <p className="project-featured">Site Web</p>
                            <div className="one-other-project-thumb">
                                <Link to="/wotso" className=''>
                                    <img src={wotsoPreview} alt="wotso project thumbnail" width="250px" />
                                </Link>
                            </div>
                        </div>      
                    </div>

                    <div className="row-2">
                    <div className="one-other-project">
                            <p>Space Banditos</p>
                            <p className="project-featured">Jeu PC</p>
                            <div className="one-other-project-thumb">
                                <Link to="/spacebanditos" className=''>
                                    <img src={spaceBanditos} alt="space banditos project thumbnail" width="250px" />
                                </Link>
                            </div>
                        </div> 

                        {/* <div className="one-other-project">
                            <p>Groupomania</p>
                            <div className="one-other-project-thumb">
                                <a href="https://github.com/Math657/P7" target="_blank"
                                    rel="noopener noreferrer" >
                                    <img src={groupomania} alt="portfolio thumbnail" width="250px" />
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
                        </div> */}
                    </div> 

                    {/* <div className="see-more">
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
                    </div> */}
                </div>
                
            </div>
        )
    }
}

export default OtherProjects
