import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";
import Travels from "./Travels"


class App extends Component {
  render() {
    return (
      <div className="App">
  
        <h1>
          Travel
        </h1>
        <Travels/>

      </div>
    );
  }
}

export default App;
