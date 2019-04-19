import axios from "axios";
import {
  GET_PROJECTS,
  DELETE_PROJECT,
  PROJECTS_LOADING,
  ADD_PROJECT,
  GET_PROJECT,
  SEARCH_PROJECT,
  EDIT_PROJECT
} from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getProjects = () => (dispatch, getState) => {
  dispatch(setProjectsLoading());
  axios
    .get("/api/projects", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_PROJECTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const editProject = (ProjectEdit, id) => (dispatch, getState) => {
  dispatch(setProjectsLoading());
  axios
    .put(`/api/Projects/${id}`, ProjectEdit, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: EDIT_PROJECT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const searchProject = query => (dispatch, getState) => {
  dispatch(setProjectsLoading());
  axios
    .post(`/api/Projects/search/${query}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: SEARCH_PROJECT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const getProject = id => (dispatch, getState) => {
  dispatch(setProjectsLoading());
  axios
    .get(`/api/Projects/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_PROJECT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const addProject = Project => (dispatch, getState) => {
  axios
    .post("/api/Projects", Project, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_PROJECT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const deleteproject = id => (dispatch, getState) => {
  axios
    .delete(`/api/Projects/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_PROJECT,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const setProjectsLoading = () => {
  return {
    type: PROJECTS_LOADING
  };
};
