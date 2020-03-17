import React, { Component } from 'react'
import './Timeline.css'
import Experience from '../Experience'
import { logoEp,logoBea,logoBuileo, html_logo, symfony, api_logo, php, js_logo, css_logo, jquery, bootstrap, react, docker, webpack, git, mysql_logo, codeigniter_logo } from '../../Images/Images'
import { height } from 'dom-helpers'
import { Chip } from 'react-mdl'

const experiences = [
  {
      startDate:"Novembre 2018",
      endDate:"En cours",
      jobName:"Développeur Web/Mobile Full Stack",
      jobDescription:"Assurer le développement du site e-recrutement (l’ajout de nouvelles fonctionnalités ,correction des bugs https://www.emploipartner.com/fr/. ,Développement des applications interne de l’entreprise emploipartner (l’ajout de nouvelles fonctionnalités ,mise a jour des noyaux et la correction des bugs)",
      img:logoEp,
      imgWidth:80,
      imgHeight:80,
      tech:[{name:"Symfony",logo:symfony},{name:"PHP",logo:php},{name:"Api Platform",logo:api_logo},{name:"JavaScript",logo:js_logo},{name:"HTML",logo:html_logo},{name:"CSS",logo:css_logo},{name:"JQuery",logo:jquery},{name:"Bootstrap",logo:bootstrap},{name:"React",logo:react},{name:"React Native",logo:react},{name:"Docker",logo:docker},{name:"Webpack",logo:webpack},{name:"git",logo:git},{name:"Mysql",logo:mysql_logo}]
  },
  {
      startDate:"Ferverie",
      endDate:"juillet 2018",
      jobName:"Stagiaire Développeur web full stack",
      jobDescription:"Développement d’une application web pour la gestion des œuvres sociales (prestations,primes,pres,Dons) des employees  la banque d’extérieur d ‘Algérie .",
      img:logoBea,
      imgWidth:90,
      imgHeight:70,
      tech:[{name:"Codeigniter",logo:codeigniter_logo},{name:"PHP",logo:php},{name:"JavaScript",logo:js_logo},{name:"HTML",logo:html_logo},{name:"CSS",logo:css_logo},{name:"JQuery",logo:jquery},{name:"Bootstrap",logo:bootstrap},{name:"Mysql",logo:mysql_logo}]

  }
]


export default class Timeline extends Component {
    render() {
        return (
            <div className="timeline">
        <ul>
         {
           experiences.map((item,index) =>{
              return(
                  <li key={index}>
                      <div className="timeline-content">
                          <h3>{item.jobName}</h3>
                          <p>
                            <img src={item.img} width={item.imgWidth} height={item.imgHeight}  style={{float:"left",marginRight:20}}/>
                            {item.jobDescription}
                          </p>
                          <div style={{marginTop:10}}>
                              <h6 style={{fontWeight:"800"}}>Technologees utilisees:</h6>
                            {
                              item.tech.map((tech,ind)=>(
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
                      <div className="timeline-time">
           <h4>{item.startDate} - {item.endDate}</h4>
                      </div>
                    </li>

              )   
           })
         }          
          <div style={{clear:"both"}}></div>
        </ul>
    </div>
        )
    }
}
