import React, { Component } from 'react'
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl'
export default class Contacts extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Adel Mohamed Tadjerouni</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                             alt="avatar"
                             style={{height:'250px'}}
                        />
                        <p style={{width:"75%",margin:'auto',paddingTop:'1em'}}>
                            Ut ea consectetur culpa ipsum laboris enim deserunt eu esse eiusmod anim do ex. Consequat est adipisicing commodo magna magna velit cupidatat irure esse officia do anim consectetur. Dolor sunt fugiat consectetur in laborum occaecat culpa incididunt elit. Ipsum irure magna qui velit sit laboris ut et tempor aute.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (123) 456-7890
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                        <i className="fa fa-fax" aria-hidden="true" />
                                        (123) 456-7890
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        mohnagato@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true" />
                                        MySkypeId
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
