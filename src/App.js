import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FirstComp from "./FirstComponent";
import SecondComp from "./SecondComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstComp />
        <SecondComp />
      </div>
    );
  }
}

export default App;
