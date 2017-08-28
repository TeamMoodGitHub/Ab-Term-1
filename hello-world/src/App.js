import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(a) {
    super(a);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Worldwide Clock</h2>
        </div>
        <h2>It is now at your location {this.state.date.toLocaleString('en-US')}.</h2>
        <h2>It is now {this.state.date.toGMTString()}.</h2>
        <p className="App-in">
          Choose time zone :
        </p>
      </div>
    );
  }
}

export default App;
