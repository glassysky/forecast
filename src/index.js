import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import reducers from './reducers/index';
import routes from './routes';
import RouteWithSubRoutes from './utils/RouteWithSubRoutes';

import './index.css';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(middleware, thunkMiddleware),
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <li><Link to="/">home</Link></li>
        <li><Link to="/forecast">forecast</Link></li>
        <li><Link to="/life">life</Link></li>
        <li><Link to="/disaster">disaster</Link></li>
        <li><Link to="/attraction">attraction</Link></li>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
