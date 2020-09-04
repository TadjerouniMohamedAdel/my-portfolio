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
                    <h2>Hi,I'm Adel<br/>Full Stack Developer web & mobile</h2>
                    <h3>at Emploipatner.com <img src={mini_ep} /></h3>
                </div>
            </div>
                <a className="readmore" href="#">Apprendre plus</a>
                <a className="getcv" href="#">obtenir mom cv</a>
                
               <SocialMenu />
                    
            </div>
        </div>
    )
}
