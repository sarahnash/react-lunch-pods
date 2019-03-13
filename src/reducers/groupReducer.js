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
      photo: '../assets/beyonce.jpeg',
      name: 'Beyonce',
      link: ''
    },
    {
      photo: '../assets/jayz.png',
      name: 'JayZ',
      link: ''
    },
    {
      photo: '../assets/antoni.png',
      name: 'Antoni',
      link: ''
    },
    {
      photo: '../assets/karamo.png',
      name: 'Karamo',
      link: ''
    },
    {
      photo: '../assets/jonathan.png',
      name: 'Jonathan',
      link: ''
    },
    {
      photo: '../assets/bobby.png',
      name: 'Bobby',
      link: ''
    },
    {
      photo: '../assets/tan.png',
      name: 'Tan',
      link: ''
    },
    {
      photo: '../assets/snoopy.jpeg',
      name: 'Snoopy',
      link: ''
    },
    {
      photo: '../assets/woodstock.jpeg',
      name: 'Woodstock',
      link: ''
    },
    {
      photo: '../assets/eric.jpeg',
      name: 'Eric',
      link: 'https://www.linkedin.com/in/eric-ridenour-253a74109/'
    },
    {
      photo: '../assets/Michelle.png',
      name: 'Michelle',
      link: ''
    },
  ],
  smallGroups: [],
}

const groupReducer = (state = initialState, action) => {
  console.log(state)
  switch(action.type) {
    case 'USER_GOING':
    const newUsersGoing = state.users.slice()
    newUsersGoing.push(action.user.user)
    return {
      ...state,
      users: newUsersGoing
    }
    case 'USER_DECLINE':
    const newUserDeclined = state.users.slice()
    newUserDeclined.splice(newUserDeclined.indexOf(action.user.user),1)
    return {
      ...state,
      users: newUserDeclined
    }
    case 'MAKE_SMALL_GROUPS':
    const participants = state.users.slice()
    participants.sort(function(a,b){return .5 - Math.random()}).slice()
      const splitParticipants = (participants) => {
        let totalGroups = []
        for (var i=1; i < participants.length / 4; i++) {
          totalGroups.push([])
        }
        for (var j=0; j < participants.length; j++) {
          totalGroups[(j%totalGroups.length)].push(participants[j])
        }
        return {
          ...state,
          smallGroups: totalGroups
        }
      }
      return splitParticipants(participants)
    case 'RESET_USERS':
    return {
      smallGroups: [],
      users: initialState.users
    }
    
    default:
      return state
  }
}

export default groupReducer