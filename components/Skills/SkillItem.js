import React, { Component } from "react";
export default class SkillItem extends Component {
  render() {
    return (
      <div className="skill-item-img">
        <img src={this.props.skillImage} />
      </div>
    );
  }
}
