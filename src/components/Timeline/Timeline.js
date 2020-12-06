import React, { Component } from 'react'
import './Timeline.css'
import Experience from '../Experience'
import { logoEp,logoBea,logoBuileo, html_logo,material,symfony, api_logo, php, js_logo, css_logo, jquery, bootstrap, react, docker, webpack, git, mysql_logo, codeigniter_logo, pass } from '../../Images/Images'
import { height } from 'dom-helpers'
import { Chip } from 'react-mdl'

const experiences = [
  {
    startDate:"Novembre 2020",
    endDate:"En cours",
    title:"Développeur Full Stack",
    jobDescription:"Assurer le développement de la plateforme e-santé pass vital ainsi que les applications internes et externes de la société pass vital",
    img:pass,
    imgWidth:80,
    imgHeight:80,
    className:"img90x70",
    tech:[{name:"Api Platform",logo:api_logo},{name:"Symfony",logo:symfony},{name:"React",logo:react},{name:"PHP",logo:php},{name:"JavaScript",logo:js_logo},{name:"HTML",logo:html_logo},{name:"CSS",logo:css_logo},{name:"Material Ui",logo:material},{name:"Docker",logo:docker},{name:"Webpack",logo:webpack},{name:"git",logo:git},{name:"Mysql",logo:mysql_logo}]
},
  {
      startDate:"Novembre 2018",
      endDate:"Octobre 2020",
      jobName:"Développeur Full Stack Web/Mobile",
      jobDescription:"Assurer le développement du site e-recrutement (l’ajout de nouvelles fonctionnalités ,correction des bugs https://www.emploipartner.com/fr/. ,Développement des applications interne de l’entreprise emploipartner (l’ajout de nouvelles fonctionnalités ,mise a jour des noyaux et la correction des bugs)",
      img:logoEp,
      imgWidth:80,
      imgHeight:80,
      className:"img80x80",
      tech:[{name:"Symfony",logo:symfony},{name:"PHP",logo:php},{name:"Api Platform",logo:api_logo},{name:"JavaScript",logo:js_logo},{name:"HTML",logo:html_logo},{name:"CSS",logo:css_logo},{name:"JQuery",logo:jquery},{name:"Bootstrap",logo:bootstrap},{name:"React",logo:react},{name:"React Native",logo:react},{name:"Docker",logo:docker},{name:"Webpack",logo:webpack},{name:"git",logo:git},{name:"Mysql",logo:mysql_logo}]
  },
  {
      startDate:"Ferverie",
      endDate:"juillet 2018",
      jobName:"Stagiaire Développeur web full stack",
      jobDescription:"Développement d’une application web pour la gestion des œuvres sociales (prestations,primes,pres,Dons) des employees  la banque d’extérieur d ‘Algérie .",
      img:logoBea,
      imgWidth:90,
      className:"img90x70",
      imgHeight:70,
      tech:[{name:"Codeigniter",logo:codeigniter_logo},{name:"PHP",logo:php},{name:"JavaScript",logo:js_logo},{name:"HTML",logo:html_logo},{name:"CSS",logo:css_logo},{name:"JQuery",logo:jquery},{name:"Bootstrap",logo:bootstrap},{name:"Mysql",logo:mysql_logo}]

  }
]


export default class Timeline extends Component {
    render() {
        return (
            <div className="timeline ">
              <h2 className="section-title-resume" style={{textAlign:"center"}}>Expériences</h2>
        <ul>
         {
           experiences.map((item,index) =>{
              return(
                  <li key={index}>
                      <div className="timeline-time">
           <h4>{item.startDate} - {item.endDate}</h4>
                      </div>
                      <div className="timeline-content ">
                          <h3>{item.jobName}</h3>
                          <p>
                            <img src={item.img} className={item.className}   style={{float:"left",marginRight:20}}/>
                            {item.jobDescription}
                          </p>
                          <div style={{marginTop:10}}>
                              <h6 style={{fontWeight:"800"}}>Technologees utilisees:</h6>
                            {
                              item.tech.map((tech,ind)=>(
                                <div style={{display:"inline",flex:1,margin:5}} key={ind+"l"}>
                                    <Chip>
                                      <img className="tech-chip" src={tech.logo} />
                                      {tech.name}
                                    </Chip>
                                  </div>

                              ))
                            }
                          </div>
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
