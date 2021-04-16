import React from 'react'
import Profile from '../components/Profile/Profile';
import WaveButton from '../components/WaveButton/WaveButton';
import LandingProject from '../components/LandingProject/LandingProject';
import LandingSkill from '../components/LandingSkills/LandingSkill';
import { Chip } from 'react-mdl/lib/Chip'
import MainLayout from '../Layouts/MainLayout';
import { logoKhedemni, next_mini,node,logoBuileo, jira,js_dev,ts_mini,react,webpack,git,mysql_logo,docker, js_logo, php, vue,symfony, api_logo, jquery, html_logo, css_logo, bootstrap, firebase, react_logo, php_logo, symfony_logo, rn_logo, logoEp, dev_skill, amt2, pass, material, cleverzone, express_mini } from '../Images/Images'
import MyHead from '../components/MyHead/MyHead';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useTranslation } from 'next-i18next'


const lastExperience ={
  startDate:"last_experience.cleverzone.startDate",
  endDate:"last_experience.cleverzone.endDate",
  title:"last_experience.cleverzone.title",
  description:"last_experience.cleverzone.description",
  logo:cleverzone,
  imgWidth:80,
  imgHeight:80,
  tech:[{name:"Express",logo:express_mini},{name:"nodejs",logo:node},{name:"React",logo:react},{name:"Nextjs",logo:next_mini},{name:"TypeScript",logo:ts_mini},{name:"JavaScript",logo:js_logo},{name:"HTML",logo:html_logo},{name:"CSS",logo:css_logo},{name:"Material Ui",logo:material},{name:"Docker",logo:docker},{name:"Webpack",logo:webpack},{name:"git",logo:git},{name:"Mysql",logo:mysql_logo},{name:"Jira",logo:jira}]
}


export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ["landing","layout","projects"]),
    },
  })

export default function index() {
    const { t } = useTranslation('landing')
  return (
    <MainLayout>
        <MyHead 
            title={t("meta.title")}
            description={t("meta.description")}
        />
      <div className="landing-grid">
                    <div className="wave-section">
                        <div className="wave wave1"></div>
                        <div className="wave wave2"></div>
                        <div className="wave wave3"></div>
                        <div className="wave wave4"></div>
                        <Profile />
                        
                    </div>
                    <div className="landing-skills">
                        <h3>
                        {t('main-skills')}
                        </h3>
                        <div className="landing-skills-container">
                        
                            <div className="div-landing-skill">
                                <LandingSkill />
                            </div>
                            <div className="img-landing-skill">
                                <img src={dev_skill}  />
                            </div>
                        </div>

                        <div style={{marginTop:30}}>
                            <WaveButton 
                                label={t('view-all-skills')}
                                path="/resume"
                            />
                        </div>
                    </div>
                    <LandingProject />
                    <div className="last-section-landing">
                    <div className="landing-last-experience">
                                <h3>{t("latest-experience")}</h3>
                                <div className="last-experience">
                                    <h4>{t(lastExperience.title)}</h4>
                                    <span className="time">
                                        {t(lastExperience.startDate) } - {t(lastExperience.endDate)}
                                    </span>
                                    <img src={lastExperience.logo} width={100} heigh={100} style={{float:"left",marginTop:-5}}/>
                                    <p className="description">
                                        {t(lastExperience.description)}
                                    </p>
                                    <div style={{marginTop:10}}>
                                        <h6 style={{fontWeight:"800"}}>{t("technologies_used")}:</h6>
                                        {
                                        lastExperience.tech.map((tech,ind)=>(
                                            <div style={{display:"inline",flex:1,margin:5}} key={ind+"l"}>
                                                <Chip>
                                                <img src={tech.logo} className="chip-image" style={{marginRight:3}}/>
                                                {tech.name}
                                                </Chip>
                                            </div>

                                        ))
                                        }
                                    </div>
                                </div>
                                  <div>
                                      <WaveButton
                                        label={t("view-all-experiences")} 
                                        path="/resume"
                                      />
                                  </div>
                    </div>
                    </div>
                </div>
    </MainLayout>
  )
}
