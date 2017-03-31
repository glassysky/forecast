import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import shortid from 'shortid';
import Location from '../components/Location';
import fetchPost, { postType } from '../actions/network';
import {
  visibleAllItems,
  visibleSingleItem,
} from '../actions/index';
import storage from '../utils/LocalStorage';
import ForecastItem from '../components/ForecastItem';
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

class Forecast extends Component {
  constructor(props) {
    super(props);
    this._onFresh = this._onFresh.bind(this);
    this._toggleItem = this._toggleItem.bind(this);
  }
  componentDidMount() {
    this._onFresh();
  }
  _onFresh() {
    const postMethod = this.props.postWeather;
    const location = this.props.location || storage.getItem('location');
    fetchFunc(postMethod, location);
  }
  _toggleItem(index) {
    const {
      visibleItems,
      hideAll,
      showAll,
      showSingle,
      isExtended,
    } = this.props;
    return () => {
      if (visibleItems[index] && isExtended) {
        showAll();
      } else {
        hideAll();
        showSingle(index);
      }
    };
  }
  render() {
    const {
      location,
      forecast,
      isFetching,
      APIstatus,
      visibleItems,
      isExtended,
    } = this.props;
    if (APIstatus !== 'ok') {
      return waitWeather();
    }
    const forecasts = forecast.map((item, index) => (
      <ForecastItem
        key={shortid.generate()}
        data={item}
        click={this._toggleItem(index)}
        visible={visibleItems[index] ? true : false}
        actived={isExtended && visibleItems[index] ? true : false}
      />
    ));
    return (
      <div className="forecast">
        <Location
          location={location}
          isFetching={isFetching}
          onRefreshClick={() => {}}
        />
        <div className="tabs">
          <div className="pos-wrap">
            {forecasts}
          </div>
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
  visibleItems: PropTypes.array,
  hideAll: PropTypes.func,
  showAll: PropTypes.func,
  showSingle: PropTypes.func,
  isExtended: PropTypes.bool,
};

const mapStateToProps = state => ({
  location: state.common.location,
  isFetching: state.forecast.isFetching,
  forecast: state.forecast.forecast,
  APIstatus: state.forecast.APIstatus,
  visibleItems: state.forecast.visibleItems,
  isExtended: state.forecast.isExtended,
});

const mapDispatchToProps = dispatch => ({
  postWeather: location => dispatch(fetchPost(location)),
  showAll: () => dispatch(visibleAllItems(1)),
  hideAll: () => dispatch(visibleAllItems(0)),
  showSingle: index => dispatch(visibleSingleItem(index, 1)),
  hideSingle: index => dispatch(visibleSingleItem(index, 0)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Forecast);
