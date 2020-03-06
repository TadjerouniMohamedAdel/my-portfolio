import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default class Experience extends Component {
    render() {
        return (
           <Grid>
               <Cell col={4}>
                    <Grid>
                    <Cell col={6}>
                            <div style={{marginTop:15}}>
                               {this.props.startYear} - {this.props.endYear}
                            </div>
                        </Cell>
                        <Cell col={6}>
                            <div>
                                <img style={{width:this.props.imgWidth,height:this.props.imgHeight}} src={this.props.img} alt="company_logo" />
                            </div>
                        </Cell>
                    </Grid>
               </Cell>
               <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
                    <p>{this.props.jobDescription}</p>
               </Cell>
           </Grid>
        )
    }
}
