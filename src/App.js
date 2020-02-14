import React from 'react';
import './App.css';
import {Header,Drawer,Navigation,Content,Layout} from 'react-mdl'
import Main from './components/Main';
import { Link } from 'react-router-dom'


function App({location}) {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link to="/" style={{textDecoration:'none',color:'white'}}>My Portfolio</Link> } scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contacts</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link to="/" style={{textDecoration:'none',color:'black'}}>My Portfolio</Link> }>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contacts</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
