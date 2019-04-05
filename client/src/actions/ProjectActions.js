import axios from "axios";
import { GET_PROJECTS, PROJECTS_LOADING } from "./types";

export const getProjects = () => dispatch => {
  dispatch(setProjectsLoading());
  axios.get("/api/projects").then(res =>
    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    })
  );
};

export const setProjectsLoading = () => {
  return {
    type: PROJECTS_LOADING
  };
};
