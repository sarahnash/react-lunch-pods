import React, { Component } from 'react'
import { Card, Media, Heading } from 'react-bulma-components'

class User extends Component {
  render() {
    return (
      <Card>
      <Card.Content>
        <Media>
          <Card.Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png"/>
          <Media.Item>
            <Heading size={4}>This is a User</Heading>
          </Media.Item>
        </Media>
      </Card.Content>
      </Card>
    )
  }
}

export default User