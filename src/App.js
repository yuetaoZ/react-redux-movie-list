import "./App.css";
import Header from "./Components/Header";
import MovieBoxRoute from "./Components/MovieBoxRoute";
import { connect, useDispatch, useSelector } from "react-redux";

function App() {
  const movies = useSelector((state) => {
    return state.movieModule.movies;
  });

  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header></Header>
      <MovieBoxRoute></MovieBoxRoute>
    </div>
  );
}

export default App;
