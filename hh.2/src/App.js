import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


//var Select = require('react-select');
var options = [
  { value: 'GMT	Greenwich Mean Time	GMT', label: 'Greenwich Mean Time	GMT/UTC' },
  { value: 'ECT	European Central Time	GMT+1:00', label: 'ECT	European Central Time	GMT+1:00' },
  { value: 'EET	Eastern European Time	GMT+2:00', label: 'EET	Eastern European Time	GMT+2:00' },
  { value: 'EAT	Eastern African Time	GMT+3:00', label: 'EAT	Eastern African Time	GMT+3:00' },
  { value: 'MET	Middle East Time	GMT+3:30', label: 'MET	Middle East Time	GMT+3:30' },
  { value: 'NET	Near East Time	GMT+4:00', label: 'NET	Near East Time	GMT+4:00' },
  { value: 'PLT	Pakistan Lahore Time	GMT+5:00', label: 'PLT	Pakistan Lahore Time	GMT+5:00' },
  { value: 'IST	India Standard Time	GMT+5:30', label: 'IST	India Standard Time	GMT+5:30' },
  { value: 'BST	Bangladesh Standard Time	GMT+6:00', label: 'BST	Bangladesh Standard Time	GMT+6:00' },
  { value: 'VST	Vietnam Standard Time	GMT+7:00', label: 'VST	Vietnam Standard Time	GMT+7:00' },
  { value: 'CTT	China Taiwan Time	GMT+8:00', label: 'CTT	China Taiwan Time	GMT+8:00' },
  { value: 'JST	Japan Standard Time	GMT+9:00', label: 'JST	Japan Standard Time	GMT+9:00' },
  { value: 'ACT	Australia Central Time	GMT+9:30', label: 'ACT	Australia Central Time	GMT+9:30' },
  { value: 'AET	Australia Eastern Time	GMT+10:00', label: 'AET	Australia Eastern Time	GMT+10:00' },
  { value: 'SST	Solomon Standard Time	GMT+11:00', label: 'SST	Solomon Standard Time	GMT+11:00' },
  { value: 'NST	New Zealand Standard Time	GMT+12:00', label: 'NST	New Zealand Standard Time	GMT+12:00' },

];

function logChange(value) {
  console.log("Selected: " + JSON.stringify(value));
}

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
        <Select
  name="form-field-name"
  value={this.state.active}
  options={options}
  onChange={logChange}
/>
      </div>
    );
  }
}

export default App;
