import React, { Component } from 'react'
import {Cell , Grid} from 'react-mdl'

export default class LandingPage extends Component {
    render() {
        return (
            <div style={{width:'100%',margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />
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

                                {/* freecodecamp */}
                                <a href="https://www.google.dz" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-free-code-camp"  aria-hidden="true"/>
                                </a>

                                {/* youtube */}
                                <a href="https://www.google.dz" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-youtube-square"  aria-hidden="true"/>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
