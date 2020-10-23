import React, { Component,useState } from 'react'
import {Grid,Cell,Card,CardTitle,CardActions,Button,CardMenu,IconButton, CardText} from 'react-mdl'
import { logoKhedemni, artelyes,material,redux_i,logoBuileo, react, js_logo, php, vue,symfony, api_logo, jquery, html_logo, css_logo, bootstrap, firebase, react_logo, php_logo, symfony_logo, logoEp, lyricBoot } from '../Images/Images'
import ProjectCard from './ProjectCard/ProjectCard';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import './Projects.css'
const  Projects = (props)=> {
       
        const [activeTab,setActiveTab] = useState(0)
        


    const renderProProject= ()=>{
        return(
            <div className="projects-grid">
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
                            <ProjectCard 
                                title="Buileo CRM"
                                type="Professional Project"
                                description="Buileo CRM est l'outil qui va vous permettre de mieux gérer votre relation client et de mieux contrôler le processus de vente de votre entreprise.Grâce à ses différents modules, vous aurez une visibilité sur l’ensemble de vos activités."
                                logo={logoBuileo}
                                live="https://www.buileo.com/"
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
                                live="https://www.emploipartner.com/fr/"
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

    const renderPersonalProject= ()=>{
        return(
            <div className="projects-grid">
                <ProjectCard 
                            key="prs-artelyes"
                            title="Artelyes"
                            type="Personal Project"
                            live="https://artelyes.netlify.app/"
                            github="https://github.com/TadjerouniMohamedAdel/artelyes"
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
            
            <ProjectCard
                            key="prs-lyric-boot" 
                            title="Lyric Boot"
                            type="Personal Project"
                            live="https://lyric-boot.netlify.app/"
                            github="https://github.com/TadjerouniMohamedAdel/lyric-boot"
                            description="Lyric Boot est une application web qui sert à récupérer lyric de vos chansons préfère."
                            logo={lyricBoot}
                            classes="lyric-boot"
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

    const toggleCategories = ()=>{
        switch (activeTab) {
            case 1:
                   return renderPersonalProject()
            break;
            case 0:
                  return  renderProProject()
            break;
            
        
        }
    }

        return (
            <div >
                    {/* <Tabs activeTab={activeTab}onChange={(tabId) => setState({activeTab:tabId})} ripple>
                        <Tab>Profesionelle</Tab>
                        <Tab>Personel</Tab>
                        
                    </Tabs> */}
                    <div className="category-taba">
                    <Tabs
                    className="tabs"
                    value={activeTab}
                    onChange={(e,tabId) => setActiveTab(tabId)}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    textColor="secondary"
                    aria-label="icon label tabs example"
                >
                    <Tab icon={<WorkIcon />} label="Profesionelle" />
                    <Tab icon={<PersonIcon />} label="Personel" />
                </Tabs>

                    </div>
                    <section > 
                        <Grid >
                            <Cell col={12}>
                                <div className="content">
                                    {toggleCategories()}
                                </div>
                            </Cell>
                        </Grid>
                    </section>
            </div>
        )
    
}
export default Projects;