import React, { Component } from 'react'
import {Cell , Grid} from 'react-mdl'
import { user1, user2 } from '../Images/Images'
import Profile from './ProfileCard/Profile'

export default class LandingPage extends Component {
    render() {
        return (
            <div style={{width:'100%',margin:'auto'}}>
                <div className="landing-grid">
                    {/* <div style={{flex:0.2}} col={2}>
                        <div  style={{borderRadius:5,"backgroundColor": "rgba(#000, #000, #000,1)"}}>
                            <img 
                                src={user2}
                                alt="avatar"
                                className="avatar-img"
                            />

                        </div>
                        
                    </div> */}
                    {/* <div style={{flex:1}} >
                    <div className="banner-text">
                            <h1>Full Stack Web & mobile Developer</h1>
                            <hr/>
                            <p>
                                HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MangoDB
                            </p>
                            <div className="social-links" style={{flex:1}}>
                               
                                <a style={{flex:1}} href="https://www.google.dz" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                                </a>  
                                <a style={{flex:1}} href="https://www.google.dz" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square"  aria-hidden="true"/>
                                </a>


                                <a style={{flex:1}} href="https://www.google.dz" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook-square"  aria-hidden="true"/>
                                </a>
                                <a style={{flex:1}} href="https://www.google.dz" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-skype"  aria-hidden="true"/>
                                </a>

                                

                                

                            </div>
                        </div>
                    </div> */}
                    <Profile />
                </div>
            </div>
        )
    }
}
