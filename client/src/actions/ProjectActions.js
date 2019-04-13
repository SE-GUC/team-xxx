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

export const getProjects = () => dispatch => {
  dispatch(setProjectsLoading());
  axios.get("/api/projects").then(res =>
    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    })
  );
};
export const editProject = (ProjectEdit, id) => dispatch => {
  dispatch(setProjectsLoading());
  axios.put(`/api/Projects/${id}`, ProjectEdit).then(res =>
    dispatch({
      type: EDIT_PROJECT,
      payload: res.data
    })
  );
};
export const searchProject = query => dispatch => {
  dispatch(setProjectsLoading());
  axios.post(`/api/Projects/search/${query}`).then(res =>
    dispatch({
      type: SEARCH_PROJECT,
      payload: res.data
    })
  );
};
export const getProject = id => dispatch => {
  dispatch(setProjectsLoading());
  axios.get(`/api/Projects/${id}`).then(res =>
    dispatch({
      type: GET_PROJECT,
      payload: res.data
    })
  );
};
export const addProject = Project => (dispatch, getState) => {
  axios.post("/api/Projects", Project).then(res =>
    dispatch({
      type: ADD_PROJECT,
      payload: res.data
    })
  );
};
export const deleteproject = id => (dispatch, getState) => {
  axios.delete(`/api/Projects/${id}`).then(res =>
    dispatch({
      type: DELETE_PROJECT,
      payload: id
    })
  );
};
export const setProjectsLoading = () => {
  return {
    type: PROJECTS_LOADING
  };
};
