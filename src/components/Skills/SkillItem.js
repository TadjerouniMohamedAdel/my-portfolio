import React, { Component } from 'react'
import './SkillItem.css';
export default class SkillItem extends Component {
    render() {
        return (
        
            <div className="skill-item-img">
                <img src={this.props.skillImage} />
            </div>

        )
    }
}
