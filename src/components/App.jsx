import React, { Component } from "react";
import Chirps from "./Chirps";
import NewChirp from "./NewChirp";
import logo from "../logo.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chirpArray: [
        "Hello World!",
        "First Twee-- err, I mean Chirp!",
        "Second Chirp! OMG!",
        "Very Chirp! Much WOW!"
      ]
    };
  }
  handleNewChirp(message) {
    let newChirpArray = [...this.state.chirpArray];
    newChirpArray.push(message);
    this.setState({ chirpArray: newChirpArray });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo " alt="logo" />
          <h1 className="App-title">Welcome to Chirper!</h1>
        </header>
        <div className="Container" />
        <NewChirp handleNewChirp={message => this.handleNewChirp(message)} />
        <Chirps list={this.state.chirpArray} />
      </div>
    );
  }
}

export default App;
