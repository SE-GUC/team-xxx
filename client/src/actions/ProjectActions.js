import axios from "axios";
import { GET_PROJECTS, PROJECTS_LOADING, GET_PROJECT } from "./types";

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

export const getProject = id => (dispatch, getState) => {
  axios
    .get(`/api/projects/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROJECT,
        payload: id
      })
    )
};

