import React from 'react'
import './Citation.css'
import { user, mini_ep, mini_pass } from '../../Images/Images'
import SocialMenu from '../ProfileCard/SocialMenu'
import { Link } from 'react-router-dom'
export default function Citation() {
    return (
        <div className="div-wave">
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
            <div className="citation-header">
                <img src={user} alt="profile-image" className="profile-image" />
                <div className="content-info">
                    <h2>Salut, je m'appelle Adel<br/>Développeur Full Stack web & mobile</h2>
                    <h3>chez PassVital <img src={mini_pass} /></h3>
                </div>
            </div>
                <Link to="aboutme" style={{textDecoration:"none"}}>
                <a className="link readmore" href="#">Apprendre plus</a>
                </Link>
                <a className="link getcv" href="/cv_3.4.pdf" target="_blank">Obtenir mon cv</a>
                
               <SocialMenu />
                    
            </div>
        </div>
    )
}
