import _ from 'lodash';
import { CREATE_MOVIE, FETCH_MOVIES, FETCH_MOVIE, EDIT_MOVIE, DELETE_MOVIE } from '../actions/types';

export default (state={}, action) => {
  switch (action.type) {
    case CREATE_MOVIE:
      return { ...state, [action.payload._id]: action.payload };
    case FETCH_MOVIES:
      return { ...state, ..._.mapKeys(action.payload, '_id')};
    case FETCH_MOVIE:
      return { ...state, [action.payload._id]: action.payload };
    case EDIT_MOVIE:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_MOVIE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}