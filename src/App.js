import "./App.css";
import Header from "./Components/Header";
import { connect, useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import MovieBox from "./Components/MovieBox";
import Login from "./Components/Login";

function App() {
  const movies = useSelector((state) => {
    return state.movieModule.movies;
  });

  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header></Header>

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
    </div>
  );
}

export default App;
