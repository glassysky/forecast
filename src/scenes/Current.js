import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import fetchPost, { postType } from '../actions/network';
import { getDate, getWeek } from '../utils/dateTranslate';
import storage from '../utils/LocalStorage';
import weatherMap from '../constants/weatherMap';
import Location from '../components/Location';
import './Current.css';

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

class Current extends Component {
  constructor(props) {
    super(props);
    this.date = new Date();
    this.isNight = false;
    const hour = this.date.getHours();
    if ((hour >= 18 && hour <= 24) || (hour >= 0 && hour <= 6)) {
      this.isNight = true;
    }
    this._onFresh = this._onFresh.bind(this);
  }
  componentDidMount() {
    this._onFresh();
  }
  _onFresh() {
    const postMethod = this.props.postWeather;
    const location = this.props.location || storage.getItem('location');
    fetchFunc(postMethod, location);
  }
  render() {
    const {
      conditionCode,
      conditionText,
      temperature,
      windDir,
      windLevel,
      location,
      isFetching,
    } = this.props;
    const weatherInfo = weatherMap[conditionCode];

    if (this.props.APIstatus !== 'ok') {
      return waitWeather();
    }
    return (
      <div className="App">
        <Location
          location={location}
          onRefreshClick={this._onFresh}
          isFetching={isFetching}
        />
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
            <p>{`${conditionText} / ${temperature}℃`}</p>
            <span>{`${windDir} ${windLevel.indexOf('-') > -1 ? `${windLevel}级` : windLevel}`}</span>
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

Current.propTypes = {
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
  postWeather: location => dispatch(fetchPost(location)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Current);
