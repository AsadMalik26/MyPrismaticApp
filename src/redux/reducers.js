import {
  SET_USER_NAME,
  SET_USER_AGE,
  INCREASE_AGE,
  SET_ADMIN_NAME,
  GET_CITIES,
} from './actions';

const initialState = {
  name: '',
  age: 0,
  cities: [],
};
const initialAdmin = {
  name: 'Asad',
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
    case GET_CITIES:
      return {...state, cities: action.payload};
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
