import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import { logoUalger, logoEp, logoBuileo, logoBea, user2 } from '../Images/Images'


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
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img src={user2}
                                 alt="avatar"
                                 style={{height:'200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Adel Mohamed Tadjerouni</h2>
                        <h4 style={{color:'gray'}}>Developer</h4>
                        <hr style={{borderTop:'3px solid #833fb2',width:"50%"}}/>
                        <p>
                            Irure anim non laborum adipisicing laborum quis anim dolore occaecat laborum ad pariatur non. Ipsum excepteur mollit dolor sit sit laboris id ex. Enim voluptate pariatur nulla commodo ullamco nostrud ut veniam culpa est eu irure culpa.
                        </p> 
                        <hr style={{borderTop:'3px solid #833fb2',width:"50%"}}/>
                        <h5>Address</h5>
                        <p>
                            3000 Site bouninan Alger Algerie
                        </p>
                        <h5>Phone</h5>
                        <p>(123) 456-7890</p>
                        <h5>Email</h5>
                        <p>mohnagato@gmail.com</p>
                        <h5>Web</h5>
                        <p>myWebsite.com</p>
                        <hr style={{borderTop:'3px solid #833fb2',width:"50%"}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
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
