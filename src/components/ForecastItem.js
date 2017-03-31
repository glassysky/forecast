import React, { Component, PropTypes } from 'react';
import weatherMap from '../constants/weatherMap';
import { minus2chinese } from '../utils/dateTranslate';
import './ForecastItem.css';

class ForecastItem extends Component {
  render() {
    const {
      data,
      visible,
      actived,
      click,
    } = this.props;
    const weatherInfo = weatherMap[data.cond.code_d];
    return (
      <div
        className={`
          item-wrap 
        `}
        onClick={click}
      >
        <div className="head-panel">
          <span className="icon-wrap">
            <i
              className={
                `wi wi-icon 
                ${weatherInfo.day}`
              }
            />
          </span>
          <div className="main-info">
            <span>{minus2chinese(data.date)}</span>
            <p className="main-temp">{`${data.tmp.min}℃~${data.tmp.max}℃`}</p>
            <p className="main-cond-txt">{data.cond.txt_d}</p>
          </div>
        </div>
        <div
          className={`
            body-panel
          `}
        >
          <div className="left-panel">
            <div>
              <p>城市经度：</p>
              <p>城市纬度：</p>
            </div>
          </div>
          <div className="right-panel">
            <div>
              <p>23.1111</p>
              <p>543.33333</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ForecastItem.propTypes = {
  data: PropTypes.object,
  click: PropTypes.func,
  visible: PropTypes.bool,
};

ForecastItem.defaultProps = {
  data: {},
  click: () => {},
  visible: true,
};

export default ForecastItem;
