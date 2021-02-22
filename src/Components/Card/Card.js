import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  render() {
    return (
      <div className="Card">
        <img src={this.props.robot.img} alt={this.props.robot.img} />
        <h4>{this.props.robot.name}</h4>
        <h6>{this.props.robot.email}</h6>
      </div>
    );
  }
}

export default Card;
