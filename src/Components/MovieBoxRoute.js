import React from "react";
import { Route, Switch } from "react-router-dom";
import MovieBox from "./MovieBox";
import Login from "./Login";

const MovieBoxRoute = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <div>
          Run default fetch
          <MovieBox></MovieBox>
        </div>
      </Route>
      <Route path="/favorite">
        <div>
          Run favorite fetch
          <MovieBox></MovieBox>
        </div>
      </Route>
      <Route path="/rated">
        <div>
          Run rated fetch
          <MovieBox></MovieBox>
        </div>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
    </Switch>
  );
};

export default MovieBoxRoute;
