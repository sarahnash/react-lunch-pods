import React, { Component } from 'react'
import UserDetails from '../components/UserDetails'
import Col from 'react-bootstrap/Col'

// TODO: how to exit modal on MouseLeave and not click out
// or possibly popover

class User extends Component {
  constructor(props) {
    super(props)

    this.state = {modalShow: false}
    this.hover = this.hover.bind(this)
    this.exitHover = this.exitHover.bind(this)
  }

  hover(event) {
    event.preventDefault()
    this.setState({ modalShow: true })
  }

  exitHover(event){
    event.preventDefault()
    this.setState({ modalShow: true })
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
     <Col>
        <img width={64} height={64} src={this.props.photo} onMouseEnter={this.hover} onMouseLeave={this.exitHover} alt={this.props.name}/>
        <div>
          {this.props.name}
        </div>
        <UserDetails name={this.props.name} show={this.state.modalShow} onHide={modalClose}/>
      </Col>
    )
  }
}

export default User;
