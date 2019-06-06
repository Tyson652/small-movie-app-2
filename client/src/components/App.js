import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import CreateMovie from './movies/CreateMovie';
import DeleteMovie from './movies/DeleteMovie';
import EditMovie from './movies/EditMovie';
import MovieList from './movies/MovieList';
import ViewMovie from './movies/ViewMovie';
import Navbar from './Navbar';
import '../sass/main.scss';
import history from '../history';

const App = () => {
  return (
    <Router history={history}>
      <div className="border">
        <Navbar />
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/movies/new" exact component={CreateMovie} />
          <Route path="/movies/delete/:id" exact component={DeleteMovie} />
          <Route path="/movies/edit/:id" exact component={EditMovie} />
          <Route path="/movies/:id" exact component={ViewMovie} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;