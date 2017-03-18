import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import 'reset-css/reset.css';

import reducers from './reducers/index';
import routes from './routes';
import RouteWithSubRoutes from './utils/RouteWithSubRoutes';
import Header from './components/Header';
import Navigator from './components/navigator';

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
      <div className="root-wrap">
        <Header />
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        <Navigator />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
