import React, { Component } from 'react'

// TODO: hover action brings up user details

class User extends Component {

  hover() {
    console.log('hover!')
  }

  exitHover() {
    console.log('stop hovering!')
  }

  render() {
    return (
     <div>
        <img width={64} height={64} src={this.props.photo} onMouseEnter={this.hover} onMouseLeave={this.exitHover}/>
        <div>
          {this.props.name}
        </div>
      </div>
    )
  }
}

export default User;
