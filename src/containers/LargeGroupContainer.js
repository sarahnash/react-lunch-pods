import React, { Component } from 'react'
import User from '../components/User.js'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'

class LargeGroupContainer extends Component {
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
  users: state.users
})

export default connect(mapStateToProps) (LargeGroupContainer);
