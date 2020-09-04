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
                    Passion
                    </h3>
                    <div className="interest-section">
                        <InterestItem 
                            title="Le jeu d'échecs"
                            logo={chess}
                        />
                        <InterestItem 
                            title="Football"
                            logo={football}
                        />
                        <InterestItem
                            title="La lecture"
                            logo={reading}
                        />
                        <InterestItem
                            title="La Musique"
                            logo={music}
                        />
                        <InterestItem
                            title="Manga"
                            logo={manga}
                        /> 
                        <InterestItem
                            title="La programmation"
                            logo={programming}
                        /> 
                    </div>
                </div>
            </div>
        )
    }
}
