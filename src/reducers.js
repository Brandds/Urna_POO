// reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // outros reducers
});

export default rootReducer;
