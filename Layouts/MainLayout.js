import {useEffect} from 'react';
import {Header,Drawer,Navigation,Content,Layout} from 'react-mdl'
// import Link  from 'next/link'
import { amt2 } from '../Images/Images';
import emailjs from 'emailjs-com';
import Footer from '../components/Footer/Footer';
import {useRouter} from 'next/router'
import {IconButton, Link } from '@material-ui/core'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js'
import {motion} from 'framer-motion'
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'next-i18next'
import MenuIcon from '@material-ui/icons/Menu';
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
    const { t } = useTranslation('layout')
  
    useEffect(()=>{
        let el = document.querySelector(".mdl-layout__drawer-button")
        console.log(el)
        el.style="display:none"
    },[])
    return (
        <div className="demo-big-content">
                <Layout fixedHeader>
                    <Header style ={{
                                backgroundColor:location.pathname=="/" ?"#3586ff":"#fff",transition:"0.8s"
                            }} 
                            
                            className="header-color" 
                            title={
                            <>
                            <IconButton onClick={()=>hideToggle()} style={{position:"relative",left:-20}}>
                                <MenuIcon style={{color:"black",fontSize:25}}/>
                            </IconButton>
                            <Link href="/" 
                            style={{textDecoration:'none',color:location.pathname=="/" ?"#fff":"#000",transition:"0.8s"}}
                            >
                                Nagatodev</Link>
                                </>
                                 } scroll>
                        <Navigation className="app-bar-navigation">
                            <Link style={{color:location.pathname=="/" ?"#fff":"#000",fontWeight:"600",fontSize:17,textDecoration:'none',cursor:"pointer",transition:"0.8s"}} onClick={()=>location.push("/")}>{t("navbar.links.home")}</Link>
                            <Link style={{color:location.pathname=="/" ?"#fff":"#000",fontWeight:"600",fontSize:17,textDecoration:'none',cursor:"pointer",transition:"0.8s"}} onClick={()=>location.push("/resume")}>{t("navbar.links.resume")}</Link>
                            <Link style={{color:location.pathname=="/" ?"#fff":"#000",fontWeight:"600",fontSize:17,textDecoration:'none',cursor:"pointer",transition:"0.8s"}} onClick={()=>location.push("/projects")}>{t("navbar.links.projects")}</Link>
                            <Link style={{color:location.pathname=="/" ?"#fff":"#000",fontWeight:"600",fontSize:17,textDecoration:'none',cursor:"pointer",transition:"0.8s"}} onClick={()=>location.push("/aboutme")}>{t("navbar.links.about")}</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link onClick={()=>location.push("/")} style={{textDecoration:'none',color:'black',marginLeft:20}}>{t("my_portfolio")}</Link> }>
                        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                            <img src={amt2} width={150} height={140} style={{textAlign:"center"}}/>
                            <span style={{textAlign:"center",fontWeight:"800"}}>v-1.0.0</span>
                        </div>
                        <Navigation>
                            <Link style={{textDecoration:"none",cursor:"pointer"}}  onClick={() => hideToggle()} onClick={()=>location.push("/")}>{t("navbar.links.home")}</Link>
                            <Link style={{textDecoration:"none",cursor:"pointer"}}  onClick={() => hideToggle()} onClick={()=>location.push("/resume")}>{t("navbar.links.resume")}</Link>
                            <Link style={{textDecoration:"none",cursor:"pointer"}}  onClick={() => hideToggle()} onClick={()=>location.push("/projects")}>{t("navbar.links.projects")}</Link>
                            <Link style={{textDecoration:"none",cursor:"pointer"}}  onClick={() => hideToggle()} onClick={()=>location.push("/aboutme")}>{t("navbar.links.about")}</Link>
                        </Navigation>
                    </Drawer>
                    <Content className="section">
                                <LanguageSwitcher />
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
