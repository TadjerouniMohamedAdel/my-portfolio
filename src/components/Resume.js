import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                                 alt="avatar"
                                 style={{height:'200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Adel Mohamed Tadjerouni</h2>
                        <h4 style={{color:'gray'}}>Developer</h4>
                        <hr style={{borderTop:'3px solid #833fb2',width:"50%"}}/>
                        <p>
                            Irure anim non laborum adipisicing laborum quis anim dolore occaecat laborum ad pariatur non. Ipsum excepteur mollit dolor sit sit laboris id ex. Enim voluptate pariatur nulla commodo ullamco nostrud ut veniam culpa est eu irure culpa.
                        </p> 
                        <hr style={{borderTop:'3px solid #833fb2',width:"50%"}}/>
                        <h5>Address</h5>
                        <p>
                            3000 Site bouninan Alger Algerie
                        </p>
                        <h5>Phone</h5>
                        <p>(123) 456-7890</p>
                        <h5>Email</h5>
                        <p>mohnagato@gmail.com</p>
                        <h5>Web</h5>
                        <p>myWebsite.com</p>
                        <hr style={{borderTop:'3px solid #833fb2',width:"50%"}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                      <h2>Education</h2>
                      <Education
                        startYear={2002}
                        endYear={2006}
                        schoolName="My University"
                        schoolDescription="Officia incididunt tempor proident sit deserunt labore pariatur ipsum ipsum nostrud non tempor laborum magna. Laboris ipsum eu non proident ad. Qui ea nisi et ut. Nulla tempor nulla ipsum cillum sit incididunt aute Lorem elit amet. Sit pariatur culpa excepteur anim veniam mollit reprehenderit exercitation ex est proident sunt minim cupidatat. Culpa exercitation non nisi et in nulla occaecat minim non sunt adipisicing. Eiusmod ad dolore labore magna id sint nostrud aliqua voluptate esse."
                      />
                      <Education
                        startYear={2002}
                        endYear={2006}
                        schoolName="My 2nd University"
                        schoolDescription="Officia incididunt tempor proident sit deserunt labore pariatur ipsum ipsum nostrud non tempor laborum magna. Laboris ipsum eu non proident ad. Qui ea nisi et ut. Nulla tempor nulla ipsum cillum sit incididunt aute Lorem elit amet. Sit pariatur culpa excepteur anim veniam mollit reprehenderit exercitation ex est proident sunt minim cupidatat. Culpa exercitation non nisi et in nulla occaecat minim non sunt adipisicing. Eiusmod ad dolore labore magna id sint nostrud aliqua voluptate esse."
                      />
                      
                      <hr style={{borderTop:'3px solid #e22947'}}/>
                      <Experience 
                        startYear={2012}
                        endYear={2016}
                        jobName="First job"
                        jobDescription="Officia incididunt tempor proident sit deserunt labore pariatur ipsum ipsum nostrud non tempor laborum magna. Laboris ipsum eu non proident ad. Qui ea nisi et ut. Nulla tempor nulla ipsum cillum sit incididunt aute Lorem elit amet. Sit pariatur culpa excepteur anim veniam mollit reprehenderit exercitation ex est proident sunt minim cupidatat. Culpa exercitation non nisi et in nulla occaecat minim non sunt adipisicing. Eiusmod ad dolore labore magna id sint nostrud aliqua voluptate esse."
                      
                      />
                      <Experience 
                        startYear={2016}
                        endYear={2020}
                        jobName="Second job"
                        jobDescription="Officia incididunt tempor proident sit deserunt labore pariatur ipsum ipsum nostrud non tempor laborum magna. Laboris ipsum eu non proident ad. Qui ea nisi et ut. Nulla tempor nulla ipsum cillum sit incididunt aute Lorem elit amet. Sit pariatur culpa excepteur anim veniam mollit reprehenderit exercitation ex est proident sunt minim cupidatat. Culpa exercitation non nisi et in nulla occaecat minim non sunt adipisicing. Eiusmod ad dolore labore magna id sint nostrud aliqua voluptate esse."
                      
                      />
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
                </Grid>
            </div>
        )
    }
}
