import { useTranslation } from 'next-i18next'
import React from 'react'
import { prof } from '../../Images/Images'
export default function Biography() {
    const { t } = useTranslation("about")
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
                        {t("aboutme_1")}
                        <br/>
                        {t("aboutme_2")}
                    </p>
                </div>
            </div>
        </div>
    )
}
