import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  chores: (state = []) => state
});

export default rootReducer;
