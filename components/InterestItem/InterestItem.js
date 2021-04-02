import React from 'react'
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
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}
