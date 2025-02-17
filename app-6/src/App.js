import React, { Component } from "react";
import "./App.css";
import Todo from "./todo"

class App extends Component {

  constructor() {
    super();

    this.state = {
      list: [],
      input: ""
    };
    this.handleAddTask = this.handleAddTask.bind(this)
  }
  handleInputChange(value) {
    this.setState({input: value})
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input], input: ""
    });
  }

  render() {
    let list = this.state.list.map((el, index) => {
      return <Todo key={index} task={el} />;
    })

    return (
      <div className="App">
        <h1>My to-do list:</h1>
      
        <input value={this.state.input} placeholder="Enter new take"
          onChange={e => this.handleInputChange(e.target.value)}></input>
      <button onClick={this.handleAddTask}>Add</button>
        <br />
          {list}
          </div>
    );
  }
}

export default App;
