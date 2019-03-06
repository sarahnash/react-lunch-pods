import React, { Component } from 'react'
import { connect } from 'react-redux'

class Event extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user:{
        Photo: '../assets/sarah-headshot.jpg',
        Name: 'Sarah',
        Link: 'http://sarahnash.dev/'
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
    console.log('props', this.props)
    return (
      <div>
        <span>May 7, 2019</span>
        <h1 className="pageHead-headline text--pageTitle">Inaugural Lunch Pods!</h1>
          <span className="text--secondary text--small">Hosted by 
          <span className="link">Finneus Dolphin</span>
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
