import React, { Component } from 'react'
import User from '../components/User.js'
import { connect } from 'react-redux'

class LargeGroupContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="box">
        <div>
          {this.props.users.map(user => <User {...user}/>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps) (LargeGroupContainer);
