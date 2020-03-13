import React, { Component } from 'react'
import { user } from '../../Images/Images'
import './Profile.css';


export default class Profile extends Component {
    render() {
        return (
            <div className="profile-card">
            <div className="profile-card-header">
                <img src={user} alt="profile-image" className="profile-image" />
            </div>
                <div className="profile-card-body">
                    <p className="full-name">Adel Mohamed Tadjerouni</p>
                    <p className="username">@TMA</p>
                    <p className="city">Alger Algerie</p>
                    <p className="desc">Full Stack Web & Mobile Developer</p>
                    <div className="social-links" >
                        <a  href="https://www.google.dz" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square"  aria-hidden="true"></i>
                        </a>
                        
                        
                        <a  href="https://www.google.dz" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github-square"  aria-hidden="true"></i>
                        </a>
                        
                        
                        <a  href="https://www.google.dz" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-facebook-square"  aria-hidden="true" ></i>
                        </a>
                        <a  href="https://www.google.dz" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-skype"  aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
        </div>
        )
    }
}
