import React, { Component } from 'react'
import User from '../components/User.js'

// TODO: select my group function opens modal with small group details
// TODO: Chat functionality

class SmallGroupContainer extends Component {
  render() {
    return (
      <div className="box">
        <h2>
          Small group container will hold all the user components in a sorted group
        </h2>
        <div>
          <User />
          <User />
          <User />
        </div>
      </div>
    )
  }
}

export default SmallGroupContainer
