import React from 'react'
import { logoKhedemni, node,logoBuileo, react,webpack,git,mysql_logo,docker, js_logo, php, vue,symfony, api_logo, jquery, html_logo, css_logo, bootstrap, firebase, react_logo, php_logo, symfony_logo, rn_logo, logoEp, jquery_logo, jquery_logo2, git_logo } from '../../Images/Images'
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
            <div className="box MRow"><img src={react} className="item210"/></div>
            <div className="box"> <img src={js_logo}  className="item100"/></div>
            <div className="box MColumn"> <img src={node}  className="item400x210"/></div>
            <div className="box MColumn"> <img src={jquery_logo2}  className="item400x210"/></div>
            <div className="box"> <img src={docker}  className="item100"/></div>
            <div className="box"> <img src={symfony}  className="item100"/></div>
            <div className="box MRow"> <img src={php_logo}  className="item180x130"/></div>
            <div className="box"> <img src={git_logo}  className="item180x80"/></div>
            <div className="box"> <img src={css_logo}  className="item100"/></div>
            <div className="box"> <img src={html_logo}  className="item100"/></div>
            <div className="box"> <img src={api_logo}  className="item100"/></div>
          
        </div>
    )
}
