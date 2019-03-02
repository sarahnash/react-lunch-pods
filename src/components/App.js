import React, { Component } from 'react';
import User from './User.js'
import Event from './Event.js'
import LargeGroupContainer from '../containers/LargeGroupContainer.js'
import { Heading } from 'react-bulma-components';
import MoreInfoContainer from '../containers/MoreInfoContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Heading>
            Lunch pods!
          </Heading>
          <User />
          <Event />
          <LargeGroupContainer />
          <MoreInfoContainer />
      </div>
    );
  }
}

export default App;
