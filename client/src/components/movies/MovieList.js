import React from 'react';
import { connect } from 'react-redux';
import { fetchMoviesAction } from '../../actions';
import { Link } from 'react-router-dom';

class MovieList extends React.Component {
  componentDidMount() {
    this.props.fetchMoviesAction()
  }

  renderList() {
   return this.props.movies.map((movie) => {
     return (
      <div key={movie._id}>
        <Link to={`/movies/${movie._id}`}>
          <h2>{movie.title}</h2>
        </Link>
      </div>
     )
   })
  }

  render() {
    return (
      <div>
        <h1>Your Movies</h1>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: Object.values(state.movies)
  }
}

export default connect(mapStateToProps, { fetchMoviesAction })(MovieList);