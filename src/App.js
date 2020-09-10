import React from 'react';
import './App.css';
import {Header,Drawer,Navigation,Content,Layout} from 'react-mdl'
import Main from './components/Main';
import { Link } from 'react-router-dom'
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom'
import { amt2 } from './Images/Images';
import emailjs from 'emailjs-com';

const  App = ()=> {
    emailjs.init(process.env.REACT_APP_EMAIL_USER_ID);
    const hideToggle= (event) =>{
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
    let location = useLocation();
  
        return (
            <div className="demo-big-content">
                <Layout fixedHeader>
                    <Header style ={{
                                backgroundColor:location.pathname=="/" ?"#3586ff":"#fff",transition:"0.8s"
                            }} 
                            
                            className="header-color" 
                            title={<Link to="/" 
                            style={{textDecoration:'none',color:location.pathname=="/" ?"#fff":"#000",transition:"0.8s"}}
                            >
                                Mon Portfolio</Link> } scroll>
                        <Navigation className="app-bar-navigation">
                            <Link style={{color:location.pathname=="/" ?"#fff":"#000",fontWeight:"600",fontSize:17,transition:"0.8s"}} to="/">Accueil</Link>
                            <Link style={{color:location.pathname=="/" ?"#fff":"#000",fontWeight:"600",fontSize:17,transition:"0.8s"}} to="/resume">Cursus</Link>
                            <Link style={{color:location.pathname=="/" ?"#fff":"#000",fontWeight:"600",fontSize:17,transition:"0.8s"}} to="/projects">Projets</Link>
                            <Link style={{color:location.pathname=="/" ?"#fff":"#000",fontWeight:"600",fontSize:17,transition:"0.8s"}} to="/aboutme">À propos</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link to="/" style={{textDecoration:'none',color:'black',marginLeft:20}}>Mon Portfolio</Link> }>
                        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                            <img src={amt2} width={150} height={140} style={{textAlign:"center"}}/>
                            <span style={{textAlign:"center",fontWeight:"800"}}>v-1.0.0</span>
                        </div>
                        <Navigation>
                            <Link  onClick={() => hideToggle()} to="/">Accueil</Link>
                            <Link  onClick={() => hideToggle()} to="/resume">Cursus</Link>
                            <Link  onClick={() => hideToggle()} to="/projects">Projets</Link>
                            <Link  onClick={() => hideToggle()} to="/aboutme">À propos</Link>
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
