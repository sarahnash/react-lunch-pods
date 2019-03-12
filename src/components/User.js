import React, { Component } from 'react'
import UserDetails from '../components/UserDetails'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

// TODO: how to exit modal on MouseLeave and not click out
// or possibly popover

class User extends Component {
  constructor(props) {
    super(props)

    this.state = {modalShow: false}
    this.hover = this.hover.bind(this)
  }

  hover(event) {
    event.preventDefault()
    this.setState({ modalShow: true })
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
     <Col >
        <Image width={128} height={128} src={this.props.photo} onClick={this.hover} alt={this.props.name} roundedCircle/>
        <div className="text-center">
          {this.props.name}
        </div>
        <UserDetails name={this.props.name} show={this.state.modalShow} onHide={modalClose}/>
      </Col>
    )
  }
}

export default User;
