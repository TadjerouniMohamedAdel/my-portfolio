import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'

export default class Education extends Component {
    render() {
        return (
                    <div>
                          <h3 style={{margin:0,padding:0,fontWeight:600,color:"rgba(233,33,99,1)",fontSize:25}}>{this.props.schoolName}</h3>
                          <p>
                          <img style={{width:100,height:100}} src={this.props.img} alt="university_logo" />
                            {this.props.schoolDescription}
                          </p>  
                    </div>
        )
    }
}
