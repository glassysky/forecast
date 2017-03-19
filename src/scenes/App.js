import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { setLocation } from '../actions/index';

import getGeolocation from '../utils/getGeolocation';

class App extends Component {
  componentDidMount() {
    getGeolocation().then(
      location => this.props.setLocation(location),
    );
  }
  render() {
    if (!this.props.location) {
      return (<div>wait</div>);
    }
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <i className="fa fa-thermometer-full" aria-hidden="true" />
        </div>
        <p className="App-intro">
          {`你的位置：${this.props.location}`}
        </p>
      </div>
    );
  }
}

App.propTypes = {
  setLocation: PropTypes.func,
  location: PropTypes.string,
};

const mapStateToProps = state => ({
  location: state.common.location,
});

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(setLocation(location)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
