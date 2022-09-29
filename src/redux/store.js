import {combineReducers, applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {userReducer, adminReducer} from './reducers';

const rootReducer = combineReducers({user: userReducer, admin: adminReducer}); //if there are more reducers then write comma seperated reducers in combineReducers
// export const store = createStore(rootReducer, applyMiddleware(thunk));

export default configureStore({
  reducer: rootReducer,
  //   middleware: applyMiddleware(thunk),
  middleware: [thunk],
});
