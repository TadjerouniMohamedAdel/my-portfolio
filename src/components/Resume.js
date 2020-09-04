import React, { Component } from 'react'
import {Grid,Cell,Tabs , Tab} from 'react-mdl'
import Skills from './Skills'
import { logoUalger, react_logo, redux_logo, js_logo, html_logo, jquery_logo, bootstrap_logo, css_logo, php_logo, codeigniter_logo, symfony_logo, api_logo, docker_logo, git_logo, webpack_logo, mysql_logo, arch_logo, rn_logo, node, express, firebase } from '../Images/Images'
import SkillItem from './Skills/SkillItem'
import {} from 'react-mdl'
import Timeline from './Timeline/Timeline'
import Card2 from './Card2/Card2'
import WaveButton from './WaveButton/WaveButton'





export default class Resume extends Component {
    
    constructor(props){
        super(props);
        this.state = { activeTab:0 }
        
    }

    renderMobile = ()=>{
        return (
            <div className="skill-grid">
                <div className="skill-item" key="rn">
                <SkillItem 
                        skillImage={rn_logo}
                        color="#449ccf"
                        percent="75"
                    />
                </div>
                <div className="skill-item" key="fb">
                <SkillItem 
                        skillImage={firebase}
                        color="#449ccf"
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
                        percent="65"
                        />
                </div>
                <div className="skill-item" key={3}>
                    <SkillItem 
                        skillImage={git_logo}
                        color="#DE4C35"
                        percent="85"
                    />

                </div>
                <div className="skill-item" key={4}>
                    <SkillItem 
                        skillImage={webpack_logo}
                        color="#449ccf"
                        percent="73"
                    />
                </div>
                <div className="skill-item" key={5}>
                    <SkillItem 
                        skillImage={mysql_logo}
                        color="#FD972E"
                        percent="80"
                    />
                </div>
                <div className="skill-item" key={6}>
                    <SkillItem 
                        skillImage={arch_logo}
                        color="#1694D1"
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
                        percent="87"
                    />
                </div>
                <div className="skill-item" key={8}>
                    <SkillItem 
                        skillName="React"
                        skillImage={codeigniter_logo}
                        color="#EE4423"
                        percent="75"
                    />
                </div>
                <div className="skill-item" key={9}>
                    <SkillItem 
                        skillImage={symfony_logo}
                        color="#000"
                        percent="79"
                    />
                </div>
                <div className="skill-item" key={10}>
                    <SkillItem 
                        skillImage={api_logo}
                        color="#BA1C1B"
                        percent="67"
                    />
                </div>
                <div className="skill-item" key={10}>
                    <SkillItem 
                        skillImage={node}
                        color="#BA1C1B"
                        percent="67"
                    />
                    
                
                </div>
                <div className="skill-item" key={10}>
                    <SkillItem 
                        skillImage={express}
                        color="#BA1C1B"
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
                        percent="85"
                    />
                </div>
                <div className="skill-item" key={12}>
                    <SkillItem
                        percent="80" 
                        skillName="Redux"
                        skillImage={redux_logo}
                        color="#943ab8"
                    />
                </div>
                <div className="skill-item" key={13}>
                    <SkillItem
                        percent="87" 
                        skillName="JS"
                        skillImage={js_logo}
                        color="#cab818"
                    />
                </div>
                <div className="skill-item" key={14}>
                    <SkillItem
                        percent="70" 
                        skillImage={jquery_logo}
                        color="#449ccf"
                    />
                </div>
                <div className="skill-item" key={15}>
                    <SkillItem
                        percent="70" 
                        skillName="React"
                        skillImage={bootstrap_logo}
                        color="#62478A"
                    />
                </div>
                <div className="skill-item" key={16}>
                    <SkillItem
                        percent="80" 
                        skillImage={css_logo}
                        color="#449ccf"
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
    
    render(){
        return(
            <div className="resume-container">
                <div className="experiences-block" style={{paddingTop:'2em'}}>
                                 
                                 <Timeline />
                </div>
                        <h2 className="section-title-resume" style={{textAlign:"center"}}>Compétences</h2>
                    <div className="skills-block">
                        <div  style={{display:"flex",marginBottom:100,alignItems:"center",justifyContent:"center",flexDirection:'row',width:"80%",flexWrap:"wrap"}}>
                            
                                <Card2 
                                    content={this.renderBackEnd()}
                                    icon="fas fa-cogs"
                                    title="Back End"
                                />
                                <Card2 
                                    content={this.renderFrontEnd()}
                                    icon="fas fa-desktop"
                                    title="Front End"    
                                />
                                <Card2 
                                    content={this.renderMobile()}
                                    icon="fas fa-mobile-alt"
                                    title="Développement mobile"
                                />
                                <Card2 
                                    title="Outils & Devops"
                                    icon="fas fa-tools"
                                    content={this.renderDevops()}
                                />
                            
                        </div>
                        <WaveButton 
                            label="Obtenir mon cv"
                            path="/cv_3.3.pdf"
                            file
                        />
                    </div>
                    
                </div>  
                
                  

        )
    }
    

}
