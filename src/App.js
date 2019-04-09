import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        <h1>
          Travel
        </h1>

        </header>

        <Travel

          destination="Istabul"
          country="Turkey"
          photo="https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          distance="2500 km "
        />

        <Travel

          destination="Desert"
          country="Maroc"
          photo="https://images.unsplash.com/photo-1508513268030-f8a9af25721c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          distance="3000 km "
        />
      </div>
    );
  }
}

export default App;
