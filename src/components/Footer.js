import React, { Component } from 'react'
import './Footer.css'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { contact } from '../Images/Images';

export default class Footer extends Component {

    createBubble(){
        console.log(window.width)
        const section = document.querySelector('.bubbles-section')
        const createElement = document.createElement('span')
        createElement.setAttribute("class","bubble")
        var size = Math.random() *60;
        createElement.style.width = 20+ size + 'px'
        createElement.style.height = 20+ size + 'px'
        createElement.style.left = Math.random() * window.innerWidth + "px"
        section.appendChild(createElement)
        setTimeout(()=>{
            createElement.remove()
        },4000)
    }

    // componentDidMount(){
    //     setInterval(this.createBubble,200)
    // }
    render() {
        return (
            <div className="footer-container bubbles-section">
                <div className="contact-img">
                    <img src={contact} />
                </div>
                <div>
                    <div className="contact-form">
                            <h3>Contact Me</h3>
                            <div className="form-field">
                                <TextField
                                    style={{color:"white",width:"100%"}} 
                                    id="outlined-basic" 
                                    label="Email" 
                                    variant="outlined" 
                                />
                            </div>
                            <div className="form-field">
                                <TextField
                                    style={{color:"white",width:"100%"}} 
                                    id="outlined-basic" 
                                    label="Sujet" 
                                    variant="outlined" 
                                />
                            </div>
                            <div className="form-field">
                                <TextField
                                    style={{color:"white",width:"100%"}} 
                                    id="outlined-basic" 
                                    label="Message"
                                    multiline
                                    rows={5}
                                    variant="outlined" 
                                />
                            </div>
                            <div className="form-field">
                                <Button
                                    style={{color:"white",fontWeight:"600",backgroundColor:"#000"}}
                                    variant="outlined"
                                >
                                    Envoyer un message
                                </Button>
                            </div>
                            
                            <div className="social-contacts">
                                <h4>Find me in</h4>
                                <div className="social-links">
                                    <span><i className="fab fa-linkedin" style={{color:"#0077B5"}}></i></span>
                                    <span><i className="fab fa-facebook" style={{color:"#3b5999"}}></i></span>
                                    <span><i className="fab fa-skype" style={{color:"#00AFF0"}}></i></span>
                                    <span><i className="fab fa-google" style={{color:"#dd4b39"}}></i></span>
                                    <span><i className="fab fa-viber" style={{color:"#7c3cac"}}></i></span>
                                    <span><i className="fab fa-whatsapp" style={{color:"#25D366"}}></i></span>

                                </div>
                            </div>
                            
                    </div>
                </div>
            </div>
        )
    }
}
