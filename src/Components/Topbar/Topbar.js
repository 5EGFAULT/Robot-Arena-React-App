import React, { Component } from "react";
import "./Topbar.css";
class Topbar extends Component {
  render() {
    return (
      <div className="bar">
        <h1>Robots Arena</h1>
        <input
          onChange={(e) => this.props.onChangeHundler(e)}
          type="text"
          placeholder="Search"
        />
      </div>
    );
  }
}

export default Topbar;
