import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
import groupomania from '../../../images/groupomania.jpg'
import orinico from '../../../images/orinoco.jpg'
import portfolio from '../../../images/portfolio.jpg'
import cv from '../../../images/cv.jpg'

export class Carousel extends Component { 
    render() {
        const responsive = {
            0: { items: 1 },
            568: { items: 2 },
            1024: { items: 3 },
        }
        
        const items = [
            <div className="one-item" data-value="1">
                <div>
                    <img src={groupomania} className="sliderimg" alt="groupomania thumbnail"/>
                </div>
                <p className="info-item">VueJS/NodeJS, base de données MySQL</p>
            </div>,
            <div className="one-item" data-value="2">
                <div>
                    <img src={orinico} className="sliderimg" alt="orinoco thumbnail"/>
                </div>
                <p className="info-item">Javascript</p>
            </div>,
            <div className="one-item" data-value="3">
                <div>
                    <img src={cv} className="sliderimg" alt="cv thumbnail"/>
                </div>
                <p className="info-item">HTML/CSS</p>
            </div>,
            <div className="one-item" data-value="4">
                <div>
                    <img src={portfolio} className="sliderimg" alt="portfolio thumbnail"/>
                </div>
                <p className="info-item">React</p>
            </div>,
        ]
        return ( 
            <div className="other-projects">
                <h4>Autres Projets</h4>
                <AliceCarousel 
                    autoPlay 
                    autoPlayInterval="0" 
                    animationDuration="6000" 
                    autoPlayStrategy="all"
                    animationEasingFunction="linear"
                    infinite={true}
                    disableButtonsControls
                    disableDotsControls
                    controlsStrategy="responsive"
                    mouseTracking={true}
                    items={items}
                    responsive={responsive}
                    touchTracking={false}
                >
                </AliceCarousel>
            </div>
        )
    }
}

export default Carousel
