import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      baseballTeams: ["Angels", "Dodgers", "Astros", "Red Sox"]
    }
  }
  render() {
  const baseballTeams = this.state.baseballTeams.map((element,index) => 
    { return <h2 key={index}> {element}</h2>})
    return (
          <div className="App">{baseballTeams}</div>
      );
  }
}

export default App;
