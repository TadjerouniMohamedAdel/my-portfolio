import React, { Component } from 'react'
import './Footer.css'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
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
        )
    }
}
