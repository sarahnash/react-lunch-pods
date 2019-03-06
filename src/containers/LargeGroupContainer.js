import React, { Component } from 'react'
import User from '../components/User.js'
import { connect } from 'react-redux'


// TODO: map over users in store to render cards

class LargeGroupContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="box">
        <h2>
          large group container will hold all the user components
        </h2>
        <div>
          {this.props.users.map(user =>
          <div>
            <img width={64} height={64} src={user.Photo}/>
            <div><a href={user.Link}>{user.Name}</a></div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps) (LargeGroupContainer);
