import React, { Component } from 'react'
import SmallGroup from '../components/SmallGroup.js'
import { connect } from 'react-redux'
import Col from 'react-bootstrap/Col'

class SmallGroupContainer extends Component {
  render() {
    return (
      <div>
        <Col lg className="justify-content-md-center" style={{paddingLeft: 10 + 'em', paddingRight: 10 + 'em'}}>
        {this.props.smallGroups.map((smallGroup, index) => <SmallGroup smallGroup = {smallGroup} key={index}/>)}
        </Col>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  smallGroups: state.smallGroups
})

export default connect(mapStateToProps) (SmallGroupContainer);
