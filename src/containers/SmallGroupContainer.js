import React, { Component } from 'react'
import SmallGroup from '../components/SmallGroup.js'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'

// TODO: sort will mount small group container
// TODO: select my group function will mount small group details

class SmallGroupContainer extends Component {
  render() {
    return (
      console.log('container props', this.props),
      <div>
        <Row>
        {this.props.smallGroups.map((smallGroup, index) => <SmallGroup {...smallGroup} key={index}/>)}
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  smallGroups: state.smallGroups
})

export default connect(mapStateToProps) (SmallGroupContainer);
