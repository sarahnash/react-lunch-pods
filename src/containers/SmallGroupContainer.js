import React, { Component } from 'react'
import SmallGroup from '../components/SmallGroup.js'
import { connect } from 'react-redux'

// TODO: sort will mount small group container
// TODO: select my group function will mount small group details

class SmallGroupContainer extends Component {
  render() {
    return (
      <div className="box">
        <div>
        {this.props.smallGroups.map((smallGroup, index) => <SmallGroup {...smallGroup} key={index}/>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  smallGroups: state.smallGroups
})

export default connect(mapStateToProps) (SmallGroupContainer);
