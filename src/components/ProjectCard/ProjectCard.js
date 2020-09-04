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
                ce projet a été développée principalement avec :

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
                    <a href={props.github} target="_blanck">
                        <i className="fab fa-github"></i>
                        Code Source
                    </a>
                    <a href={props.live} target="_blank">
                        <i className="fas fa-play"></i>
                        Démo en direct
                    </a>
                </div>
            </div>
        </div>
    )
}
