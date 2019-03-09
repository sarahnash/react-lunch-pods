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
    },
    {
      photo: '../assets/amanda-shih.jpeg',
      name: 'Amanda',
      link: 'https://github.com/pandafulmanda'
    },
    {
      photo: '../assets/eric.jpeg',
      name: 'Eric',
      link: 'https://www.linkedin.com/in/eric-ridenour-253a74109/'
    },
    {
      photo: '../assets/chris-oakman-headshot-medium.jpg',
      name: 'Chris',
      link: 'http://chrisoakman.com/'
    },
    {
      photo: '../assets/eli-2-web.jpg',
      name: 'Eli',
      link: 'https://elibadgio.com/'
    },
    {
      photo: '../assets/amanda-shih.jpeg',
      name: 'Amanda',
      link: 'https://github.com/pandafulmanda'
    },
    {
      photo: '../assets/eric.jpeg',
      name: 'Eric',
      link: 'https://www.linkedin.com/in/eric-ridenour-253a74109/'
    },
    {
      photo: '../assets/chris-oakman-headshot-medium.jpg',
      name: 'Chris',
      link: 'http://chrisoakman.com/'
    },
    {
      photo: '../assets/eli-2-web.jpg',
      name: 'Eli',
      link: 'https://elibadgio.com/'
    },
    {
      photo: '../assets/amanda-shih.jpeg',
      name: 'Amanda',
      link: 'https://github.com/pandafulmanda'
    },
    {
      photo: '../assets/eric.jpeg',
      name: 'Eric',
      link: 'https://www.linkedin.com/in/eric-ridenour-253a74109/'
    },
    {
      photo: '../assets/eric.jpeg',
      name: 'Eric',
      link: 'https://www.linkedin.com/in/eric-ridenour-253a74109/'
    },
    {
      photo: '../assets/eric.jpeg',
      name: 'Eric',
      link: 'https://www.linkedin.com/in/eric-ridenour-253a74109/'
    },
  ],
  smallGroups: [],
  myGroup: [],
}

// TODO: need 2 more action types

const groupReducer = (state = initialState, action) => {
  console.log(state)
  switch(action.type) {
    case 'USER_GOING':
    const newUsersGoing = state.users.slice()
    newUsersGoing.push(action.user.user)
    return {
      users: newUsersGoing
    }
    case 'USER_DECLINE':
    const newUserDeclined = state.users.slice()
    newUserDeclined.splice(newUserDeclined.indexOf(action.user.user),1)
    return {
      users: newUserDeclined
    }
    case 'MAKE_SMALL_GROUPS':
    const participants = state.users.slice()
    participants.sort(function(a,b){return .5 - Math.random()}).slice()
    console.log('random sort of participants', participants)
      const splitParticipants = (participants) => {
        let totalGroups = []
        for (var i=1; i < participants.length / 4; i++) {
          totalGroups.push([])
        }
        console.log(totalGroups)
        for (var j=0; j < participants.length; j++) {
          totalGroups[(j%totalGroups.length)].push(participants[j])
        }
        return {
          ...state,
          smallGroups: totalGroups
        }
      }
      return splitParticipants(participants)
    
    default:
      return state;
  }
}

export default groupReducer