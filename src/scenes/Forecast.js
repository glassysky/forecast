import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Location from '../components/Location';
import fetchPost, { postType } from '../actions/network';
import storage from '../utils/LocalStorage';
import './Forecast.css';

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
    } = this.props;
    return (
      <div className="forecast">
        <Location
          location={location}
          isFetching
          onRefreshClick={() => {}}
        />
        <div className="tabs">
          {

          }
        </div>
      </div>
    );
  }
}

Forecast.propTypes = {
  location: PropTypes.string,
  postWeather: PropTypes.func,
};

const mapStateToProps = state => ({
  location: state.common.location,
});

const mapDispatchToProps = dispatch => ({
  postWeather: location => dispatch(fetchPost(location)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Forecast);
