import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="ui tabular menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/movies/new" className="item">
          Add Movie
        </Link>
      </div>
    );
  }
}

export default Navbar;