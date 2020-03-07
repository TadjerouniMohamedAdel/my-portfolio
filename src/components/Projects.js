import React, { Component } from 'react'
import {Tabs , Tab,Grid,Cell,Card,CardTitle,CardActions,Button,CardMenu,IconButton, CardText} from 'react-mdl'
export default class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab:0 }
        
    }

    toggleCategories = ()=>{
        switch (this.state.activeTab) {
            case 0:
                   return(
                       <div className="projects-grid">
                                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                                    <CardTitle style={{color:'#fff',height:'176px',background:'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>
                                            React Project #1
                                    </CardTitle>
                                    <CardText>
                                        Mollit aliquip quis Lorem duis id nostrud cupidatat ex fugiat adipisicing occaecat deserunt exercitation. Eiusmod ea cillum amet dolore aute eu velit sint dolore.
                                    </CardText>
                                    <CardActions border>
                                            <Button colored>Github</Button>
                                            <Button colored>CodePen</Button>
                                            <Button colored>LiveDemo</Button>
                                    </CardActions>
                                    <CardMenu style={{color:"#fff"}}>
                                            <IconButton name="share"/>
                                    </CardMenu>
                                </Card>
                                <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                                <CardTitle style={{color:'#fff',height:'176px',background:'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>
                                        React Project #2
                                </CardTitle>
                                <CardText>
                                    Mollit aliquip quis Lorem duis id nostrud cupidatat ex fugiat adipisicing occaecat deserunt exercitation. Eiusmod ea cillum amet dolore aute eu velit sint dolore.
                                </CardText>
                                <CardActions border>
                                        <Button colored>Github</Button>
                                        <Button colored>CodePen</Button>
                                        <Button colored>LiveDemo</Button>
                                </CardActions>
                                <CardMenu style={{color:"#fff"}}>
                                        <IconButton name="share"/>
                                </CardMenu>
                            </Card>
                            <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                            <CardTitle style={{color:'#fff',height:'176px',background:'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>
                                    React Project #3
                            </CardTitle>
                            <CardText>
                                Mollit aliquip quis Lorem duis id nostrud cupidatat ex fugiat adipisicing occaecat deserunt exercitation. Eiusmod ea cillum amet dolore aute eu velit sint dolore.
                            </CardText>
                            <CardActions border>
                                    <Button colored>Github</Button>
                                    <Button colored>CodePen</Button>
                                    <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color:"#fff"}}>
                                    <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                       </div>
                   ) 
            break;
            case 1:
                    return(<div><h1>this is angular</h1></div>) 
            break;
            
        
        }
    }

    render() {
        return (
            <div className="category-taba">
                    <Tabs activeTab={this.state.activeTab}onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                        <Tab>Personel</Tab>
                        <Tab>Profesionelle</Tab>
                        
                    </Tabs>
                    <section > 
                        <Grid >
                            <Cell col={12}>
                                <div className="content">
                                    {this.toggleCategories()}
                                </div>
                            </Cell>
                        </Grid>
                    </section>
            </div>
        )
    }
}
