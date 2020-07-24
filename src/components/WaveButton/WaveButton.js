import React from 'react'
import  './WaveButton.css'
import {Link } from 'react-router-dom'
export default function WaveButton(props) {
    return (
        <Link to={props.path} style={{textDecoration:'none'}}>
            <a href="#" class="wave-button">
                <span><i className="fas fa-search"></i>{props.label}</span>
                <div class="wave"></div>
            </a>
        
        </Link>
    )
}
