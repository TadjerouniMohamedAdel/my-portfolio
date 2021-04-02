import React from 'react'
import {Link } from '@material-ui/core'
export default function WaveButton(props) {
    if(props.file)
        return(
            <a href={props.path} class="wave-button" target="_blank">
                <span><i className="fas fa-search"></i>{props.label}</span>
                <div class="wave"></div>
            </a>
        )

    return (
        <Link to={props.path} style={{textDecoration:'none'}}>
            <a href="#" class="wave-button">
                <span><i className="fas fa-search"></i>{props.label}</span>
                <div class="wave"></div>
            </a>
        
        </Link>
    )
}
