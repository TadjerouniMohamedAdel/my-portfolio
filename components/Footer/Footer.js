import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { freePik,contact,amt2 } from '../../Images/Images';
import * as yup from 'yup';
import { setLocale } from 'yup';
import emailjs from 'emailjs-com';
import {Tooltip} from  'react-mdl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faLinkedin, faSkype, faViber, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'next-i18next'

export default function Footer(props) {
        const { t } = useTranslation('layout')

        const footerSchema = yup.object().shape({
            email:yup.string().email().required(),
            subject: yup.string().required(),
            message: yup.string().required()
        })
        setLocale({
            string: {
                required:'Ce champ est requis .',
                }
            })
        const [form,setForm] =useState({
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




    const submitEmail = ()=>{
        let template_params = {
            "message": form.message,
            "from_email": form.email,

         }
         
         this.schema.isValid(form)
         .then((valid)=>{
             if(valid){
                //  emailjs.send('artelyes_gmail', process.env.REACT_APP_EMAIL_TEMPLATE_ID, template_params)
                //  .then((result) => {
                //      console.log(result.text);
                //      this.setState({
                //                 fullName:"",
                //                 subject:"",
                //                 message:"",
                //                 email:"",
                //                 errors:{
                //                     fullName:null,
                //                     subject:null,
                //                     message:null,
                //                     email:null
                //                 }
                //             })
                //     }, (error) => {
                //         console.log(error.text);
                //     });
                    
                }
                else{
                    this.schema.validate(form,{abortEarly: false}).catch((err) =>{
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

    const createBubble = ()=>{
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

    const changeInput = (event,type)=>{
        switch (type) {
            // case "email":
            //     this.setState({
            //         email:event.target.value,
            //         errors:{
            //             ...form.errors,
            //             email:null
            //             }
            //         })
            //         break;
            //         case "subject":
            //             this.setState({
            //         subject:event.target.value,
            //         errors:{
            //             ...form.errors,
            //             subject:null
            //         }
            //     })
            //     break;
            //     case "message":
            //         this.setState({
            //             message:event.target.value,
            //         errors:{
            //             ...form.errors,
            //             message:null
            //         }
            //     })
            //     break;
        
            default:
                break;
        }
    }



        return (
            
                
                <div className="footer-container bubbles-section">
                    <div className="footer-main">
                        
                    
                    <div className="contact-img">
                        <img src={contact} />
                    </div>
                    <div>
                        <div className="contact-form">
                                <h3>{t("footer.title")}</h3>
                                <div className="form-field">
                                    <TextField
                                        style={{color:"white",width:"100%"}} 
                                        id="outlined-basic" 
                                        label={t("footer.fields.email")} 
                                        variant="outlined"
                                        value={form.email}
                                        helperText={form.errors.email}
                                        error={form.errors.email !=null}
                                        onChange={(event)=>this.changeInput(event,"email")} 
 
                                    />
                                </div>
                                <div className="form-field">
                                    <TextField
                                        style={{color:"white",width:"100%"}} 
                                        id="outlined-basic" 
                                        label={t("footer.fields.subject")} 
                                        variant="outlined"
                                        value={form.subject}
                                        helperText={form.errors.subject}
                                        error={form.errors.subject !=null} 
                                        onChange={(event)=>this.changeInput(event,"subject")} 
                                    />
                                </div>
                                <div className="form-field">
                                    <TextField
                                        style={{color:"white",width:"100%"}} 
                                        id="outlined-basic" 
                                        label={t("footer.fields.message")}
                                        multiline
                                        rows={5}
                                        variant="outlined"
                                        value={form.message}
                                        helperText={form.errors.message}
                                        error={form.errors.message !=null}
                                        onChange={(event)=>this.changeInput(event,"message")} 
                                    />
                                </div>
                                <div className="form-field">
                                    <Button
                                        style={{color:"white",fontWeight:"600",backgroundColor:"#000"}}
                                        variant="outlined"
                                        onClick={()=>this.submitEmail()}
                                    >
                                        {t("footer.send_message")}
                                    </Button>
                                </div>
                                
                                <div className="social-contacts">
                                    <h4>{t("footer.find_me")}</h4>
                                    <div className="social-links">
                                        <span><a target="_blank" href="https://www.linkedin.com/in/adel-mohamed-tadjerouni-147546164/" style={{textDecoration:"none"}}><FontAwesomeIcon icon={faLinkedin} style={{color:"#0077B5"}} /></a></span>
                                        <span><a target="_blank" href="https://web.facebook.com/adelnagato.tadj" style={{textDecoration:"none"}}><FontAwesomeIcon icon={faFacebook} style={{color:"#3b5999"}}/></a></span>
                                        <span><a target="_blank" href="https://join.skype.com/invite/afq6nmhgxMgr" style={{textDecoration:"none"}}><FontAwesomeIcon icon={faSkype} style={{color:"#00AFF0"}}/></a></span>
                                        <span><a target="_blank" href="mailto:mohnagato@gmail.com" style={{textDecoration:"none"}}><FontAwesomeIcon icon={faGoogle} style={{color:"#dd4b39"}}/></a></span>
                                        <span>
                                            <a href="javascript:void(0)" style={{textDecoration:"none"}}>
                                                <Tooltip label={"+213 555791105"} large>
                                                    <FontAwesomeIcon icon={faViber} style={{color:"#7c3cac"}}/>
                                                </Tooltip>
                                            </a>
                                        </span>
                                        <span>
                                            <a href="javascript:void(0)" style={{textDecoration:"none"}}>
                                                <Tooltip label={"+213 555791105"} large>
                                                    <FontAwesomeIcon icon={faWhatsapp} style={{color:"#25D366"}}/>
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
                                {t("footer.freepik")}<br/>
                                <img src={freePik} width={150} />
                        </a>
                    </div>
                
                </div>
        )
    }

