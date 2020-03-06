import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'

export default class Education extends Component {
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
                                <img style={{width:100,height:100}} src={this.props.img} alt="university_logo" />
                            </div>
                        </Cell>
                    </Grid>
                </Cell>
                <Cell col={8}>
                    <h4 >
                        {this.props.schoolName}
                    </h4>
                    <p>
                        {this.props.schoolDescription}
                    </p>
                </Cell>
            </Grid>
        )
    }
}
