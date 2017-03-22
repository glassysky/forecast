import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setLocation, getLocation } from '../actions/index';
import getGeolocation from '../utils/getGeolocation';
import fetchPost, { postType } from '../actions/network';
import { getDate, getWeek } from '../utils/dateTranslate';
import storage from '../utils/LocalStorage';
import weatherMap from '../constants/weatherMap';
import './App.css';

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

const allFetch = (postMethod, setMethod) => {
  getGeolocation()
    .then(
      // store location
      (loc) => {
        setMethod(loc);
        storage.setItem('location', loc);
        return loc;
      },
    ).then(
      // request weather
      city => fetchFunc(postMethod, city),
    );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.date = new Date();
    this.isNight = false;
    const hour = this.date.getHours();
    if ((hour >= 18 && hour <= 24) || (hour >= 0 && hour <= 6)) {
      this.isNight = true;
    }
  }
  componentDidMount() {
    const postMethod = this.props.postWeather;
    const location = this.props.location || storage.getItem('location');

    if (!location) {
      // get location
      allFetch(postMethod, this.props.setLocation);
    } else {
      this.props.setLocation(location);
      fetchFunc(postMethod, location);
    }
  }
  render() {
    const weatherInfo = weatherMap[this.props.conditionCode];
    const location = this.props.location;
    const isFetching = this.props.isFetching;

    if (!location) {
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
            <span>{location}</span>
          </div>
          <button
            className="refresh"
            onClick={() => {
              this.props.getLocation();
              allFetch(this.props.postWeather, this.props.setLocation);
            }}
          >
            <i
              className={`
                fa 
                fa-refresh
                ${isFetching ? 'rotate' : ''}
              `}
              aria-hidden="true"
            />
          </button>
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
        <div className="metro-wrap">
          <div className="metro-item">
            <p>相对湿度(%)</p>
            <b>{this.props.humidity}</b>
          </div>
          <div className="metro-item">
            <p>降水量(mm)</p>
            <b>{this.props.precipitation}</b>
          </div>
          <div className="metro-item">
            <p>能见度(km)</p>
            <b>{this.props.visibility}</b>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  setLocation: PropTypes.func,
  getLocation: PropTypes.func,
  postWeather: PropTypes.func,
  location: PropTypes.string,
  APIstatus: PropTypes.string,
  temperature: PropTypes.string,
  conditionText: PropTypes.string,
  conditionCode: PropTypes.string,
  windDir: PropTypes.string,
  windLevel: PropTypes.string,
  humidity: PropTypes.string,
  precipitation: PropTypes.string,
  visibility: PropTypes.string,
  isFetching: PropTypes.bool,
};

const mapStateToProps = state => ({
  location: state.common.location,
  APIstatus: state.currentWeather.APIstatus,
  temperature: state.currentWeather.temperature,
  conditionText: state.currentWeather.conditionText,
  conditionCode: state.currentWeather.conditionCode,
  windDir: state.currentWeather.windDir,
  windLevel: state.currentWeather.windLevel,
  humidity: state.currentWeather.humidity,
  precipitation: state.currentWeather.precipitation,
  visibility: state.currentWeather.visibility,
  isFetching: state.currentWeather.isFetching,
});

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(setLocation(location)),
  getLocation: () => dispatch(getLocation()),
  postWeather: location => dispatch(fetchPost(location)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
