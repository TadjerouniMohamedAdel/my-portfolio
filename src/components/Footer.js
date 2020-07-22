import React, { Component } from 'react'
import './Footer.css'
import TextField from '@material-ui/core/TextField';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="contact-form">
                        <div className="form-field">
                            <TextField 
                                id="outlined-basic" 
                                label="Outlined" 
                                variant="outlined" 
                            />
                        </div>
                        <div className="form-field">
                            <TextField 
                                id="outlined-basic" 
                                label="Outlined" 
                                variant="outlined" 
                            />
                        </div>
                        <div className="form-field">
                            <TextField 
                                id="outlined-basic" 
                                label="Outlined" 
                                variant="outlined" 
                            />
                        </div>
                        
                </div>
                <div>
                {/* <Card> */}
                        <p>
                            Id proident adipisicing eu officia duis incididunt adipisicing ut in consectetur culpa laborum. Elit ea veniam Lorem cupidatat aute voluptate sit aliqua. Ipsum laborum duis ad ex in eu qui elit. Quis pariatur occaecat mollit mollit deserunt sit officia. Aliqua amet adipisicing laborum est.

    Laboris anim reprehenderit cupidatat cillum. Non nisi elit deserunt aute. Excepteur anim et sunt est quis consectetur consequat elit irure in enim do excepteur nisi.
                        </p>
                    {/* </Card> */}
                </div>
            </div>
        )
    }
}
