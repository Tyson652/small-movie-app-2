import movies from '../apis/movies';
import { CREATE_MOVIE, FETCH_MOVIE, FETCH_MOVIES, EDIT_MOVIE, DELETE_MOVIE } from './types';
import history from '../history';

export const createMovieAction = (formValues) => async dispatch => {
  const response = await movies.post('/movies', formValues);
  
  dispatch({ type: CREATE_MOVIE, payload: response.data });
  history.push('/')
}

export const fetchMoviesAction = () => async dispatch => {
  const response = await movies.get('/movies');
  
  dispatch({ type: FETCH_MOVIES, payload: response.data });
}

export const fetchMovieAction = (_id) => async dispatch => {
  const response = await movies.get(`/movies/${_id}`);
  
  dispatch({ type: FETCH_MOVIE, payload: response.data});
}

export const editMovieAction = (_id, formValues) => async dispatch => {
  const response = await movies.patch(`/movies/${_id}`, formValues);
  
  dispatch({ type: EDIT_MOVIE, payload: response.data });
  history.push('/')
}

export const deleteMovieAction = (_id) => async dispatch => {
  await movies.delete(`/movies/${_id}`);

  dispatch({ type: DELETE_MOVIE, payload: _id });
  history.push('/')
}