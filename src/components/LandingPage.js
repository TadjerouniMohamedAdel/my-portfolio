import React, { Component } from 'react'

import Profile from './ProfileCard/Profile'
import ProjectCard from './ProjectCard/ProjectCard'
import { logoKhedemni, node,logoBuileo, react, js_logo, php, vue,symfony, api_logo, jquery, html_logo, css_logo, bootstrap, firebase, react_logo, php_logo, symfony_logo, rn_logo } from '../Images/Images'
import Tooltip from 'react-mdl/lib/Tooltip'
import WaveButton from './WaveButton/WaveButton'


const mainSkills = [
    {name:"JavaScript",logo:js_logo},
    {name:"NodeJs",logo:node},
    {name:"React",logo:react_logo},
    {name:"PHP",logo:php_logo},
    {name:"Symfony",logo:symfony_logo},
    {name:"Css",logo:css_logo},
    {name:"HTML",logo:html_logo},
    {name:"React Native",logo:rn_logo},

]


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
                            Main Skills
                        </h3>
                        <div className="landing-skills-card">
                            <div className="landing-skills">
                                {
                                    mainSkills.map((item,index)=>{
                                        return(
                                            <div className="skill-landing-item">
                                                <Tooltip label={item.name}>
                                                    <img src={item.logo} width={110} height={100}/>
                                                </Tooltip>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <WaveButton 
                                label="View all skills"
                            />
                        </div>
                    </div>
                    <div className="landing-projects-container">
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
                        />
                    </div>
                    <div className="landing-last-experience">
                        <h3>Last Experience</h3>
                    </div>            
                 
                </div>
                        
                
        )
    }
}
