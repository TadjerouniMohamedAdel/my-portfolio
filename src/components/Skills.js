import React, { Component } from 'react'
import { Grid, Cell, ProgressBar } from 'react-mdl'

export default class Skills extends Component {
    render() {
        return (
            // <Grid>
            //     <Cell col={12}>
            //         <div style={{display:'flex'}}>
            //             {this.props.skill}
            //             <ProgressBar style={{margin:width:'50%'}} progress={this.props.progress}/>
            //         </div>
            //     </Cell>
            // </Grid>
            <div className="language-item">
                <div >
                    {this.props.skill}
                </div>
                <div style={{marginLeft:15,width:200}}>
                <i style={{marginRight:5}} class="fa fa-star-o" aria-hidden="true"></i>
                <i style={{marginRight:5}} class="fa fa-star-o" aria-hidden="true"></i>
                <i style={{marginRight:5}} class="fa fa-star-o" aria-hidden="true"></i>
                <i style={{marginRight:5}} class="fa fa-star-o" aria-hidden="true"></i>
                <i style={{marginRight:5}} class="fa fa-star-o" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}
