import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {
  setLocation,
} from '../actions/index';
import Header from '../components/Header';
import Navigator from '../components/navigator';
import storage from '../utils/LocalStorage';
import getGeolocation from '../utils/getGeolocation';
import RouteWithSubRoutes from '../utils/RouteWithSubRoutes';
import routes from '../routes';
import './App.css';

const history = createHistory();

const waitLocation = () => (
  <div className="waiting-wrap">
    <div className="waiting-body">
      <span>正在获取位置信息</span>
      <i className="fa fa-spinner fa-3x fa-fw" />
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

class App extends Component {
  componentDidMount() {
    const location = this.props.location || storage.getItem('location');
    if (!location) {
      getGeolocation()
      .then(
        (loc) => {
          this.props.setLocation(loc);
        },
      );
    } else {
      this.props.setLocation(location);
    }
  }
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className="root-wrap">
          <Header />
          {
            this.props.location ?
              routes.map((route, i) => (
                <RouteWithSubRoutes key={i.toString()} {...route} />
              ))
              :
              waitLocation()
          }
          <Navigator />
        </div>
      </ConnectedRouter>
    );
  }
}

App.propTypes = {
  location: PropTypes.string,
  setLocation: PropTypes.func,
};

const mapStateToProps = state => ({
  location: state.common.location,
});

const mapDispatchToProps = dispatch => ({
  setLocation: loc => dispatch(setLocation(loc)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
