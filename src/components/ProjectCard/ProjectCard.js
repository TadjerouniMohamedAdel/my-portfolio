import React from 'react'
import './ProjectCard.css'
import { Chip } from 'react-mdl'
import {  react } from '../../Images/Images'

export default function ProjectCard(props) {
    return (
        <div className={`card-project ${props.classes}`}>
            <div className="imgBx">
                <img src={props.logo} />
            </div>
            <div className="contentBx">
                <h2>{props.title}</h2>
                <p className="type">
                    {props.type}
                </p>
                <p className="description">
                    {props.description}
                </p><br/>
                <p>
                    this project was mainly build with :
                </p>
                <div className="tech">
                    {
                        props.tech.map((tech,ind)=>(
                        <div style={{display:"inline",flex:1,margin:5}} key={ind+"l"}>
                            <Chip>
                                <img src={tech.logo} width={23} height={25} style={{marginRight:3}}/>
                                {tech.name}
                            </Chip>
                            </div>

                        ))
                    }
                </div>
                <div className="links">
                    <a href="#">
                        <i className="fab fa-github"></i>
                        Read More
                    </a>
                    <a href="#">
                        <i className="fab fa-play"></i>
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    )
}
