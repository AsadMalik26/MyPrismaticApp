export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const INCREASE_AGE = 'INCREASE_AGE';
export const SET_ADMIN_NAME = 'SET_ADMIN_NAME';

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

export const admin = name => {
  return {
    type: SET_ADMIN_NAME,
    payload: name,
  };
};
