import axios from "axios";
import {
  FETCH_REPO_REQUEST,
  FETCH_REPO_SECCESS,
  FETCH_REPO_FAILURE,
} from "./starredReposTypes";

//Defining the starredRepos Actions
export const fetchRepoRequest = () => {
  return {
    type: FETCH_REPO_REQUEST,
  };
};

export const fetchRepoSucess = (repos) => {
  return {
    type: FETCH_REPO_SECCESS,
    payload: repos,
  };
};

export const fetchRepoFailure = (error) => {
  return {
    type: FETCH_REPO_FAILURE,
    payload: error,
  };
};

//Call the github API using 2017-10-22 date

export const fetchRepos = (page) => {
  return (dispatch) => {
    dispatch(fetchRepoRequest());
    axios

      .get(
        `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc`
      )
      .then((res) => {
        const repos = res.data.items;
        dispatch(fetchRepoSucess(repos));
      });
  };
};
