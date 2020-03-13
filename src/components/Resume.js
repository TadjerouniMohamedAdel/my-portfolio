import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import { logoUalger, logoEp, logoBuileo, logoBea, user2, react_logo, redux_logo, js_logo, html_logo, jquery_logo, bootstrap_logo, css_logo, php_logo, codeigniter_logo, symfony_logo, api_logo, docker_logo, git_logo, webpack_logo, mysql_logo, arch_logo, rn_logo } from '../Images/Images'
import SkillItem from './Skills/SkillItem'
import {Tabs , Tab,Card,CardTitle,CardActions,Button,CardMenu,IconButton, CardText} from 'react-mdl'


const experiences = [
    {
        startYear:2018,
        endYear:2020,
        jobName:"Développeur Web/Mobile Full Stack",
        jobDescription:"Assurer le développement du site e-recrutement (l’ajout de nouvelles fonctionnalités ,correction des bugs https://www.emploipartner.com/fr/. ,Développement des applications interne de l’entreprise emploipartner (l’ajout de nouvelles fonctionnalités ,mise a jour des noyaux et la correction des bugs)",
        img:logoEp,
        imgWidth:80,
        imgHeight:90,
    },
    {
        startYear:2019,
        endYear:2019,
        jobName:"Developpeur web Full Stack (freelance)",
        jobDescription:"Développer des solutions logicielles pour les clients de buileo principalement des solutions CRM",
        img:logoBuileo,
        imgWidth:120,
        imgHeight:40
    },
    {
        startYear:2018,
        endYear:2018,
        jobName:"Stagiaire Développeur web full stack",
        jobDescription:"Développement d’une application web pour a gestion des œuvres sociales pour la banque d’extérieur d ‘Algérie .",
        img:logoBea,
        imgWidth:90,
        imgHeight:70
    }
]



export default class Resume extends Component {
    
    constructor(props){
        super(props);
        this.state = { activeTab:0 }
        
    }

    renderMobile = ()=>{
        return (
            <div className="skill-grid">
                <div className="skill-item" key={1}>
                <SkillItem 
                        skillName="React"
                        skillImage={rn_logo}
                        color="#449ccf"
                        imageWidth={130}
                        imageHeight={100}
                        percent="85"
                    />
                </div>
            </div>
        )
    }

    renderDevops  = ()=>{
        return (
            <div className="skill-grid">
                <div className="skill-item" key={2}>
                    <SkillItem 
                        skillName="React"
                        skillImage={docker_logo}
                        color="#449ccf"
                        imageWidth={100}
                        imageHeight={110}
                        percent="85"
                        />
                </div>
                <div className="skill-item" key={3}>
                    <SkillItem 
                        skillName="React"
                        skillImage={git_logo}
                        color="#DE4C35"
                        imageWidth={90}
                        imageHeight={50}
                        percent="85"
                    />

                </div>
                <div className="skill-item" key={4}>
                    <SkillItem 
                        skillName="React"
                        skillImage={webpack_logo}
                        color="#449ccf"
                        imageWidth={110}
                        imageHeight={110}
                        percent="85"
                    />
                </div>
                <div className="skill-item" key={5}>
                    <SkillItem 
                        skillName="React"
                        skillImage={mysql_logo}
                        color="#FD972E"
                        imageWidth={90}
                        imageHeight={80}
                        percent="85"
                    />
                </div>
                <div className="skill-item" key={6}>
                    <SkillItem 
                        skillName="React"
                        skillImage={arch_logo}
                        color="#1694D1"
                        imageWidth={90}
                        imageHeight={80}
                        percent="85"
                    />
                </div>
            </div>
        )
    }

    renderBackEnd = ()=>{
        return(
            <div className="skill-grid">
                <div className="skill-item" key={7}>
                    <SkillItem 
                        skillName="React"
                        skillImage={php_logo}
                        color="#767BB3"
                        imageWidth={90}
                        imageHeight={80}
                        percent="85"
                    />
                </div>
                <div className="skill-item" key={8}>
                    <SkillItem 
                        skillName="React"
                        skillImage={codeigniter_logo}
                        color="#EE4423"
                        imageWidth={90}
                        imageHeight={80}
                        percent="85"
                    />
                </div>
                <div className="skill-item" key={9}>
                    <SkillItem 
                        skillName="React"
                        skillImage={symfony_logo}
                        color="#fff"
                        imageWidth={80}
                        imageHeight={90}
                        percent="85"
                    />
                </div>
                <div className="skill-item" key={10}>
                    <SkillItem 
                        skillName="React"
                        skillImage={api_logo}
                        color="#BA1C1B"
                        imageWidth={100}
                        imageHeight={90}
                        percent="85"
                    />
                </div>
            </div>
                )
            }


