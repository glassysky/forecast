import {
  SET_GEO_LOCATION,
} from '../constants/ActionTypes';

const initialState = {
  location: '',
};

const common = (state = initialState, action) => {
  switch (action.type) {
    case SET_GEO_LOCATION:
      return Object.assign({}, state, {
        location: action.location,
      });
    default:
      return state;
  }
};

export default common;
