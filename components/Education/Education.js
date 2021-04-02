import React from 'react'
import { prof, logoUalger, bachlor } from '../../Images/Images'
export default function Education() {
    return (
        <div className="card-edu">
            <div className="contentBx">
                <div className="content">
                    <img src={logoUalger} width={200} height={200} />
                    <h3>
                        2015 - 2018
                    </h3>
                    <p>
                    J'ai une licence en système d'information et genie logiciel à l'université d'Alger.
                    pourquoi je n'ai pas continué mes études y a pas mal de raisons mais je pense que j'ai pris la meilleure décision et j'ai choisi mon propre chemin, 
                    le chemin de ma passion. 
                    </p>
                </div>
            </div>
            <div className="imgBx">
                <img src={bachlor} />
            </div>
        </div>
    )
}
