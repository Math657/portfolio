import React, { Component } from 'react'
import wotso from '../../../images/wotso.png'
import wotso2 from '../../../images/wotso2.png'
import wotso3 from '../../../images/wotso3.png'
import mecabecane from '../../../images/mecabecane.jpg'
import mecabecane2 from '../../../images/mecabecane2.png'
import francemineraux from '../../../images/francemineraux.png'
import francemineraux2 from '../../../images/francemineraux2.png'
import umanage1 from '../../../images/umanage1.png'
import umanage2 from '../../../images/umanage2.png'
import umanage3 from '../../../images/umanage3.png'
import spacebanditos from '../../../images/space-banditos.png'
import spacebanditos2 from '../../../images/space-banditos2.png'

export class ProjectDetails extends Component {  
        state = {
            mecabecane: {
                title: 'Mécabécane',
                role: 'Développeur Fullstack',
                stacks: ['React', 'Symfony', 'MySQL'],
                date: '2021 - 2022',
                description: 'Mécabécane offre la possibilité de personnaliser et créer son propre vélo, puis de le commander. Fabriqué avec passion, tout est produit à la main pour garantir une qualité supérieure.',
                missions: 'Sur ce projet, j\'ai réalisé le backend, le processus de paiement, construit la base de données, et effectuer le déploiement.',
                link: 'https://www.mecabecane.com/',
                images: [mecabecane, mecabecane2]
            },
            umanage: {
                title: 'U-Manage',
                role: 'Développeur Fullstack',
                stacks: ['Angular', 'Ionic', 'Symfony', 'API Platform', 'PostgreSQL', 'Docker', 'Azure'],
                date: '2022 - 2023',
                description: 'U-Manage est un logiciel innovant qui intègre les systèmes d\'information et digitalisation pour soutenir la gestion d\'entreprise. Il est désormais commercialié et est transposable dans tous les métiers, qu\'ils soient industriels ou tertiaires',
                missions: '',
                link: 'https://www.u-manage.fr/',
                images: [umanage2, umanage3, umanage1]
            },
            wotso: {
                title: 'Wotso',
                role: 'Développeur Fullstack',
                stacks: ['Laravel', 'MySQL'],
                date: '2021',
                description: 'Wotso est un réseau social permettant aux coachs et sportifs d\'être en contact et de se rapprocher.',
                missions: 'J\'ai développé de nombreuses fonctionnalités du site, en intervenant donc en fullstack.',
                link: '',
                images: [wotso3]
            },
            francemineraux: {
                title: 'France Mineraux',
                role: 'Développeur Fullstack',
                stacks: ['Laravel', 'MySQL'],
                date: '2021',
                description: 'France Mineraux est le leader français sur la Lithothérapie (bijoux et objets en pierres naturelles, mineraux, ...). Il s\'agit d\'un site e-commerce.',
                missions: 'Je suis intervenu sur la partie backoffice du site, en instaurant un système de support, inventaire et dashboard.',
                link: 'https://www.france-mineraux.fr/',
                images: [francemineraux, francemineraux2]
            },
            spacebanditos: {
                title: 'Space Banditos',
                role: 'Développeur',
                stacks: ['Unity', 'C#'],
                date: '2021',
                description: 'Space Banditos est un jeu PC animé et en équipe se jouant en ligne jusqu\'à 9 joueurs. Des équipes de 3 sont formées et combattent pour remporter la partie.',
                missions: 'J\'ai pu effectuer des développements sur l\'interface et les menus du jeu, ainsi qu\'un moyen de paiement.',
                link: 'https://store.steampowered.com/app/1643040/SPACE_BANDITOS/?l=french',
                images: [spacebanditos, spacebanditos2]
            },
            url: ''
        }

        componentDidMount() {
            const projectName = this.props.location.pathname.replace('/', '')
            this.setState({
                url: projectName
            })
            window.scrollTo(0, 0)
        }

    render() {
        const project = this.state[this.state.url];
        if (project) {
            return (
                <div className="projet-details section">
                    <div className='details-info'>
                        <div className='details-role'>
                            <h2 className='details-role-project'>{ project.title }</h2>
                            <p className='details-role-title'>Mon rôle</p>
                            <p className='details-role-content'>{ project.role }</p>

                            <p className='details-role-title'>Technologies utilisées</p>
                            {
                                project.stacks.map(stack => (
                                    <p key={stack} className='details-role-stack'>{ stack }</p>
                                ))
                            }

                            <p className='details-role-title'>Année</p>
                            <p className='details-role-content'>{ project.date }</p>
                        </div>
                        <div className='details-site'>
                            <p className='details-role-project'>{ project.description }</p>
                            <p className='details-role-project'>{ project.missions }</p>
                            
                            { project.link ? <a href={project.link} className="site-link" target="_blank"
                           rel="noopener noreferrer">Accéder au site →</a> : '' }
                        </div>
                    </div>
    
                    <div className='details-pictures'>
                        {
                            project.images.map(img => (
                                <img src={img} alt='' key={img}></img>
                            ))
                        }   
                    </div>
                    
                    
                </div>
            )
        } else {
            return (
                <div>Loader</div>
            )
        }
    }
}

export default ProjectDetails
