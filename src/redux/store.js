import { combineReducers, createStore, applyMiddleware } from "redux";
import movieReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  movieModule: movieReducer,
});

const enhancers = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancers);

export default store;
