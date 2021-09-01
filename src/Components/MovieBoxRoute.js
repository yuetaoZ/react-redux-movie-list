import React from "react";
import { Route, Switch } from "react-router-dom";
import MovieBox from "./MovieBox";

const MovieBoxRoute = () => {
  return (
    <Switch>
      <Route path="/home">
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
        <div>Render Login Component</div>
      </Route>
    </Switch>
  );
};

export default MovieBoxRoute;
