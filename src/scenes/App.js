import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import Navigator from '../components/navigator';
import RouteWithSubRoutes from '../utils/RouteWithSubRoutes';
import routes from '../routes';

import './App.css';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className="root-wrap">
          <Header />
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i.toString()} {...route} />
          ))}
          <Navigator />
        </div>
      </ConnectedRouter>
    );
  }
}

App.propTypes = {

};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
