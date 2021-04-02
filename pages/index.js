import React from 'react'
import Profile from '../components/Profile/Profile';
import WaveButton from '../components/WaveButton/WaveButton';
import LandingProject from '../components/LandingProject/LandingProject';
import LandingSkill from '../components/LandingSkills/LandingSkill';
import { Chip } from 'react-mdl/lib/Chip'
import MainLayout from '../Layouts/MainLayout';
import { logoKhedemni, node,logoBuileo, js_dev,react,webpack,git,mysql_logo,docker, js_logo, php, vue,symfony, api_logo, jquery, html_logo, css_logo, bootstrap, firebase, react_logo, php_logo, symfony_logo, rn_logo, logoEp, dev_skill, amt2, pass, material } from '../Images/Images'
const lastExperience ={
  startDate:"Novembre 2020",
  endDate:"En cours",
  title:"Développeur Full Stack",
  description:"Assurer le développement de la plateforme e-santé pass vital ainsi que les applications internes et externes de la société pass vital",
  logo:pass,
  imgWidth:80,
  imgHeight:80,
  tech:[{name:"Api Platform",logo:api_logo},{name:"Symfony",logo:symfony},{name:"React",logo:react},{name:"PHP",logo:php},{name:"JavaScript",logo:js_logo},{name:"HTML",logo:html_logo},{name:"CSS",logo:css_logo},{name:"Material Ui",logo:material},{name:"Docker",logo:docker},{name:"Webpack",logo:webpack},{name:"git",logo:git},{name:"Mysql",logo:mysql_logo}]
}



export default function index() {
  return (
    <MainLayout>
      <div className="landing-grid">
                    <div className="wave-section">
                        <div className="wave wave1"></div>
                        <div className="wave wave2"></div>
                        <div className="wave wave3"></div>
                        <div className="wave wave4"></div>
                        <Profile />
                        
                    </div>
                    <div className="landing-skills">
                        <h3>
                        Compétences Principales
                        </h3>
                        <div className="landing-skills-container">
                        
                            <div className="div-landing-skill">
                                <LandingSkill />
                            </div>
                            <div className="img-landing-skill">
                                <img src={dev_skill}  />
                            </div>
                        </div>

                        <div style={{marginTop:30}}>
                            <WaveButton 
                                label="Voir toutes les compétences"
                                path="/resume"
                            />
                        </div>
                    </div>
                    <LandingProject />
                    <div className="last-section-landing">
                    <div className="landing-last-experience">
                                <h3>Dernière Expérience</h3>
                                <div className="last-experience">
                                    <h4>{lastExperience.title}</h4>
                                    <span className="time">
                                        {lastExperience.startDate } - {lastExperience.endDate}
                                    </span>
                                    <img src={lastExperience.logo} width={100} heigh={100} style={{float:"left",marginTop:-5}}/>
                                    <p className="description">
                                        {lastExperience.description}
                                    </p>
                                    <div style={{marginTop:10}}>
                                        <h6 style={{fontWeight:"800"}}>Technologees utilisees:</h6>
                                        {
                                        lastExperience.tech.map((tech,ind)=>(
                                            <div style={{display:"inline",flex:1,margin:5}} key={ind+"l"}>
                                                <Chip>
                                                <img src={tech.logo} className="chip-image" style={{marginRight:3}}/>
                                                {tech.name}
                                                </Chip>
                                            </div>

                                        ))
                                        }
                                    </div>
                                </div>
                                  <div>
                                      <WaveButton
                                        label="Voir toutes les expériences" 
                                        path="/resume"
                                      />
                                  </div>
                    </div>
                    </div>
                </div>
    </MainLayout>
  )
}
