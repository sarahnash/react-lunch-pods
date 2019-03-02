import React, { Component } from 'react'
import PastGroups from '../components/PastGroups.js'
import Stats from '../components/Stats.js'


class MoreInfoContainer extends Component {
  render() {
    return (
      <div className="box">
       <PastGroups />
       <Stats />
      </div>
    )
  }
}

export default MoreInfoContainer
