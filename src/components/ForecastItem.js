import React, { Component, PropTypes } from 'react';
import weatherMap from '../constants/weatherMap';
import { minus2chinese } from '../utils/dateTranslate';

class ForecastItem extends Component {
  render() {
    const {
      data,
      visible,
      click,
    } = this.props;
    const weatherInfo = weatherMap[data.cond.code_d];
    return (
      <div
        className={`
          item-wrap 
          ${visible ? 'item-show' : 'item-hidden'}
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
