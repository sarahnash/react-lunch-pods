const initialState = {
  users: [
    {
      photo: '../assets/chris-oakman-headshot-medium.jpg',
      name: 'Chris',
      link: 'http://chrisoakman.com/'
    },
    {
      photo: '../assets/eli-2-web.jpg',
      name: 'Eli',
      link: 'https://elibadgio.com/'
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