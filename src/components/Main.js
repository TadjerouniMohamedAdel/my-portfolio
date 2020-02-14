import React from 'react'
import LandingPage from './LandingPage'
import {Switch,Route} from 'react-router-dom'
import AboutMe from './AboutMe'
import Resume from './Resume'
import Projects from './Projects'
import Contacts from './Contacts'

const Main = ()=>{
    return(
    <Switch>
        <Route  path="/aboutme" component={AboutMe} />
        <Route  path="/resume" component={Resume} />
        <Route  path="/projects" component={Projects} />
        <Route  path="/contacts" component={Contacts} />
        <Route exect path="/" component={LandingPage} />
    </Switch>
)
}
export default Main;