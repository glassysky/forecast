import * as types from '../constants/ActionTypes';

const initialState = {
  APIstatus: '',
  conditionText: '',
  conditionCode: '',
  maxTemp: '',
  minTemp: '',
  windDir: '',
  windLevel: '',
  precipitation: '',
  isFetching: false,
};

const currentWeather = (state = initialState, action) => {
  let data;
  switch (action.type) {
    case types.FORECAST_WEATHER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.FORECAST_WEAHTER_RECEIVE:
      data = action.data[0].now;
      console.log(data);
      return Object.assign({}, state, {
        APIstatus: action.data[0].status,
        conditionCode: data.cond.code,
        conditionText: data.cond.txt,
        windDir: data.wind.dir,
        windLevel: data.wind.sc,
        temperature: data.tmp,
        humidity: data.hum,
        precipitation: data.pcpn,
        visibility: data.vis,
        isFetching: false,
      });
    default:
      return state;
  }
};

export default currentWeather;
