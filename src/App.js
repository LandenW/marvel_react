import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Character from './containers/Character'
import Jeopardy from './containers/Jeopardy'

class App extends Component {
  render() {
    return (
      <div>
        Travis Test
         <Jeopardy />
        <Character />
      </div>
    );
  }
}

export default App;
