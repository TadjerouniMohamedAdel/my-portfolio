import React from 'react'
import LandingPage from './LandingPage'
import {Switch,Route,withRouter} from 'react-router-dom'
import AboutMe from './AboutMe'
import styled from "styled-components";

import Resume from './Resume'
import Projects from './Projects'
import Contacts from './Contacts'
import {TransitionGroup,CSSTransition} from 'react-transition-group'

class Main extends React.Component{

    

    render(){
        const location = this.props.location;
        // const  currentKey = location.pathname.split("/")[1] || "/";
        // console.log(currentKey)
        return(
            <Wrapper>
        <TransitionGroup >
            <CSSTransition key={location.key} timeout={400} classNames={'fade'}>
            <section className="route-section">
                <Switch location={location}>
                    <Route  path="/aboutme" component={AboutMe} />
                    <Route  path="/resume" component={Resume} />
                    <Route  path="/projects" component={Projects} />
                    <Route  path="/contacts" component={Contacts} />
                    <Route exect path="/" component={LandingPage} />
                </Switch>
                </section>
               
            </CSSTransition>
    
        </TransitionGroup>
        </Wrapper>
    )

    }
}
const Wrapper = styled.div`
.fade-enter {
    opacity: 0.01;
}
.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 400ms ease-in;
}
.fade-exit {
    opacity: 1;
}
  
.fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 400ms ease-in;
}
div.transition-group {
    position: relative;
}
section.route-section {
 position: absolute;
 width: 100%;
 top: 0;
 left: 0;
}
`;

export default withRouter(Main);