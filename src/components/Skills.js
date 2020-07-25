import React, { Component } from 'react'
import { Grid, Cell, ProgressBar } from 'react-mdl'
import { gold } from 'color-name'

export default class Skills extends Component {
    
    renderGold = ()=>{
        var rows = [];
        for (var i = 0; i < this.props.progress; i++) {
            // note: we add a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            rows.push( <i style={{marginRight:5,color:"#e18709"}} className="fas fa-star" aria-hidden="true" key={i}></i>);
        }
        return rows;
    }
    renderBlank = ()=>{
        var rows = [];
        for (var i = 0; i < 5 - this.props.progress; i++) {
            // note: we add a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            rows.push( <i key={5-i} style={{marginRight:5}} className="fas fa-star" aria-hidden="true"></i>);
        }
        return rows;
    
    }    
    render() {
        return (
            
            <div className="language-item">
                <div >
                    {this.props.skill}
                </div>
                <div style={{marginLeft:15,width:200}}>
                    {this.renderGold()}
                    {this.renderBlank()}
                </div>
            </div>
        )
    }
}
