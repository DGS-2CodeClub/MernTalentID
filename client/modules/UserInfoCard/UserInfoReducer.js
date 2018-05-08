import { ADD_USER_INFO } from './Constant';

const initialState = {
  userInfo: {
    firstName: '',
    lastName: '',
    edipi: '',
    rank: 'AB',
    squadron: '13 IS',
  },
};

export default function userCard(state = initialState, action) {
  switch (action.type) {
    case ADD_USER_INFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
}
