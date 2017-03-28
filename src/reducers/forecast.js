import * as types from '../constants/ActionTypes';

const initialState = {
  APIstatus: '',
  forecast: [],
  longitude: '',
  latitude: '',
  isFetching: true,
};

const currentWeather = (state = initialState, action) => {
  let data;
  switch (action.type) {
    case types.FORECAST_WEATHER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.FORECAST_WEAHTER_RECEIVE:
      data = action.data[0];
      console.log(data);
      return Object.assign({}, state, {
        APIstatus: action.data[0].status,
        longitude: data.basic.lon,
        latitude: data.basic.lat,
        forecast: data.daily_forecast,
        isFetching: false,
      });
    default:
      return state;
  }
};

export default currentWeather;
