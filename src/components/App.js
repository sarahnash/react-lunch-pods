import React, { Component } from 'react';
import Event from './Event.js'
import LargeGroupContainer from '../containers/LargeGroupContainer.js'
import MoreInfoContainer from '../containers/MoreInfoContainer.js';

// TODO: add administrator's sort button sends sort action and renders small groups

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>
            Lunch pods!
          </h1>
          <Event />
          <LargeGroupContainer />
          <MoreInfoContainer />
      </div>
    );
  }
}

export default App;
