import React from 'react'
import './Biography.css'
import { prof } from '../../Images/Images'
export default function Biography() {
    return (
        <div className="card-bio">
            <div className="imgBx">
                <img src={prof} />
            </div>
            <div className="contentBx">
                <div className="content">
                    <h2>
                       Adel Mohamed Tadjerouni
                    </h2>
                    <p>
                    Je suis un développeur full stack passionné principalement par le web mais aussi pour le développement mobile desktop et le Devops en troisième degré .
                    je suis du type autodidacte, j'adore l'autoapprentissage et j'appuie sur cette faculté pour améliorer mes compétences techniques.
                    <br/>
                    Ma grande motivation est d'être un full stack qui maîtrise très bien le FRONT et BACK END en même temps .
                    même si c'est difficile de se concentrer sur les deux, je travaille et je me forme tous les jours pour atteindre cet objectif
                    </p>
                </div>
            </div>
        </div>
    )
}
