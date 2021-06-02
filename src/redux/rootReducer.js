import { combineReducers } from "redux";
import starredReposReducer from "./starredRepos/starredReposReducer";

//Creating the root reducer and defining the starredRepos reducer
const rootReducer = combineReducers({
  starredRepos: starredReposReducer,
});

export default rootReducer;
