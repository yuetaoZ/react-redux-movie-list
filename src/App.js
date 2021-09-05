import "./App.css";
import React, { useEffect } from "react";
import Header from "./Components/Header";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import MovieBox from "./Components/MovieBox";
import Login from "./Components/Login";
import { loadPopularMoviesAsyncAction } from "./redux/actions";
import store from "./redux/store";

function App() {
  const { logged_in } = useSelector((state) => {
    return state.movieModule;
  });

  useEffect(() => {
    store.dispatch(loadPopularMoviesAsyncAction(1));
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <MovieBox></MovieBox>
        </Route>
        <Route path="/favorite">
          <MovieBox></MovieBox>
        </Route>
        <Route path="/rated">
          <MovieBox></MovieBox>
        </Route>
        <Route path="/login">
          {logged_in ? <Redirect to="/" /> : <Login />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
