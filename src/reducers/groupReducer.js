const initialState = {
  users: [
    {
      Photo: '../assets/chris-oakman-headshot-medium.jpg',
      Name: 'Chris',
      Link: 'http://chrisoakman.com/'
    },
    {
      Photo: '../assets/eli-2-web.jpg',
      Name: 'Eli',
      Link: 'https://elibadgio.com/'
    }
  ],
  largeGroup: [],
  smallGroup: [],
  myGroup: [],
}

const groupReducer = (state = initialState, action) => {
  console.log(state)
  switch(action.type) {
    case 'USER_GOING':
    const newUsersGoing = state.users.slice()
    console.log(action.user.user)
    newUsersGoing.push(action.user.user)
    return {
      users: newUsersGoing
    }
    case 'USER_DECLINE':
    const newUserDeclined = state.users.slice()
    console.log(action.user.user)
    newUserDeclined.splice(newUserDeclined.indexOf(action.user.user),1)
    return {
      users: newUserDeclined
    }
    default:
      return state;
  }
}

export default groupReducer