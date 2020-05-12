import {
  compose,
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import app from './app';
import auth from './auth';
import error from './error';
import persist from './persist';
import spot from './spot';
import user from './user';

const appReducer = combineReducers({
  app,
  auth,
  error,
  persist,
  spot,
  user
});

if (process.env.NODE_ENV === 'development') {
  global.XMLHttpRequest = global.originalXMLHttpRequest
    ? global.originalXMLHttpRequest
    : global.XMLHttpRequest;
  global.FormData = global.originalFormData
    ? global.originalFormData
    : global.FormData;
}

const middleware = [thunk];
const enhancers = [applyMiddleware(...middleware)];

const store = createStore(
  appReducer,
  {},
  composeWithDevTools(compose(...enhancers))
);

export { store };
