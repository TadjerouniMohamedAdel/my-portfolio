import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faLinkedin,faGithub,faSkype,faGoogle,  } from '@fortawesome/free-brands-svg-icons'

export default function SocialMenu() {
    return (
    <ul className="list-social1">
        <li className="li-github"><a target="_blank" className="social-link1" href="https://github.com/TadjerouniMohamedAdel"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li className="li-linkedin"><a target="_blank" className="social-link1" href="https://www.linkedin.com/in/adel-mohamed-tadjerouni-147546164/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li className="li-skype"><a target="_blank" className="social-link1" href="https://join.skype.com/invite/afq6nmhgxMgr"><FontAwesomeIcon icon={faSkype} /></a></li>
        <li className="li-google"><a target="_blank" className="social-link1" href="mailto:mohnagato@gmail.com"><FontAwesomeIcon icon={faGoogle} /></a></li>
        <li className="li-facebook"><a target="_blank" className="social-link1" href="https://web.facebook.com/adelnagato.tadj"><FontAwesomeIcon icon={faFacebook} /></a></li>
    </ul>
    )
}
