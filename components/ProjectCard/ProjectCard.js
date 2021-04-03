import React from 'react'
import { Chip } from 'react-mdl'
import {  react } from '../../Images/Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub  } from '@fortawesome/free-brands-svg-icons'
import { faPlay  } from '@fortawesome/free-solid-svg-icons'

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
                                <img src={tech.logo} className="chip-image"  style={{marginRight:3}}/>
                                {tech.name}
                            </Chip>
                            </div>

                        ))
                    }
                </div>
                
                <div className="links">
                    {
                        props.github && (
                            <a href={props.github} target="_blanck">
                                <FontAwesomeIcon icon={faGithub} />
                                Code Source
                            </a>

                        )
                    }
                    <a href={props.live} target="_blank">
                    <FontAwesomeIcon icon={faPlay} />
                        Démo en direct
                    </a>
                </div>
            </div>
        </div>
    )
}
