import React, { Component } from 'react';
import Location from '../components/Location';
import './Forecast.css';

const TabItem = () => (
  <div>123</div>
);

export default class Forecast extends Component {
  constructor(props) {
    super(props);
    this._fetchData = this._fetchData.bind(this);
  }
  _fetchData() {
    
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
