export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const INCREASE_AGE = 'INCREASE_AGE';
export const SET_ADMIN_NAME = 'SET_ADMIN_NAME';
export const GET_CITIES = 'GET_CITIES';
const API_URL = 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8';

export const getCities = () => {
  try {
    return async dispatch => {
      console.log('fetching cities');
      const results = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await results.json();
      if (json) {
        dispatch({
          type: GET_CITIES,
          payload: json,
        });
        console.log('fetched cities');
      } else {
        console.log('Error fetching data in redux');
      }
    };
  } catch (error) {
    console.log('Error get cities data in redux ==============> ', error);
  }
};

export const setName = name => {
  return {
    type: SET_USER_NAME,
    payload: name,
  };
};
export const setAge = age => dispatch => {
  dispatch({
    type: SET_USER_AGE,
    payload: age,
  });
};

export const increaseAge = age => dispatch => {
  dispatch({
    type: INCREASE_AGE,
    payload: age,
  });
};

export const setAdmin = name => {
  return {
    type: SET_ADMIN_NAME,
    payload: name,
  };
};
