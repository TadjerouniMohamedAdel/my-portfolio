import React from 'react';
import './App.css';
import {Header,Drawer,Navigation,Content,Layout} from 'react-mdl'
import Main from './components/Main';
import { Link } from 'react-router-dom'
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom'


const  App = ()=> {
    const hideToggle= (event) =>{
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
    let location = useLocation();
  
        return (
            <div className="demo-big-content">
                <Layout >
                    <Header style ={{
                                backgroundColor:location.pathname=="/" ?"#3586ff":"transparent",transition:"0.8s"
                            }} 
                            className="header-color" 
                            title={<Link to="/" 
                            style={{textDecoration:'none',color:location.pathname=="/" ?"#fff":"#000",transition:"0.8s"}}
                            >
                                My Portfolio</Link> } scroll>
                        <Navigation>
                            <Link style={{color:location.pathname=="/" ?"#fff":"#000",transition:"0.8s"}} to="/">Home</Link>
                            <Link style={{color:location.pathname=="/" ?"#fff":"#000",transition:"0.8s"}} to="/resume">Resume</Link>
                            <Link style={{color:location.pathname=="/" ?"#fff":"#000",transition:"0.8s"}} to="/projects">Projects</Link>
                            <Link style={{color:location.pathname=="/" ?"#fff":"#000",transition:"0.8s"}} to="/aboutme">About Me</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link to="/" style={{textDecoration:'none',color:'black'}}>My Portfolio</Link> }>
                        <Navigation>
                            <Link  onClick={() => hideToggle()} to="/">Home</Link>
                            <Link  onClick={() => hideToggle()} to="/resume">Resume</Link>
                            <Link  onClick={() => hideToggle()} to="/projects">Projects</Link>
                            <Link  onClick={() => hideToggle()} to="/aboutme">About Me</Link>
                        </Navigation>
                    </Drawer>
                    <Content className="section">
                        <section className="section-app-content">
                            <div className="page-content" />
                            <Main/>
                        </section>
                        <footer>
                                <Footer />
                        </footer>
                    </Content>
                </Layout>
            </div>
        );
    
}

export default App;
