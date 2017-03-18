import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navigator.css';

class Navigator extends Component {
  render() {
    return (
      <ul className="navigator-wrap">
        <li>
          <Link to="/">
            <span><i className="fa fa-thermometer-full" aria-hidden="true" /></span>
            <p>实时天气</p>
          </Link>
        </li>
        <li>
          <Link to="/forecast">
            <span><i className="fa fa-calendar" aria-hidden="true" /></span>
            <p>未来预报</p>
          </Link>
        </li>
        <li>
          <Link to="/life">
            <span><i className="fa fa-child" aria-hidden="true" /></span>
            <p>生活指数</p>
          </Link>
        </li>
        <li>
          <Link to="/disaster">
            <span><i className="fa fa-podcast" aria-hidden="true" /></span>
            <p>灾害预警</p>
          </Link>
        </li>
        <li>
          <Link to="/attraction">
            <span><i className="fa fa-university" aria-hidden="true" /></span>
            <p>景点天气</p>
          </Link>
        </li>
      </ul>
    );
  }
}

export default Navigator;
