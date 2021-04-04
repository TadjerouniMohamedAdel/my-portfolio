import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default function Experience(props){
        return (
           <Grid>
               <Cell col={4}>
                    
                            <div>
                                <img style={{width:props.imgWidth,height:props.imgHeight}} src={props.img} alt="company_logo" />
                            </div>
                       
               </Cell>
               <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>{props.jobName}</h4>
                    <p>{props.jobDescription}</p>
               </Cell>
           </Grid>
        )
    
}
