import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'

export default class Education extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>
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
