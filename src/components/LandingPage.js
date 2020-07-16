import React, { Component } from 'react'

import Profile from './ProfileCard/Profile'
import ProjectCard from './ProjectCard/ProjectCard'
import { logoKhedemni, logoBuileo, react, js_logo, php, vue,symfony, api_logo, jquery, html_logo, css_logo, bootstrap, firebase } from '../Images/Images'

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
                        <div>
                                Laborum aliquip dolor do ad commodo anim Lorem mollit voluptate. Aliquip commodo nisi laboris nulla voluptate amet ex ea fugiat dolore nulla tempor. Officia sunt velit laboris ea labore consequat commodo do. Labore minim fugiat ea eu deserunt culpa qui tempor. Reprehenderit deserunt enim est dolore eu ut nisi.

Non enim elit dolor quis reprehenderit reprehenderit cupidatat ea dolore. Est reprehenderit Lorem amet adipisicing commodo aute sint nisi. Irure reprehenderit sunt quis incididunt elit pariatur labore.

Magna excepteur commodo Lorem exercitation. Sit nisi ipsum ea sint dolor anim culpa. Exercitation sint aliquip sit et eu esse irure duis adipisicing pariatur ullamco consequat anim et. Lorem cillum laborum duis nulla tempor cupidatat magna velit dolore sit ex qui ullamco exercitation.

Incididunt aliquip elit et in consequat sit aliquip. Lorem amet aliqua excepteur aute adipisicing pariatur dolore esse nostrud excepteur in. Eu adipisicing proident ex quis adipisicing enim veniam laboris tempor mollit cupidatat. Ullamco est sint incididunt nulla laboris nostrud labore laboris Lorem. Dolor fugiat velit magna culpa Lorem consequat enim qui adipisicing duis aliqua ipsum laboris. Voluptate et exercitation nostrud dolore velit adipisicing incididunt ullamco et.

Cupidatat laborum aliqua sunt et reprehenderit nostrud irure consectetur consequat officia. Sint incididunt nisi minim velit cupidatat esse officia et. Sint tempor cillum non velit pariatur ea non ullamco culpa do ut adipisicing ullamco ipsum. Aute eu officia et aute exercitation commodo ipsum. Ipsum deserunt officia irure cupidatat duis ullamco incididunt aliqua non laborum.

Ut ea non occaecat amet fugiat sint. Anim fugiat dolore amet ex quis labore voluptate voluptate magna. Incididunt veniam esse dolore aliquip eiusmod.Ipsum aute voluptate incididunt mollit laborum officia consequat labore ut sit nisi. Ad culpa dolor laborum reprehenderit tempor culpa incididunt. Sint veniam non nulla exercitation Lorem enim elit consectetur sunt voluptate amet.

Et ipsum tempor consectetur nisi consequat. Id cupidatat dolore ut incididunt ad cillum tempor non consectetur duis. Non fugiat nulla et pariatur labore aliquip dolore laboris.
                        </div>    
                    </div>
                        
                </div>
                
        )
    }
}
