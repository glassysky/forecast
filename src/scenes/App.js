import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { setLocation } from '../actions/index';
import getGeolocation from '../utils/getGeolocation';
import fetchPost, { postType } from '../actions/network';
import { getDate, getWeek } from '../utils/dateTranslate';
import storage from '../utils/LocalStorage';
import weatherMap from '../constants/weatherMap';

const waitLocation = () => (
  <div className="waiting-wrap">
    <div className="waiting-body">
      <span>正在获取位置信息</span>
      <i className="fa fa-spinner fa-3x fa-fw" />
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

const waitWeather = () => (
  <div className="waiting-wrap">
    <div className="waiting-body">
      <span>正在获取天气信息</span>
      <i className="fa fa-spinner fa-fw" />
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

const fetchFunc = (postMethod, city) => {
  postMethod({
    url: '/now',
    type: postType.CURRENT_WEATHER,
    post_option: 'GET',
    data: {
      city,
    },
  });
};

class App extends Component {
  constructor(props) {
    super(props);
    this.date = new Date();
    this.isNight = true;
    const hour = this.date.getHours();
    if (hour >= 18 && hour <= 6) {
      this.isNight = true;
    }
  }
  componentDidMount() {
    const postMethod = this.props.postWeather;
    const location = this.props.location || storage.getItem('location');
    if (!location) {
      // get location
      getGeolocation()
      .then(
        // store location
        (loc) => {
          this.props.setLocation(loc);
          storage.setItem('location', loc);
          return loc;
        },
      ).then(
        // request weather
        city => fetchFunc(postMethod, city),
      );
    } else {
      this.props.setLocation(location);
      fetchFunc(postMethod, location);
    }
  }
  render() {
    const weatherInfo = weatherMap[this.props.conditionCode];
    if (!this.props.location) {
      return waitLocation();
    }
    if (this.props.APIstatus !== 'ok') {
      return waitWeather();
    }
    return (
      <div className="App">
        <div className="top-bar">
          <div className="location">
            <i className="fa fa-map-marker" aria-hidden="true" />
            <span>{this.props.location}</span>
          </div>
          <div className="refresh">
            <i className="fa fa-refresh" aria-hidden="true" />
          </div>
        </div>
        <div className="main-bar">
          <div className="weather-icon">
            <i
              className={
                `wi wi-icon 
                ${this.isNight ? weatherInfo.night : weatherInfo.day}`
              }
            />
            <p className="date">
              {`${getDate(this.date)} ${getWeek(this.date)}`}
            </p>
          </div>
          <div className="weather-info">
            <p>{`${this.props.conditionText} / ${this.props.temperature}℃`}</p>
            <span>{`${this.props.windDir} ${this.props.windLevel}级`}</span>
          </div>
        </div>
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
  conditionText: PropTypes.string,
  conditionCode: PropTypes.string,
  windDir: PropTypes.string,
  windLevel: PropTypes.string,
};

const mapStateToProps = state => ({
  location: state.common.location,
  APIstatus: state.currentWeather.APIstatus,
  temperature: state.currentWeather.temperature,
  conditionText: state.currentWeather.conditionText,
  conditionCode: state.currentWeather.conditionCode,
  windDir: state.currentWeather.windDir,
  windLevel: state.currentWeather.windLevel,
});

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(setLocation(location)),
  postWeather: location => dispatch(fetchPost(location)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
