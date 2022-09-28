import {
  SET_USER_NAME,
  SET_USER_AGE,
  INCREASE_AGE,
  SET_ADMIN_NAME,
} from './actions';

const initialState = {
  name: 'asad',
  age: 0,
};
const initialAdmin = {
  name: 'asad',
  age: 0,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {...state, name: action.payload};
    case SET_USER_AGE:
      return {...state, age: action.payload};
    case INCREASE_AGE:
      console.log('state============>', state);
      console.log('action============>', action);
      return {...state, age: state.age + 1};
    default:
      return state;
  }
};

export const adminReducer = (state = initialAdmin, action) => {
  switch (action.type) {
    case SET_ADMIN_NAME:
      console.log('state============>', state);
      return {...state, name: action.payload};
    default:
      return state;
  }
};
