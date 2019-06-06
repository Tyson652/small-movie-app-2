import React from 'react';
import { connect } from 'react-redux';
import { fetchMovieAction } from '../../actions';
import { Link } from 'react-router-dom';

class ViewMovie extends React.Component {
  componentDidMount() {
    this.props.fetchMovieAction(this.props.match.params.id)
  }

  render() {
    if (!this.props.movie) {
      return <div>Loading...</div>
    }

    const {title, description, rating, _id} = this.props.movie
    return (
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <h3>{rating}</h3>
        <Link to={`/movies/edit/${_id}`} className="ui button primary">
          Edit
        </Link>
        <Link to={`/movies/delete/${_id}`} className="ui button negative">
          Delete
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movies[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchMovieAction })(ViewMovie);