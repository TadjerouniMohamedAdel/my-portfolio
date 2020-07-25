import React, { Component } from 'react'
import {Tabs , Tab,Grid,Cell,Card,CardTitle,CardActions,Button,CardMenu,IconButton, CardText} from 'react-mdl'
import { logoKhedemni, artelyes,material,logoBuileo, react, js_logo, php, vue,symfony, api_logo, jquery, html_logo, css_logo, bootstrap, firebase, react_logo, php_logo, symfony_logo, logoEp } from '../Images/Images'
import ProjectCard from './ProjectCard/ProjectCard';
export default class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab:0 }
        
    }


    renderProProject= ()=>{
        return(
            <div className="projects-grid">
                    <ProjectCard 
                                title="Khedemni Mobile"
                                type="Professional Project"
                                description="Khedemni! La première application en Algérie spécialisée dans le recrutement des métiers de l'hôtellerie et de la restauration."
                                logo={logoKhedemni}
                                tech={[
                                    {name:"Java Script",logo:js_logo},
                                    {name:"React Native",logo:react},
                                    {name:"PHP",logo:php},
                                    {name:"Symfony 4",logo:symfony},
                                    {name:"Api Platform",logo:api_logo},
                                    {name:"Firebase",logo:firebase}
                                ]}
                            />
                            <ProjectCard 
                                title="Buileo CRM"
                                type="Professional Project"
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
                            <ProjectCard 
                                title="Emploipartner.com"
                                type="Professional Project"
                                description=" EmploiPartner est une site web de e-recrutement qui propose des solutions de Sourcing et de Recrutement innovantes pour accompagner les entreprises dans leurs projets de développement RH "
                                logo={logoEp}
                                classes="ep"
                                tech={[
                                    {name:"PHP",logo:php},
                                    {name:"Symfony 3",logo:symfony},
                                    {name:"HTML 5",logo:html_logo},
                                    {name:"CSS 3",logo:css_logo},
                                    {name:"Bootstrap",logo:bootstrap},
                                    {name:"Java Script",logo:js_logo},
                                    {name:"JQuery",logo:jquery},
                                ]}
                            />
            
            </div>

        )
    }

    renderPersonalProject= ()=>{
        return(
            <div className="projects-grid">
                <ProjectCard 
                            title="Artelyes"
                            type="Personal Project"
                            description="Artelyes est un site web dédié à la présentation et la publication des oeuvres d'art de Mr Elyes Tayeb Lamine."
                            logo={artelyes}
                            classes="artelyes"
                            tech={[
                                {name:"Java Script",logo:js_logo},
                                {name:"React",logo:react},
                                {name:"Material UI",logo:material},
                                {name:"HTML 5",logo:html_logo},
                                {name:"CSS 3",logo:css_logo},
                               
                            ]}
                        />
            </div>

        )
    }

    toggleCategories = ()=>{
        switch (this.state.activeTab) {
            case 1:
                   return this.renderPersonalProject()
            break;
            case 0:
                  return  this.renderProProject()
            break;
            
        
        }
    }

    render() {
        return (
            <div className="category-taba">
                    <Tabs activeTab={this.state.activeTab}onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                        <Tab>Profesionelle</Tab>
                        <Tab>Personel</Tab>
                        
                    </Tabs>
                    <section > 
                        <Grid >
                            <Cell col={12}>
                                <div className="content">
                                    {this.toggleCategories()}
                                </div>
                            </Cell>
                        </Grid>
                    </section>
            </div>
        )
    }
}
