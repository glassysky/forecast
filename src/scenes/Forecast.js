import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Location from '../components/Location';
import fetchPost, { postType } from '../actions/network';
import storage from '../utils/LocalStorage';
import './Forecast.css';

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
    url: '/forecast',
    type: postType.FORECAST,
    post_option: 'GET',
    data: {
      city,
    },
  });
};

const TabItem = () => (
  <div>123</div>
);

class Forecast extends Component {
  constructor(props) {
    super(props);
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
      location,
      forecast,
      isFetching,
      APIstatus,
    } = this.props;
    if (APIstatus !== 'ok') {
      return waitWeather();
    }
    return (
      <div className="forecast">
        <Location
          location={location}
          isFetching={isFetching}
          onRefreshClick={() => {}}
        />
        <div className="tabs">
          {
            forecast.map((item, index) => (
              <TabItem
                key={index}
                data={item}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

Forecast.propTypes = {
  location: PropTypes.string,
  postWeather: PropTypes.func,
  isFetching: PropTypes.bool,
  forecast: PropTypes.array,
  APIstatus: PropTypes.string,
};

const mapStateToProps = state => ({
  location: state.common.location,
  isFetching: state.forecast.isFetching,
  forecast: state.forecast.forecast,
  APIstatus: state.forecast.APIstatus,
});

const mapDispatchToProps = dispatch => ({
  postWeather: location => dispatch(fetchPost(location)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Forecast);
