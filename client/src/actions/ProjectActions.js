import axios from "axios";
import { GET_PROJECTS,DELETE_ITEM, PROJECTS_LOADING, ADD_PROJECT } from "./types";

export const getProjects = () => dispatch => {
  dispatch(setProjectsLoading());
  axios.get("/api/projects").then(res =>
    dispatch({
      type: GET_PROJECTS,
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
  axios
    
    .delete(`/api/Projects/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    );
    
};
export const setProjectsLoading = () => {
  return {
    type: PROJECTS_LOADING
  };
};
