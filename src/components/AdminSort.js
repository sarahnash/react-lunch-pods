import React, { Component } from 'react'
import { connect } from 'react-redux'

class AdminSort extends Component {
  sortUsers(event) {
    event.preventDefault()
    this.props.makeSmallGroups()
  }

  render() {
    return (
      <div>
        <h3>Admin Section Only</h3>
        <button id="Sort" type="button" onClick={(event) => this.sortUsers(event)}>Sort Lunch Pods!</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  makeSmallGroups: () => dispatch({type: 'MAKE_SMALL_GROUPS'})
})

export default connect(mapStateToProps, mapDispatchToProps) (AdminSort);