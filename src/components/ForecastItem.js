import React, { Component, PropTypes } from 'react';
import weatherMap from '../constants/weatherMap';
import { minus2chinese } from '../utils/dateTranslate';
import infoMap from '../constants/forecastMap';
import './ForecastItem.css';

const GroupPanel = (props) => {
  const {
    obj,
  } = props;
  const keys = Object.keys(obj);
  return (
    <div className="group-panel">
      {
        keys.map(item => <p key={item}>{obj[item].label}</p>)
      }
    </div>
  );
};

const LeftPanel = (props) => {
  const {
    info,
  } = props;
  const keys = Object.keys(info);
  return (
    <div className="left-panel">
      {keys.map(item => <GroupPanel key={item} obj={info[item]} />)}
    </div>
  );
};

const RightPanel = () => {
  return (
    <div></div>
  );
};

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
          <LeftPanel
            info={infoMap}
          />
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
