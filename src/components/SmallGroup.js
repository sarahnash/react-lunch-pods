import React, { Component } from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import User from './User'

class SmallGroup extends Component {
  render() {
    return (
      console.log('smallgroup props', this.props),
      <div>
        <Row>
        {this.props.users(this.props).map((user, index) => <User {...user} key={index}/>)}
        </Row>
      </div>
    )
  }
}

export default SmallGroup;