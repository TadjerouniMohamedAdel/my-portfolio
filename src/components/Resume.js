import React, { Component } from 'react'
import {Grid,Cell,Tabs , Tab} from 'react-mdl'
import Education from './Education'
import Skills from './Skills'
import { logoUalger, react_logo, redux_logo, js_logo, html_logo, jquery_logo, bootstrap_logo, css_logo, php_logo, codeigniter_logo, symfony_logo, api_logo, docker_logo, git_logo, webpack_logo, mysql_logo, arch_logo, rn_logo } from '../Images/Images'
import SkillItem from './Skills/SkillItem'
import {} from 'react-mdl'
import Timeline from './Timeline/Timeline'





export default class Resume extends Component {
    
    constructor(props){
        super(props);
        this.state = { activeTab:0 }
        
    }

    renderMobile = ()=>{
        return (
            <div className="skill-grid">
                <div className="skill-item" key="mobile">
                <SkillItem 
                        skillImage={rn_logo}
                        color="#449ccf"
                        imageWidth={130}
                        imageHeight={100}
                        percent="75"
                    />
                </div>
            </div>
        )
    }

    renderDevops  = ()=>{
        return (
            <div className="skill-grid" key="devops">
                <div className="skill-item" key={2}>
                    <SkillItem 
                        skillImage={docker_logo}
                        color="#449ccf"
                        imageWidth={100}
                        imageHeight={110}
                        percent="65"
                        />
                </div>
                <div className="skill-item" key={3}>
                    <SkillItem 
                        skillImage={git_logo}
                        color="#DE4C35"
                        imageWidth={90}
                        imageHeight={50}
                        percent="85"
                    />

                </div>
                <div className="skill-item" key={4}>
                    <SkillItem 
                        skillImage={webpack_logo}
                        color="#449ccf"
                        imageWidth={110}
                        imageHeight={110}
                        percent="73"
                    />
                </div>
                <div className="skill-item" key={5}>
                    <SkillItem 
                        skillImage={mysql_logo}
                        color="#FD972E"
                        imageWidth={90}
                        imageHeight={80}
                        percent="80"
                    />
                </div>
                <div className="skill-item" key={6}>
                    <SkillItem 
                        skillImage={arch_logo}
                        color="#1694D1"
                        imageWidth={90}
                        imageHeight={80}
                        percent="65"
                    />
                </div>
            </div>
        )
    }

    renderBackEnd = ()=>{
        return(
            <div className="skill-grid" key="back">
                <div className="skill-item" key={7}>
                    <SkillItem 
                        skillImage={php_logo}
                        color="#767BB3"
                        imageWidth={90}
                        imageHeight={80}
                        percent="87"
                    />
                </div>
                <div className="skill-item" key={8}>
                    <SkillItem 
                        skillName="React"
                        skillImage={codeigniter_logo}
                        color="#EE4423"
                        imageWidth={90}
                        imageHeight={80}
                        percent="75"
                    />
                </div>
                <div className="skill-item" key={9}>
                    <SkillItem 
                        skillImage={symfony_logo}
                        color="#000"
                        imageWidth={80}
                        imageHeight={90}
                        percent="79"
                    />
                </div>
                <div className="skill-item" key={10}>
                    <SkillItem 
                        skillImage={api_logo}
                        color="#BA1C1B"
                        imageWidth={100}
                        imageHeight={90}
                        percent="67"
                    />
                </div>
            </div>
                )
            }


    renderFrontEnd = ()=>{
        return(
            <div className="skill-grid" key="fron">
                <div className="skill-item" key={11}>
                    <SkillItem 
                        skillName="React"
                        skillImage={react_logo}
                        color="#449ccf"
                        imageWidth={90}
                        imageHeight={90}
                        percent="85"
                    />
                </div>
                <div className="skill-item" key={12}>
                    <SkillItem
                        percent="80" 
                        skillName="Redux"
                        skillImage={redux_logo}
                        color="#943ab8"
                        imageWidth={130}
                        imageHeight={100}
                    />
                </div>
                <div className="skill-item" key={13}>
                    <SkillItem
                        percent="87" 
                        skillName="JS"
                        skillImage={js_logo}
                        color="#cab818"
                        imageWidth={90}
                        imageHeight={80}
                    />
                </div>
                <div className="skill-item" key={14}>
                    <SkillItem
                        percent="90" 
                        skillImage={jquery_logo}
                        color="#449ccf"
                        imageWidth={130}
                        imageHeight={140}
                    />
                </div>
                <div className="skill-item" key={15}>
                    <SkillItem
                        percent="90" 
                        skillName="React"
                        skillImage={bootstrap_logo}
                        color="#62478A"
                        imageWidth={110}
                        imageHeight={100}
                    />
                </div>
                <div className="skill-item" key={16}>
                    <SkillItem
                        percent="80" 
                        skillImage={css_logo}
                        color="#449ccf"
                        imageWidth={80}
                        imageHeight={100}
                    />
                </div>
                <div className="skill-item" key={17}>
                    <SkillItem
                        percent="85" 
                        skillImage={html_logo}
                        color="#E54D26"
                        imageWidth={80}
                        imageHeight={100}
                    />
                </div>
            </div>
        )
    }
    
    toggleCategories = ()=>{
        switch (this.state.activeTab) {
            case 0:
                return this.renderFrontEnd()
            break;
            case 1:
                   return this.renderBackEnd()
            break;
            case 2:
                return this.renderMobile()
            break;
            case 3:
                return this.renderDevops()
            break;
        
        }
    }
    
    
    
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={5}>
                        
                        <h2 style={{paddingTop:'2em',textAlign:"center"}}>Skills</h2>
                        <div className="category-taba">
                    <Tabs activeTab={this.state.activeTab}onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                        <Tab>Front End</Tab>
                        <Tab>Back End</Tab>
                        <Tab>Mobile</Tab>
                        <Tab>Deveops & Tools</Tab>
                    </Tabs>
                    <section > 
                        <Grid >
                            <Cell col={12}>
                                <div className="content">
                                    {this.toggleCategories()}
                                </div>
                            </Cell>
                        </Grid>
                    </section>
            </div>
            <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills 
                            skill="javascript"
                            progress="90"
                        />
                        <Skills 
                            skill="Reactjs"
                            progress="90"
                        />
                        <Skills 
                            skill="React Native"
                            progress="78"
                        />
                        <Skills 
                            skill="php"
                            progress="90"
                        />
                        <Skills 
                            skill="Symfony"
                            progress="90"
                        />
                       
        </Cell>
        <Cell col={1}></Cell>
                    <Cell  col={6}> 
                      <h2 style={{paddingTop:'2em',textAlign:"center"}}>Experience</h2>
                      
                         <Timeline />
                      
                      <h2 style={{paddingTop:'2em'}}>Education</h2>
                        <Education
                            startYear={2015}
                            endYear={2018}
                            img={logoUalger}
                            schoolName="Université d’Alger 1"
                            schoolDescription="licence en système d’information et génie
                            logiciel Université d’Alger 1 ."
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}
