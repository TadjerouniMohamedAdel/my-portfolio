import React from 'react'
import './Citation.css'
import { user, mini_ep } from '../../Images/Images'
import SocialMenu from '../ProfileCard/SocialMenu'
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
                    <h3>chez Emploipatner.com <img src={mini_ep} /></h3>
                </div>
            </div>
                <a className="link readmore" href="#">Apprendre plus</a>
                <a className="link getcv" href="/cv_3.3.pdf" target="_blank">Obtenir mon cv</a>
                
               <SocialMenu />
                    
            </div>
        </div>
    )
}
