import React from 'react';
import {Header,Drawer,Navigation,Content,Layout} from 'react-mdl'
// import Link  from 'next/link'
import { amt2 } from '../Images/Images';
import emailjs from 'emailjs-com';
import Footer from '../components/Footer/Footer';
import {useRouter} from 'next/router'
import {Link } from '@material-ui/core'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js'
import {motion} from 'framer-motion'

const easing = [0.6, -0.05, 0.01, 0.99];
const animLayout= {
    initial: { x: "-100vw", opacity: 0,transition:{ease:easing,duration: 0.6,delay:0.6}},
    animate: { x: 0, opacity: 1,transition:{ease:easing,duration: 0.6,delay:0.8}},
};

const animFooter = {
    initial: { opacity: 0,transition:{ease:easing,}},
    animate: { opacity: 1,transition:{ease:easing,delay:2}},
};


const  MainLayout = ({children})=> {
    emailjs.init(process.env.REACT_APP_EMAIL_USER_ID);
    const hideToggle= (event) =>{
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
    const location = useRouter();
  
        return (
            <div className="demo-big-content">
                <Layout fixedHeader>
                    <Header style ={{
                                backgroundColor:location.pathname=="/" ?"#3586ff":"#fff",transition:"0.8s"
                            }} 
                            
                            className="header-color" 
                            title={<Link href="/" 
                            style={{textDecoration:'none',color:location.pathname=="/" ?"#fff":"#000",transition:"0.8s"}}
                            >
                                Nagatodev</Link> } scroll>
                        <Navigation className="app-bar-navigation">
                            <Link style={{color:location.pathname=="/" ?"#fff":"#000",fontWeight:"600",fontSize:17,transition:"0.8s"}} onClick={()=>location.push("/")}>Accueil</Link>
                            <Link style={{color:location.pathname=="/" ?"#fff":"#000",fontWeight:"600",fontSize:17,transition:"0.8s"}} onClick={()=>location.push("/resume")}>Cursus</Link>
                            <Link style={{color:location.pathname=="/" ?"#fff":"#000",fontWeight:"600",fontSize:17,transition:"0.8s"}} onClick={()=>location.push("/projects")}>Projets</Link>
                            <Link style={{color:location.pathname=="/" ?"#fff":"#000",fontWeight:"600",fontSize:17,transition:"0.8s"}} onClick={()=>location.push("/aboutme")}>À propos</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link onClick={()=>location.push("/")} style={{textDecoration:'none',color:'black',marginLeft:20}}>Mon Portfolio</Link> }>
                        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                            <img src={amt2} width={150} height={140} style={{textAlign:"center"}}/>
                            <span style={{textAlign:"center",fontWeight:"800"}}>v-1.0.0</span>
                        </div>
                        <Navigation>
                            <Link  onClick={() => hideToggle()} onClick={()=>location.push("/")}>Accueil</Link>
                            <Link  onClick={() => hideToggle()} onClick={()=>location.push("/resume")}>Cursus</Link>
                            <Link  onClick={() => hideToggle()} onClick={()=>location.push("/projects")}>Projets</Link>
                            <Link  onClick={() => hideToggle()} onClick={()=>location.push("/aboutme")}>À propos</Link>
                        </Navigation>
                    </Drawer>
                    <Content className="section">
                        <motion.section className="section-app-content" variants={animLayout} exit="initial" initial="initial" animate="animate">
                            <div className="page-content" />
                            { children}
                        </motion.section>
                        <motion.footer variants={animFooter} exit="initial" initial="initial" animate="animate">
                                <Footer />
                        </motion.footer>
                    </Content>
                </Layout>
            </div>
        );
    
}

export default MainLayout;
