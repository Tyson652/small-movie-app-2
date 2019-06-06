import React from 'react';
import { deleteMovieAction } from '../../actions';
import { connect } from "react-redux";

class DeleteMovie extends React.Component {
  onClick = () => {
    this.props.deleteMovieAction(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <h2>Delete movie?</h2>
        <button className="ui button negative" onClick={this.onClick}>Delete Movie</button>
      </div>
    );
  }
}

export default connect(null, { deleteMovieAction })(DeleteMovie);