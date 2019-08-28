import React, { Component } from "react";
import "./App.css";
import Image from "./Image";

class App extends Component {
  constructor() {
    super()
    this.state = {
      url: "https://http.cat/409"
    }
  }
  render() {
    return (
      <div className="App">
        <Image myImage={this.state.url} />

      </div>
    );
  }
}

export default App;
