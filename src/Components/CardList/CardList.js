import React, { Component } from "react";
import "./CardList.css";
import Card from "../../Components/Card/Card";

class CardList extends Component {
  render() {
    return (
      <div className="CardList">
        {this.props.robots.map((robot, i) => (
          <Card key={i} robot={robot}></Card>
        ))}
      </div>
    );
  }
}

export default CardList;
