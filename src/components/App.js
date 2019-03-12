import React, { Component } from 'react';
import Event from './Event.js'
import LargeGroupContainer from '../containers/LargeGroupContainer.js'
import AdminSort from './AdminSort'
import SmallGroupContainer from '../containers/SmallGroupContainer.js';

// TODO: add administrator's sort button sends sort action and renders small groups

class App extends Component {
  render() {
    return (
      <div className="text-center">
          <h1>Lunch pods!</h1>
          <p>Sign up to have lunch with a random group of Fins</p>
          <Event />
          <LargeGroupContainer />
          <AdminSort/>
          <SmallGroupContainer/>
      </div>
    );
  }
}

export default App;
