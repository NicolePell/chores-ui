import { combineReducers } from 'redux';

import chores from '~/reducers/chores'

const rootReducer = combineReducers({
  chores
});

export default rootReducer;
