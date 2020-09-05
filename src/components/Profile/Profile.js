import React from 'react'
import Citation from '../Citation/Citation'
import { js_dev } from '../../Images/Images'
import './Profile.css'
export default function Profile() {
    return (
        <div className="profil-landing">
                            <div className="profil-landing-content">
                                <div className="profil-info">
                                    <Citation />
                                </div>
                                <div className="js-stack-img">
                                    <img src={js_dev} />
                                </div>

                            </div>
            </div>
    )
}
