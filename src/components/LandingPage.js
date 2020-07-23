import React, { Component } from 'react'

import Profile from './ProfileCard/Profile'
import ProjectCard from './ProjectCard/ProjectCard'
import { logoKhedemni, node,logoBuileo, react,webpack,git,mysql_logo,docker, js_logo, php, vue,symfony, api_logo, jquery, html_logo, css_logo, bootstrap, firebase, react_logo, php_logo, symfony_logo, rn_logo, logoEp } from '../Images/Images'
import Tooltip from 'react-mdl/lib/Tooltip'
import WaveButton from './WaveButton/WaveButton'
import { Chip } from 'react-mdl/lib/Chip'
import Citation from './Citation/Citation'
import DivWave from './DivWave/DivWave'
import LandingSkill from './LandingSkills/LandingSkill'










const lastExperience ={
    startDate:"Novembre 2018",
    endDate:"En cours",
    title:"Développeur Web/Mobile Full Stack",
    description:"Assurer le développement du site e-recrutement (l’ajout de nouvelles fonctionnalités ,correction des bugs https://www.emploipartner.com/fr/. ,Développement des applications interne de l’entreprise emploipartner (l’ajout de nouvelles fonctionnalités ,mise a jour des noyaux et la correction des bugs)",
    logo:logoEp,
    imgWidth:80,
    imgHeight:80,
    tech:[{name:"Symfony",logo:symfony},{name:"PHP",logo:php},{name:"Api Platform",logo:api_logo},{name:"JavaScript",logo:js_logo},{name:"HTML",logo:html_logo},{name:"CSS",logo:css_logo},{name:"JQuery",logo:jquery},{name:"Bootstrap",logo:bootstrap},{name:"React",logo:react},{name:"React Native",logo:react},{name:"Docker",logo:docker},{name:"Webpack",logo:webpack},{name:"git",logo:git},{name:"Mysql",logo:mysql_logo}]
}

export default class LandingPage extends Component {
    render() {
        return (
                <div className="landing-grid">
                    <div className="wave-section">
                        <div className="wave wave1"></div>
                        <div className="wave wave2"></div>
                        <div className="wave wave3"></div>
                        <div className="wave wave4"></div>
                        <Profile />
                    </div>
                    <div className="landing-skills-container">
                        <h3>
                            Some Skills
                        </h3>
                            <LandingSkill />
                            <WaveButton 
                                label="View all skills"
                                path="/resume"
                            />
                    </div>
                    <div className="landing-projects-container">
                    <DivWave>
                        <h3>
                            Last Projects
                        </h3>
                        <div className="landing-projects">
                            <ProjectCard 
                                title="Khedemni Mobile"
                                type="Professional Project"
                                description="Amet reprehenderit sit Lorem nostrud proident amet aute do tempor consequat. Magna ex ex proident consectetur sunt. Dolor in laborum qui minim magna veniam cillum"
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
                                description="Amet reprehenderit sit Lorem nostrud proident amet aute do tempor consequat. Magna ex ex proident consectetur sunt. Dolor in laborum qui minim magna veniam cillum"
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
                            label="View all projects"
                            path="/projects"
                        />
                    </DivWave>
                    </div>
                    
                    <div className="landing-last-experience">
                        <h3>Last Experience</h3>
                        <div className="last-experience">
                            <h4>{lastExperience.title}</h4>
                            <span className="time">
                                {lastExperience.startDate } - {lastExperience.endDate}
                            </span>
                            <img src={lastExperience.logo} width={100} heigh={100} style={{float:"left",marginTop:-10}}/>
                            <p className="description">
                                {lastExperience.description}
                            </p>
                            <div style={{marginTop:10}}>
                              <h6 style={{fontWeight:"800"}}>Technologees utilisees:</h6>
                            {
                              lastExperience.tech.map((tech,ind)=>(
                                <div style={{display:"inline",flex:1,margin:5}} key={ind+"l"}>
                                    <Chip>
                                      <img src={tech.logo} width={23} height={25} style={{marginRight:3}}/>
                                      {tech.name}
                                    </Chip>
                                  </div>

                              ))
                            }
                          </div>
                        </div>
                    </div>
                    <div className="about-me-landing">
                        <h3>About Me</h3>
                        <Citation />            
                    </div>
                </div>
                        
                
        )
    }
}
