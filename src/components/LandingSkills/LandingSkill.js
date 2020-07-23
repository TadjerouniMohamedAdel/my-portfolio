import React from 'react'
import { logoKhedemni, node,logoBuileo, react,webpack,git,mysql_logo,docker, js_logo, php, vue,symfony, api_logo, jquery, html_logo, css_logo, bootstrap, firebase, react_logo, php_logo, symfony_logo, rn_logo, logoEp, jquery_logo, jquery_logo2, git_logo } from '../../Images/Images'
import './LandingSkill.css'
const mainSkills = [
    {name:"JavaScript",logo:js_logo,class:"a"},
    {name:"NodeJs",logo:node,class:"b"},
    {name:"React",logo:react_logo,class:"c"},
    {name:"PHP",logo:php_logo,class:"d"},
    {name:"Symfony",logo:symfony_logo,class:"e"},
    {name:"Css",logo:css_logo,class:"f"},
    {name:"HTML",logo:html_logo,class:"g"},
    {name:"React Native",logo:rn_logo,class:"h"},
]


export default function LandingSkill() {
    
    return (
        <div className="container-masonry">
            <div className="box MRow"><img src={react}  width={200} height={200}/></div>
            <div className="box"> <img src={js_logo}  width={100} height={100}/></div>
            <div className="box MColumn"> <img src={node}  width={300} height={200}/></div>
            <div className="box MColumn"> <img src={jquery_logo2}  width={400} height={180}/></div>
            <div className="box "> <img src={docker}  width={100} height={100}/></div>
            <div className="box "> <img src={symfony}  width={100} height={100}/></div>
            <div className="box MRow"> <img src={php_logo}  width={200} height={150}/></div>
            <div className="box"> <img src={git_logo}  width={200} height={100}/></div>
            <div className="box"> <img src={css_logo}  width={100} height={100}/></div>
            <div className="box "> <img src={html_logo}  width={100} height={100}/></div>
            <div className="box"> <img src={api_logo}  width={100} height={100}/></div>
          
        </div>
    )
}
