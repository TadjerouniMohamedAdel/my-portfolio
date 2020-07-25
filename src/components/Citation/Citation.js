import React from 'react'
import './Citation.css'
import { user } from '../../Images/Images'
export default function Citation() {
    return (
        <div className="div-wave">
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
            <div className="citation-header">
                <img src={user} alt="profile-image" className="profile-image" />
            </div>
                <p>
                    <i className="fas fa-quote-left"></i>
                        Il n y a rien de plus insperant pour moi plus que l'apprentissage ,
                        la situation dans laquelle on a besoin de realiser une chose mais on ignore comment,
                        on cherche ,on apprend et on le fait , 
                        c est magique.
                        l'apprentissage est pratiquement  la competance ultime. mais je pense que ca nessaicite un autre element cle la curiosite 
                    <i className="fas fa-quote-right"></i>
                    </p>
                <a href="#">Read More</a>
            </div>
        </div>
    )
}
