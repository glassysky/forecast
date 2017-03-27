import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import 'reset-css/reset.css';

import reducers from './reducers/index';
import App from './scenes/App';

import './index.css';

const history = createHistory();
const middleware = routerMiddleware(history);

const middleWares = [thunkMiddleware, middleware];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middleWares.push(logger);
}

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(...middleWares),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
