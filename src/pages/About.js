import React, { Component } from 'react'

export class About extends Component {

    render() {
        return (
            <div className="about section">
                <h2>À propos de moi</h2>
                <div className="about-me">
                    <div className="wrapper-picture">
                    </div>
                    <p>Passionné par le développement web, j'ai commencé par suivre une formation puis j'ai continuer d'approfondir mes compétences en autodidacte.
                        Je me suis spécialisé en Javascript en utilisant principalement Vuejs et React côté frontend, et Nodejs/Express pour le backend.
                        Je cherche toujours à m'améliorer et à apprendre de nouvelles choses.
                        Résoudre des problèmes, être challengé au quotiden, mener un projet à bien, c'est captivant.
                        Je développe actuellement une application (Fish & Follow) qui sera bientôt disponible sur le web.<br></br>
                        <br></br>
                        Par ailleurs, je cherche à acquérir de l'expérience professionelle, n'hésitez donc pas à me contacter pour un CDI/CDD ou diverses missions.
                    </p>  
                </div>       
            </div>
        )
    }
}

export default About
