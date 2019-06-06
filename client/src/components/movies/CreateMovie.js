import React from 'react';
import MovieForm from './MovieForm';
import { connect } from 'react-redux';
import { createMovieAction } from '../../actions';

class CreateMovie extends React.Component {
  onSubmit = (formVaules) => {
    this.props.createMovieAction(formVaules)
  }


  render() {
    return (
      <div>
        <h2>CreateMovie</h2>
        <MovieForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createMovieAction })(CreateMovie);