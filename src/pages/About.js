import React, { Component } from 'react'

export class About extends Component {

    render() {
        return (
            <div className="about section">
                <h2>À propos de moi</h2>
                <div className="about-me">
                    <div className="wrapper-picture">
                    </div>
                    <p>Si je devais qualifier mon parcours en un mot, je dirais atypique.
                        En effet, après une licence en management international bilingue anglais et une expérience professionnelle en tant que chargé d’affaires, je me suis rendu compte que j’avais absolument besoin d’être épanoui dans mon travail. 
                        Me réorienter vers le développement web m’a donc paru évident étant donné que j’ai toujours été passionné par ce domaine.
                        J'ai donc suivi une formation pour acquérir des connaissances solides. <br></br> <br></br> Autodidacte, je continue perpétuellement à élargir mes compétences, même si je me suis spécialisé en <span class="important-words">Javascript. </span>
                        Les technologies  principales que j’utilise sont <span class="important-words">Vuejs et React côté frontend, Nodejs/Express en backend et Symfony récemment (PHP). </span>
                        Ce que j’aime avant tout dans ce métier, c’est la  réalisation de projets et le challenge quotidien, ce qui est en adéquation avec ma personnalité. Persévérant et autonome, je n’abandonne jamais devant la difficulté. En effet, résoudre des problèmes ne me fait pas peur, bien au contraire !
                        D’ailleurs, je développe actuellement une application de pêche (Fish & Follow) qui sera bientôt disponible sur le web.<br></br>
                        <br></br>
                        Ce que je recherche aujourd'hui, c’est acquérir davantage d’expérience professionnelle. 
                        C’est pourquoi si vous avez diverses missions à me proposer ou un CDD / CDI, n'hésitez pas à me contacter, je me ferais un plaisir d’échanger avec vous.
                    </p>  
                </div>       
            </div>
        )
    }
}

export default About
