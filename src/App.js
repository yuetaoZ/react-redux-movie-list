import "./App.css";
import React, { useEffect } from "react";
import Header from "./Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import MovieBox from "./Components/MovieBox";
import Login from "./Components/Login";
import { loadPopularMoviesAsyncAction } from "./redux/actions";

function App() {
  const { movielistInfo, loading } = useSelector((state) => {
    return state.movieModule;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPopularMoviesAsyncAction());
  }, []);

  return (
    <div className="App">
      <Header></Header>
      {loading && <div>loading</div>}
      <Switch>
        <Route path="/" exact>
          <div>
            <MovieBox movielistInfo={movielistInfo}></MovieBox>
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
    </div>
  );
}

export default App;
