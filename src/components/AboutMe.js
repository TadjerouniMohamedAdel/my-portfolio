import React, { Component } from 'react'
import './AboutMe.css'
import InterestItem from './InterestItem/InterestItem'
import { manga, user, prof, programming, reading, music, football, chess } from '../Images/Images'
import Biography from './Biography/Biography'
import Education from './Education/Education'
export default class AboutMe extends Component {
    render() {
        return (
            <div className="about-container">
                 <div className="about-section">
                    <h3 className="about-section-title">
                        Full Stack Developer
                    </h3>
                    <Biography />
                    
                </div>
                <div className="about-section">
                    <h3 className="about-section-title">
                        Education
                    </h3>
                    <Education />
                </div>
                <div className="about-section">
                    <h3 className="about-section-title">
                    Passions
                    </h3>
                    <div className="interest-section">
                        <InterestItem
                            title="La programmation"
                            logo={programming}
                            description="La programmation est la première passion et c'est elle qui occupe la majeure partie de mon temps libre"
                        /> 
                        <InterestItem 
                            title="Football"
                            logo={football}
                            description="Comme pour la plupart des Algériens le football est mon sport préféré"
                        />
                        <InterestItem 
                            title="Le jeu d'échecs"
                            logo={chess}
                            description="Même si j'adore les jeux électroniques j'ai un faible pour le jeu d'échecs"
                        />
                        <InterestItem
                            title="La lecture"
                            logo={reading}
                            description="J'aime beaucoup lire, mes auteurs préférés sont Jules Verne, Arthur Conan Doyle, Paulo Coelho et Amin Maalouf"
                        />
                        <InterestItem
                            title="La Musique"
                            logo={music}
                            description="J'écoute beaucoup de la musique, surtout lorsque je travaille, ma musique préférée et le chaabi algérien"
                        />
                        <InterestItem
                            title="Manga"
                            logo={manga}
                            description="je peux m'en passer, surtout ces quatre-là"
                        /> 
                    </div>
                </div>
            </div>
        )
    }
}
