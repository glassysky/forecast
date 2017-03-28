import * as types from '../constants/ActionTypes';

const initialState = {
  APIstatus: '',
  forecast: [],
  longitude: '',
  latitude: '',
  isFetching: true,
  visibleItems: [1, 1, 1],
  isExtended: false,
};

const currentWeather = (state = initialState, action) => {
  let data;
  let visibleArray;
  switch (action.type) {
    case types.FORECAST_WEATHER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.FORECAST_WEAHTER_RECEIVE:
      data = action.data[0];
      return Object.assign({}, state, {
        APIstatus: action.data[0].status,
        longitude: data.basic.lon,
        latitude: data.basic.lat,
        forecast: data.daily_forecast,
        isFetching: false,
      });
    case types.SET_ALL_VISIBILITY:
      return Object.assign({}, state, {
        visibleItems: [action.value, action.value, action.value],
        isExtended: false,
      });
    case types.SET_SINGLE_VISIBILITY:
      visibleArray = state.visibleItems.concat();
      visibleArray[action.index] = action.value;
      return Object.assign({}, state, {
        visibleItems: visibleArray,
        isExtended: true,
      });
    default:
      return state;
  }
};

export default currentWeather;
