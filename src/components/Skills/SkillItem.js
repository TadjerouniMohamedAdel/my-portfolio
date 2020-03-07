import React, { Component } from 'react'
import './SkillItem.css';
export default class SkillItem extends Component {
    render() {
        return (
        <div className="card">
            <div className="box">
                <div className="percent">
                    <svg>
                        <circle cx="70" cy="70" r="70"> </circle>
                        <circle cx="70" cy="70" r="70" style={{stroke:this.props.color,strokeDashoffset:"calc(440 - (440 * "+this.props.percent+") / 100)"}}> </circle>
                    </svg>
                    <div className="number">
                      <img src={this.props.skillImage} width={this.props.imageWidth} height={this.props.imageHeight}/>
                    </div>
                </div>
            {/* <span className="text">{this.props.skillName}</span> */}
            </div>
        </div>
        )
    }
}
