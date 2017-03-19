import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { setLocation } from '../actions/index';
import getGeolocation from '../utils/getGeolocation';
import fetchPost, { postType } from '../actions/network';

const waitLocation = () => (
  <div className="waiting-wrap">
    <span>正在获取位置信息</span>
    <i className="fa fa-spinner fa-3x fa-fw" />
    <span className="sr-only">Loading...</span>
  </div>
);

const waitWeather = () => (
  <div className="waiting-wrap">
    <span>正在获取天气信息</span>
    <i className="fa fa-spinner fa-fw" />
    <span className="sr-only">Loading...</span>
  </div>
);

class App extends Component {
  componentDidMount() {
    if (!this.props.location) {
      // get location
      getGeolocation()
      .then(
        // store location
        (location) => {
          this.props.setLocation(location);
          return location;
        },
      ).then(
        // request weather
        city => this.props.postWeather({
          url: '/now',
          type: postType.CURRENT_WEATHER,
          post_option: 'GET',
          data: {
            city,
          },
        }),
      );
    }
  }
  render() {
    if (!this.props.location) {
      return waitLocation();
    }
    if (this.props.APIstatus !== 'ok') {
      return waitWeather();
    }
    return (
      <div className="App">
        <p className="App-intro">
          {`你的位置：${this.props.location}`}
          {this.props.temperature}
          <i className="wi wi-night-sleet" />
        </p>
      </div>
    );
  }
}

App.propTypes = {
  setLocation: PropTypes.func,
  postWeather: PropTypes.func,
  location: PropTypes.string,
  APIstatus: PropTypes.string,
  temperature: PropTypes.string,
};

const mapStateToProps = state => ({
  location: state.common.location,
  APIstatus: state.currentWeather.APIstatus,
  temperature: state.currentWeather.temperature,
});

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(setLocation(location)),
  postWeather: location => dispatch(fetchPost(location)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
