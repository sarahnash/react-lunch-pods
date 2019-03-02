import { defaultCipherList } from "constants";

const initialState = {
  users: [
    {
      Photo: 'assets/chris-oakman-headshot-medium.jpg',
      Name: 'Chris',
      Link: 'http://chrisoakman.com/'
    },
    {
      Photo: 'assets/eli-2-web.jpg',
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
}

export default groupReducer