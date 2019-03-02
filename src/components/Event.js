import React, { Component } from 'react'
import { Button, Box } from 'react-bulma-components'

class Event extends Component {
  render() {
    return (
      <Box>
        <div>The next lunch is April 2!  Do you want to attend?</div>
        <Button> Yes </Button>
        <div>then your user will show up in the large group container</div>
      </Box>
    )
  }
}

export default Event
