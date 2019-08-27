import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      filterString: "",
      baseballTeams: ["Angels", "Dodgers", "Astros", "Red Sox", "Yankees", "Cubs"]
    }
  }

  handleChange(filter) {
    this.setState ({filterString: filter});
  }
  render() {
  const baseballTeams = this.state.baseballTeams.filter((element,index) => 
    { return element.includes(this.state.filterString);
    })
      .map((element,index) => {
      return <h2 key={index}> {element}</h2>})
    return (
          <div className="App">
          <input onChange={e => this.handleChange(e.target.value)} type="text"/>{baseballTeams}
          </div>
    );
  }
}
export default App;
