import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: 0
    };

    this.updateNum = this.updateNum.bind(this);
  }

  updateNum(){
    this.setState({
      value: this.state.value + 1
    })
  }
  
  render() {
    return (
      <div>
        <span className="value">{this.state.value}</span>
        <button id="inc" onClick={this.updateNum}>Incrementa</button>
      </div>
    );
  }

}

export default App;
