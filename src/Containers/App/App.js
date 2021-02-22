import React, { Component } from "react";
import CardList from "../../Components/CardList/CardList";
import "./App.css";
import Topbar from "../../Components/Topbar/Topbar";
import robots from "../../robots";

class App extends Component {
  state = {
    robots: robots,
  };
  onChangeHundler = (e) => {
    this.setState({
      robots: robots.filter((rebot) =>
        rebot.name.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    });
  };
  render() {
    return (
      <>
        <Topbar onChangeHundler={this.onChangeHundler} />
        <CardList robots={this.state.robots} />
      </>
    );
  }
}

export default App;
