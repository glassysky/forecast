import * as types from '../constants/ActionTypes';

export const setLocation = location => ({
  type: types.SET_GEO_LOCATION,
  location,
});

export const getLocation = () => ({
  type: types.GET_GEO_LOCATION,
});

export const visibleAllItems = value => ({
  type: types.SET_ALL_VISIBILITY,
  value,
});

export const visibleSingleItem = (index, value) => ({
  type: types.SET_SINGLE_VISIBILITY,
  index,
  value,
});
