import React from 'react'
import './Biography.css'
import { prof } from '../../Images/Images'
export default function Biography() {
    return (
        <div className="card-bio">
            <div className="imgBx">
                <img src={prof} />
            </div>
            <div className="contentBx">
                <div className="content">
                    <h2>
                       Adel Mohamed Tadjerouni
                    </h2>
                    <p>
                        Many developer say that a real full stack developer is a myth ,than i want to be a myth, it s the first motiviation to me 
                        I choose to be a full stack developer due to my interests to build app and deploy from start to the end with the capabilty to do it alone . 
                        i worked with many programmaing languages and i can sead that javascript is my favorite .
                        i have the ambition to be  a real js developer and i will rely on of my learning skills and my curiosity to achive my goal
                    </p>
                </div>
            </div>
        </div>
    )
}
