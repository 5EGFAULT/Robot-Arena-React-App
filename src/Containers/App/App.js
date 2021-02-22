import React, { Component } from "react";
import CardList from "../../Components/CardList/CardList";
import "./App.css";
import Topbar from "../../Components/Topbar/Topbar";
const ImgsApi = "https://robohash.org/";

const robots = [
  {
    name: "ayoub souinia",
    email: "email@gmail.com",
    img: ImgsApi + "ayoub souinia",
  },
  {
    name: "ayoub smt else",
    email: "email@gmail.com",
    img: ImgsApi + "ayoub",
  },
  {
    name: "ayoub souinia",
    email: "email@gmail.com",
    img: ImgsApi + "ayoub souinia",
  },
  {
    name: "ayoub smt else",
    email: "email@gmail.com",
    img: ImgsApi + "ayoub",
  },
  {
    name: "ayoub souinia",
    email: "email@gmail.com",
    img: ImgsApi + "ayoub souinia",
  },
  {
    name: "ayoub smt else",
    email: "email@gmail.com",
    img: ImgsApi + "ayoub",
  },
  {
    name: "ayoub souinia",
    email: "email@gmail.com",
    img: ImgsApi + "ayoub souinia",
  },
  {
    name: "ayoub smt else",
    email: "email@gmail.com",
    img: ImgsApi + "ayoub",
  },
];

class App extends Component {
  state = {
    robots: robots,
  };
  onChangeHundler = (e) => {
    this.setState({
      robots: robots.filter((rebot) => rebot.name.includes(e.target.value)),
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
