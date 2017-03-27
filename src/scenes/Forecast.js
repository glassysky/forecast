import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Location from '../components/Location';
import fetchPost, { postType } from '../actions/network';
import storage from '../utils/LocalStorage';
import getGeolocation from '../utils/getGeolocation';
import './Forecast.css';

const TabItem = () => (
  <div>123</div>
);

class Forecast extends Component {
  constructor(props) {
    super(props);
    this._fetchData = this._fetchData.bind(this);
  }
  _fetchData() {
    console.log(1);
    this.props.postMethod('北京');
  }
  componentDidMount() {
    const location = this.props.location || storage.getItem('location');
    if (!location) {

    }
  }
  render() {
    return (
      <div className="forecast">
        <Location
          location={'北京'}
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
};

const mapStateToProps = state => ({
  location: state.common.location,
});

const mapDispatchToProps = dispatch => ({
  postMethod: location => dispatch(fetchPost(location)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Forecast);
