import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
  
    this.state = {
      message: ''
    }
  }
  messageChange(e) {
    console.log(e)
    this.setState({message: e.target.value}) 
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <input onChange={e => this.messageChange(e)} />

      </div>
      
    );
  }
}

export default App;
