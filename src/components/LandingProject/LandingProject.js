import React from 'react'
import { logoKhedemni, node,logoBuileo, js_dev,react,webpack,git,mysql_logo,docker, js_logo, php, vue,symfony, api_logo, jquery, html_logo, css_logo, bootstrap, firebase, react_logo, php_logo, symfony_logo, rn_logo, logoEp, dev_skill, projects, redux_i } from '../../Images/Images'
import ProjectCard from '../ProjectCard/ProjectCard'
import DivWave from '../DivWave/DivWave'
import WaveButton from '../WaveButton/WaveButton'
import './LandingProject.css'

export default function LandingProject() {
    return (
        <div className="landing-projects-container">
        <DivWave>
            <h3>
                Derniers Projets
            </h3>
            <div className="landing-projects">
            <ProjectCard 
                    title="Khedemni Mobile"
                    type="Professional Project"
                    live="https://play.google.com/store/apps/details?id=com.khedemni&hl=fr"
                    description="Khedemni! La première application en Algérie spécialisée dans le recrutement des métiers de l'hôtellerie et de la restauration."
                    logo={logoKhedemni}
                    tech={[
                        {name:"Java Script",logo:js_logo},
                        {name:"React Native",logo:react},
                        {name:"Redux",logo:redux_i},
                        {name:"PHP",logo:php},
                        {name:"Symfony 4",logo:symfony},
                        {name:"Api Platform",logo:api_logo},
                        {name:"Firebase",logo:firebase}
                    ]}
                />
                <div className="landing-project-img">
                    <img src={projects} />
                </div>
                <ProjectCard 
                    title="Buileo CRM"
                    type="Professional Project"
                    live="https://www.buileo.com/"
                    description="Buileo CRM est l'outil qui va vous permettre de mieux gérer votre relation client et de mieux contrôler le processus de vente de votre entreprise.Grâce à ses différents modules, vous aurez une visibilité sur l’ensemble de vos activités."
                    logo={logoBuileo}
                    classes="buileo"
                    tech={[
                        {name:"PHP",logo:php},
                        {name:"Symfony 2",logo:symfony},
                        {name:"HTML 5",logo:html_logo},
                        {name:"CSS 3",logo:css_logo},
                        {name:"Bootstrap",logo:bootstrap},
                        {name:"Java Script",logo:js_logo},
                        {name:"Vuejs",logo:vue},
                        {name:"JQuery",logo:jquery},
                    ]}
                />
            </div>
            <WaveButton 
                label="Voir tous les projets"
                path="/projects"
            />
        </DivWave>
        </div>
    )
}
