import React from 'react'
import { prof, logoUalger } from '../../Images/Images'
import  './Education.css'
export default function Education() {
    return (
        <div className="card-edu">
            <div className="contentBx">
                <div className="content">
                    <img src={logoUalger} width={200} height={200} />
                    <p>
                        I have a bachlor's degree in information systen and software enginner at university of algeries ,why i dont continue my stadies it's big story .
                        they are many personal reasons but i think that i mad the best decision and choose my the path that i like. 
                    </p>
                </div>
            </div>
            <div className="imgBx">
                <img src={prof} />
            </div>
        </div>
    )
}
