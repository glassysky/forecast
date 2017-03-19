import * as types from '../constants/ActionTypes';

export const setLocation = location => ({
  type: types.SET_GEO_LOCATION,
  location,
});
