import React from 'react'
import { user, mini_ep, mini_pass, cleverzone_mini } from '../../Images/Images'
import SocialMenu from '../ProfileCard/SocialMenu'
import { Link } from '@material-ui/core'
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
                    <h3>chez Cleverzone <img src={cleverzone_mini} /></h3>
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
