import anecdoteReducer from './reducers/anecdoteReducer';
import notificationReducer from './reducers/notificationReducer';

import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';

import {
  composeWithDevTools
} from 'redux-devtools-extension';

const reducers = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;