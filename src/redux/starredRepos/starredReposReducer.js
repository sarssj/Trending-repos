import {
  FETCH_REPO_REQUEST,
  FETCH_REPO_SECCESS,
  FETCH_REPO_FAILURE,
} from "./starredReposTypes";

//Defining the initial starredRepos state
const initialState = {
  isLoading: true,
  page: 1,
  repos: [],
};

//Defining the starredRepos
const starredReposReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_REPO_SECCESS:
      return {
        ...state,
        page: state.page + 1,
        isLoading: false,
        repos: [...state.repos, ...action.payload],
      };

    case FETCH_REPO_FAILURE:
      return {
        ...state,
        isLoading: false,
        repos: [...state.repos],
      };

    default:
      return state;
  }
};

export default starredReposReducer;
