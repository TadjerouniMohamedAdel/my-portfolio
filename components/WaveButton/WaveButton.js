import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch  } from '@fortawesome/free-solid-svg-icons'

export default function WaveButton(props) {
    if(props.file)
        return(
            <a href={props.path} className="wave-button" target="_blank">
                <span><FontAwesomeIcon icon={faSearch} /> {props.label}</span>
                <div class="wave"></div>
            </a>
        )

    return (
        <Link href={props.path} style={{textDecoration:'none'}}>
            <a href="#" className="wave-button">
                <span><FontAwesomeIcon icon={faSearch} />{props.label}</span>
                <div class="wave"></div>
            </a>
        
        </Link>
    )
}
