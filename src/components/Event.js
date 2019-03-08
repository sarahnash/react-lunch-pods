import React, { Component } from 'react'
import { connect } from 'react-redux'

class Event extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user:{
        photo: '../assets/sarah-headshot.jpg',
        name: 'Sarah',
        link: 'http://sarahnash.dev/'
      },
      yesButton: false,
      noButton: true,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  userGoing() {
    this.props.userGoing(this.state)
  }

  userDecline() {
    this.props.userDecline(this.state)
  }

  handleSubmit(event, type) {
    event.preventDefault()
    if (type === true) {
      this.userGoing()
      this.setState({yesButton: true, noButton: false})
    } else if (type === false) {
      this.userDecline()
      this.setState({noButton: true, yesButton: false})
    }
  }

  render() {
    return (
      <div>
        <span>May 7, 2019</span>
        <h2>Inaugural Lunch Pods!</h2>
          <span>Hosted by 
          <span >Finneus Dolphin</span>
          </span>
              <span>Are you going?</span>
              <span>{this.props.users.length} people going</span>
              <button id="Going" type="button" disabled={this.state.yesButton} onClick={(event) => this.handleSubmit(event, true)}>
              Yes
              </button>
              <button id="Declined" type="button" disabled={this.state.noButton} onClick={(event) => this.handleSubmit(event, false)}>
              No
              </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  userGoing: (user) => dispatch({type: 'USER_GOING', user: user}),
  userDecline: (user) => dispatch({type: 'USER_DECLINE', user: user})
})

export default connect(mapStateToProps, mapDispatchToProps) (Event);
