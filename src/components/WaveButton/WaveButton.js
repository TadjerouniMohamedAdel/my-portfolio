import React from 'react'
import  './WaveButton.css'
export default function WaveButton(props) {
    return (
        <a href="#" class="wave-button">
            <span><i className="fa fa-search"></i>{props.label}</span>
            <div class="wave"></div>
        </a>
    )
}
