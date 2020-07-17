import React from 'react';
import './App.css';
import {Header,Drawer,Navigation,Content,Layout} from 'react-mdl'
import Main from './components/Main';
import { Link } from 'react-router-dom'


class App extends React.Component {
    hideToggle= (event) =>{
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
    render(){
        return (
            <div className="demo-big-content">
                <Layout >
                    <Header className="header-color" title={<Link to="/" style={{textDecoration:'none',color:'white'}}>My Portfolio</Link> } scroll>
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/projects">Projects</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link to="/" style={{textDecoration:'none',color:'black'}}>My Portfolio</Link> }>
                        <Navigation>
                            <Link  onClick={() => this.hideToggle()} to="/">Home</Link>
                            <Link  onClick={() => this.hideToggle()} to="/resume">Resume</Link>
                            <Link  onClick={() => this.hideToggle()} to="/projects">Projects</Link>
                        </Navigation>
                    </Drawer>
                    <Content className="section">
                        <section className="section-app-content">
                            <div className="page-content" />
                            <Main/>
                        </section>
                        <footer>
                                <h1 align="center">footer</h1>
                        </footer>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
