import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { freePik,contact,amt2 } from '../../Images/Images';
import * as yup from 'yup';
import { setLocale } from 'yup';
import emailjs from 'emailjs-com';
import {Tooltip} from  'react-mdl'
export default class Footer extends Component {


    constructor(props){
        super(props)
        this.schema = yup.object().shape({
            email:yup.string().email().required(),
            subject: yup.string().required(),
            message: yup.string().required()
        })
        setLocale({
            string: {
                required:'Ce champ est requis .',
                }
            })
        this.state={
            subject:"",
            message:"",
            email:"",
            errors:{
                fullName:null,
                subject:null,
                message:null,
                email:null
            }
        }


    }


    submitEmail = ()=>{
        let template_params = {
            "message": this.state.message,
            "from_email": this.state.email,

         }
         
         this.schema.isValid(this.state)
         .then((valid)=>{
             if(valid){
                 emailjs.send('artelyes_gmail', process.env.REACT_APP_EMAIL_TEMPLATE_ID, template_params)
                 .then((result) => {
                     console.log(result.text);
                     this.setState({
                                fullName:"",
                                subject:"",
                                message:"",
                                email:"",
                                errors:{
                                    fullName:null,
                                    subject:null,
                                    message:null,
                                    email:null
                                }
                            })
                    }, (error) => {
                        console.log(error.text);
                    });
                    
                }
                else{
                    this.schema.validate(this.state,{abortEarly: false}).catch((err) =>{
                        var errors={};
                        err.inner.map((item,index) =>{
                            console.log(item.path,item.message)
                            errors[item.path]=item.message
                        })
                        this.setState({
                            errors:errors
                        })
                    })
                }
            })
        }

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

    changeInput = (event,type)=>{
        switch (type) {
            case "email":
                this.setState({
                    email:event.target.value,
                    errors:{
                        ...this.state.errors,
                        email:null
                        }
                    })
                    break;
                    case "subject":
                        this.setState({
                    subject:event.target.value,
                    errors:{
                        ...this.state.errors,
                        subject:null
                    }
                })
                break;
                case "message":
                    this.setState({
                        message:event.target.value,
                    errors:{
                        ...this.state.errors,
                        message:null
                    }
                })
                break;
        
            default:
                break;
        }
    }



    render() {
        return (
            
                
                <div className="footer-container bubbles-section">
                    <div className="footer-main">
                        
                    
                    <div className="contact-img">
                        <img src={contact} />
                    </div>
                    <div>
                        <div className="contact-form">
                                <h3>Contactez moi</h3>
                                <div className="form-field">
                                    <TextField
                                        style={{color:"white",width:"100%"}} 
                                        id="outlined-basic" 
                                        label="Email" 
                                        variant="outlined"
                                        value={this.state.email}
                                        helperText={this.state.errors.email}
                                        error={this.state.errors.email !=null}
                                        onChange={(event)=>this.changeInput(event,"email")} 
 
                                    />
                                </div>
                                <div className="form-field">
                                    <TextField
                                        style={{color:"white",width:"100%"}} 
                                        id="outlined-basic" 
                                        label="Sujet" 
                                        variant="outlined"
                                        value={this.state.subject}
                                        helperText={this.state.errors.subject}
                                        error={this.state.errors.subject !=null} 
                                        onChange={(event)=>this.changeInput(event,"subject")} 
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
                                        value={this.state.message}
                                        helperText={this.state.errors.message}
                                        error={this.state.errors.message !=null}
                                        onChange={(event)=>this.changeInput(event,"message")} 
                                    />
                                </div>
                                <div className="form-field">
                                    <Button
                                        style={{color:"white",fontWeight:"600",backgroundColor:"#000"}}
                                        variant="outlined"
                                        onClick={()=>this.submitEmail()}
                                    >
                                        Envoyer un message
                                    </Button>
                                </div>
                                
                                <div className="social-contacts">
                                    <h4>Trouvez-moi sur</h4>
                                    <div className="social-links">
                                        <span><a target="_blank" href="https://www.linkedin.com/in/adel-mohamed-tadjerouni-147546164/" style={{textDecoration:"none"}}><i className="fab fa-linkedin" style={{color:"#0077B5"}}></i></a></span>
                                        <span><a target="_blank" href="https://web.facebook.com/adelnagato.tadj" style={{textDecoration:"none"}}><i className="fab fa-facebook" style={{color:"#3b5999"}}></i></a></span>
                                        <span><a target="_blank" href="https://join.skype.com/invite/afq6nmhgxMgr" style={{textDecoration:"none"}}><i className="fab fa-skype" style={{color:"#00AFF0"}}></i></a></span>
                                        <span><a target="_blank" href="mailto:mohnagato@gmail.com" style={{textDecoration:"none"}}><i className="fab fa-google" style={{color:"#dd4b39"}}></i></a></span>
                                        <span>
                                            <a href="javascript:void(0)" style={{textDecoration:"none"}}>
                                                <Tooltip label={"+213 555791105"} large>
                                                    <i className="fab fa-viber" style={{color:"#7c3cac"}}></i>
                                                </Tooltip>
                                            </a>
                                        </span>
                                        <span>
                                            <a href="javascript:void(0)" style={{textDecoration:"none"}}>
                                                <Tooltip label={"+213 555791105"} large>
                                                    <i className="fab fa-whatsapp" style={{color:"#25D366"}}></i>
                                                </Tooltip>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>
                    <div className="footer-logo-section">
                        <img src={amt2} className="footer-logo-img"/>
                        <a className="footer-logo-link"  href="https://stories.freepik.com/education">
                                Illustration par Freepik Stories<br/>
                                <img src={freePik} width={150} />
                        </a>
                    </div>
                
                </div>
        )
    }
}
