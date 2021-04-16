import { useTranslation } from 'next-i18next'
import React from 'react'
import { prof, logoUalger, bachlor } from '../../Images/Images'
export default function Education() {
    const { t } = useTranslation("about")
    return (
        <div className="card-edu">
            <div className="contentBx">
                <div className="content">
                    <img src={logoUalger} width={200} height={200} />
                    <h3>
                        2015 - 2018
                    </h3>
                    <p>
                        {t("education")} 
                    </p>
                </div>
            </div>
            <div className="imgBx">
                <img src={bachlor} />
            </div>
        </div>
    )
}
