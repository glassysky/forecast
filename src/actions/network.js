import * as types from '../constants/ActionTypes';
import Request from '../utils/request';

let requestInstance = null;

export const postType = {
  CURRENT_WEATHER: 'CURRENT_WEATHER',
  FORECAST: 'FORECAST',
};

const requestPosts = (info) => {
  switch (info.type) {
    case postType.CURRENT_WEATHER:
      return {
        type: types.CURRENT_WEATHER_REQUEST,
      };
    case postType.FORECAST:
      return {
        type: types.FORECAST_WEATHER_REQUEST,
      };
    default:
      return {

      };
  }
};

const receivePosts = (info, data) => {
  switch (info.type) {
    case postType.CURRENT_WEATHER:
      return {
        type: types.CURRENT_WEATHER_RECEIVE,
        data,
      };
    case postType.FORECAST:
      return {
        type: types.FORECAST_WEAHTER_RECEIVE,
        data,
      };
    default:
      return {

      };
  }
};

const fetchPost = info =>
  (dispatch) => {
    dispatch(requestPosts(info));
    if (!requestInstance) {
      requestInstance = new Request();
    }

    const data = info.data;
    const url = info.url;

    if (info.post_option === 'GET') {
      requestInstance.get({
        url,
        data,
      }, (res) => {
        dispatch(receivePosts(info, res.HeWeather5));
      }, (error) => {
        console.log(error);
      });
    } else {
      requestInstance.post({
        url,
        data,
      }, (res) => {
        dispatch(receivePosts(info, res.HeWeather5));
      }, (error) => {
        console.log(error);
      });
    }
  };

export default fetchPost;
