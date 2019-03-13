import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'

class AdminSort extends Component {
  
  sortUsers(event) {
    event.preventDefault()
    this.props.makeSmallGroups()
  }

  resetUsers(event) {
    event.preventDefault()
    this.props.resetUsers()
  }

  render() {
    return (
      <div>
        <br/>
        <h3>Admin Section Only</h3>
        <Button id="Sort" type="button" onClick={(event) => this.sortUsers(event)}>Sort Lunch Pods!</Button>
        <Button id="Reset" type="button" onClick={(event) => this.resetUsers(event)}>Reset Users</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  makeSmallGroups: () => dispatch({type: 'MAKE_SMALL_GROUPS'}),
  resetUsers: () => dispatch({type: 'RESET_USERS'})
})

export default connect(mapStateToProps, mapDispatchToProps) (AdminSort);