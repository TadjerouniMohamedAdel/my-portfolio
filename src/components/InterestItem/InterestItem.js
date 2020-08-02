import React from 'react'
import './InterestItem.css'
import { user } from '../../Images/Images'
export default function InterestItem(props) {
    return (
        <div className="interest-item">
        <div className="interest-box">
            <div className="imgBx">
                <img src={props.logo} />
            </div>
            <div className="content">
                <div>
                    <h2>{props.title}</h2>
                    <p>
                        Voluptate sunt nulla reprehenderit incididunt id anim irure cillum enim nostrud ut et cupidatat mollit.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}
