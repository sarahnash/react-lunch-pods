import React, { Component } from 'react'
import User from '../components/User.js'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'

class LargeGroupContainer extends Component {
  render() {
    return (
      <div fluid>
        <br/>
        <Row style={{paddingLeft: 10 + 'em', paddingRight: 10 + 'em'}}>
          {this.props.users.map((user, index) => <User user={user} key={index}/>)}
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps) (LargeGroupContainer);
