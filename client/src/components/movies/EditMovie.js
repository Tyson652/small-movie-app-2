import React from 'react';
import MovieForm from './MovieForm';
import { fetchMovieAction, editMovieAction } from '../../actions'
import { connect } from 'react-redux';

class EditMovie extends React.Component {
  componentDidMount() {
    this.props.fetchMovieAction(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    this.props.editMovieAction(this.props.movie._id, formValues)
  }

  render() {
    return (
      <div>
        <h1>Edit Movie</h1>
        <MovieForm 
          initialValues={this.props.movie}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movies[ownProps.match.params.id]
  }
}

export default connect(
  mapStateToProps, 
  { fetchMovieAction, editMovieAction }
)(EditMovie);