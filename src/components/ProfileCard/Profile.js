import React, { Component } from 'react'
import { user } from '../../Images/Images'
import './Profile.css';
import SocialMenu from './SocialMenu';


export default class Profile extends Component {
    render() {
        return (
            <div className="profile-card">
            <div className="profile-card-header">
                <img src={user} alt="profile-image" className="profile-image" />
            </div>
                <div className="profile-card-body">
                    <p className="full-name">Adel Mohamed Tadjerouni</p>
                    <p className="city">Alger Algerie</p>
                    <p className="desc">Full Stack Web & Mobile Developer</p>
                   <SocialMenu />
                </div>
        </div>
        )
    }
}
