import React, { Component } from 'react'
import { Media } from 'react-bootstrap'
import { connect } from 'react-redux'

// TODO: pass users in as props
// TODO: hover action brings up user details

class User extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
     <Media>
  <Media.Body>
      <img width={64} height={64} src={this.props.users[1].Photo}/>
      <div><a href={this.props.users.Link}>{this.props.users.Name}</a>
      </div>
  </Media.Body>
</Media>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps) (User);
