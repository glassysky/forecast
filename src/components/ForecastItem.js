import React, { Component, PropTypes } from 'react';
import weatherMap from '../constants/weatherMap';
import { minus2chinese } from '../utils/dateTranslate';
import infoMap from '../constants/forecastMap';
import './ForecastItem.css';
import format from '../utils/forecastMap';

const GroupPanel = (props) => {
  const {
    obj,
    type,
  } = props;
  const keys = Object.keys(obj);
  const formType = type || 'left';
  return (
    <div className="group-panel">
      {
        keys.map(item =>
          <p key={item}>
            {
              formType === 'left' ?
                obj[item].label
                :
                obj[item].value + (obj[item].unit || '')
            }
          </p>,
        )
      }
    </div>
  );
};

const TablePanel = (props) => {
  const {
    info,
    type,
  } = props;
  const keys = Object.keys(info);
  const formType = type || 'left';
  return (
    <div className={`${formType}-panel`}>
      {keys.map(
        item =>
          <GroupPanel
            key={item}
            obj={info[item]}
            type={formType}
          />,
      )}
    </div>
  );
};

class ForecastItem extends Component {
  render() {
    const {
      data,
      click,
    } = this.props;
    const weatherInfo = weatherMap[data.cond.code_d];
    if (data) {
      this.format = format(data);
    }
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
          <TablePanel
            info={infoMap}
            type={'left'}
          />
          <TablePanel
            info={infoMap}
            type={'right'}
          />
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
