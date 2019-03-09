import React, { Component } from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import User from './User'

class SmallGroup extends Component {
  render() {
    return (
      <div>
        <Row>
        {this.props.users.map((user, index) => <User {...user} key={index}/>)}
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  smallGroups: state.smallGroups
})

export default connect(mapStateToProps) (SmallGroup)