    renderFrontEnd = ()=>{
        return(
            <div className="skill-grid">
                <div className="skill-item" key={11}>
                    <SkillItem 
                        skillName="React"
                        skillImage={react_logo}
                        color="#449ccf"
                        imageWidth={90}
                        imageHeight={90}
                        percent="85"
                    />
                </div>
                <div className="skill-item" key={12}>
                    <SkillItem
                        percent="80" 
                        skillName="Redux"
                        skillImage={redux_logo}
                        color="#943ab8"
                        imageWidth={130}
                        imageHeight={100}
                    />
                </div>
                <div className="skill-item" key={13}>
                    <SkillItem
                        percent="90" 
                        skillName="JS"
                        skillImage={js_logo}
                        color="#cab818"
                        imageWidth={90}
                        imageHeight={80}
                    />
                </div>
                <div className="skill-item" key={14}>
                    <SkillItem
                        percent="90" 
                        skillName="React"
                        skillImage={jquery_logo}
                        color="#449ccf"
                        imageWidth={130}
                        imageHeight={140}
                    />
                </div>
                <div className="skill-item" key={15}>
                    <SkillItem
                        percent="100" 
                        skillName="React"
                        skillImage={bootstrap_logo}
                        color="#62478A"
                        imageWidth={110}
                        imageHeight={100}
                    />
                </div>
                <div className="skill-item" key={16}>
                    <SkillItem
                        percent="75" 
                        skillName="React"
                        skillImage={css_logo}
                        color="#449ccf"
                        imageWidth={80}
                        imageHeight={100}
                    />
                </div>
                <div className="skill-item" key={17}>
                    <SkillItem
                        percent="95" 
                        skillName="React"
                        skillImage={html_logo}
                        color="#E54D26"
                        imageWidth={80}
                        imageHeight={100}
                    />
                </div>
            </div>
        )
    }
    
    toggleCategories = ()=>{
        switch (this.state.activeTab) {
            case 0:
                return this.renderFrontEnd()
            break;
            case 1:
                   return this.renderBackEnd()
            break;
            case 2:
                return this.renderMobile()
            break;
            case 3:
                return this.renderDevops()
            break;
        
        }
    }
    
    
    
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={6}>
                        
                        <h2 style={{paddingTop:'2em'}}>Skills</h2>
                        <div className="category-taba">
                    <Tabs activeTab={this.state.activeTab}onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                        <Tab>Front End</Tab>
                        <Tab>Back End</Tab>
                        <Tab>Mobile</Tab>
                        <Tab>Deveops & Tools</Tab>
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
                      
                       
                           
                       
                    </Cell>
                    <Cell className="resume-right-col" col={6}>
                      <h2>Education</h2>
                      <Education
                        startYear={2015}
                        endYear={2018}
                        img={logoUalger}
                        schoolName="Université d’Alger 1"
                        schoolDescription="licence en système d’information et génie
                        logiciel Université d’Alger 1 ."
                      />
                      
                      <hr style={{borderTop:'3px solid #e22947'}}/>
                      
                      {
                          experiences.map((item,index)=>{
                              return(
                                  <Experience
                                    key={index} 
                                    startYear={item.startYear}
                                    endYear={item.endYear}
                                    jobName={item.jobName}
                                    jobDescription={item.jobDescription}
                                    img={item.img}
                                    imgWidth={item.imgWidth}
                                    imgHeight={item.imgHeight}
                                  />

                              )
                          })
                      }
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills 
                            skill="javascript"
                            progress="90"
                        />
                        <Skills 
                            skill="Reactjs"
                            progress="90"
                        />
                        <Skills 
                            skill="React Native"
                            progress="78"
                        />
                        <Skills 
                            skill="php"
                            progress="90"
                        />
                        <Skills 
                            skill="Symfony"
                            progress="90"
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}
