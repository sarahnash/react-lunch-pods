import React, { Component } from 'react'
import User from '../components/User.js'

class LargeGroupContainer extends Component {
  render() {
    return (
      <div className="box">
        <h2>
          large group container will hold all the user components
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

export default LargeGroupContainer
