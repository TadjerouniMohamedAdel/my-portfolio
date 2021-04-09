import React from 'react'
import { logoKhedemni, node,logoBuileo, js_dev,react,webpack,git,mysql_logo,docker, js_logo, php, vue,symfony, api_logo, jquery, html_logo, css_logo, bootstrap, firebase, react_logo, php_logo, symfony_logo, rn_logo, logoEp, dev_skill, projects, redux_i } from '../../Images/Images'
import ProjectCard from '../ProjectCard/ProjectCard'
import DivWave from '../DivWave/DivWave'
import WaveButton from '../WaveButton/WaveButton'
import { useTranslation } from 'next-i18next'

export default function LandingProject() {
    const { t } = useTranslation('landing')
    return (
        <div className="landing-projects-container">
        <DivWave>
            <h3 className="landing-projects-title">
                {t("last-projects")}
            </h3>
            <div className="landing-projects">
            <ProjectCard 
                    title="Khedemni Mobile"
                    type={t("professional_project")}
                    live="https://play.google.com/store/apps/details?id=com.khedemni&hl=fr"
                    description={t("projects.khedemni.description")}
                    logo={logoKhedemni}
                    tech={[
                        {name:"Java Script",logo:js_logo},
                        {name:"React Native",logo:react},
                        {name:"Redux",logo:redux_i},
                        {name:"PHP",logo:php},
                        {name:"Symfony 4",logo:symfony},
                        {name:"Api Platform",logo:api_logo},
                        {name:"Firebase",logo:firebase}
                    ]}
                />
                <div className="landing-project-img">
                    <img src={projects} />
                </div>
                <ProjectCard 
                    title="Buileo CRM"
                    type={t("professional_project")}
                    live="https://www.buileo.com/"
                    description={t("projects.buileo.description")}
                    logo={logoBuileo}
                    classes="buileo"
                    tech={[
                        {name:"PHP",logo:php},
                        {name:"Symfony 2",logo:symfony},
                        {name:"HTML 5",logo:html_logo},
                        {name:"CSS 3",logo:css_logo},
                        {name:"Bootstrap",logo:bootstrap},
                        {name:"Java Script",logo:js_logo},
                        {name:"Vuejs",logo:vue},
                        {name:"JQuery",logo:jquery},
                    ]}
                />
            </div>
            <WaveButton 
                label={t('view-all-projects')}
                path="/projects"
            />
        </DivWave>
        </div>
    )
}
