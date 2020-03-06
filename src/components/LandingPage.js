import React, { Component } from 'react'
import {Cell , Grid} from 'react-mdl'
import { user1, user2 } from '../Images/Images'

export default class LandingPage extends Component {
    render() {
        return (
            <div style={{width:'100%',margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div style={{borderRadius:5}}>
                            <img 
                                src={user2}
                                alt="avatar"
                                className="avatar-img"
                            />

                        </div>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>
                                HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MangoDB
                            </p>
                            <div className="social-links">
                                {/* linkedin */}
                                <a href="https://www.google.dz" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                                </a>

                                {/* github */}
                                <a href="https://www.google.dz" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square"  aria-hidden="true"/>
                                </a>


                                <a href="https://www.google.dz" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook-square"  aria-hidden="true"/>
                                </a>
                                <a href="https://www.google.dz" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-skype"  aria-hidden="true"/>
                                </a>

                                
                              

                                

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
