import axios from "axios";
import { GET_ADMINS, DELETE_ADMIN, ADMINS_LOADING, GET_ADMIN } from "./types";

export const getAdmins = () => dispatch => {
  dispatch(setAdminsLoading());
  axios.get("/api/admins").then(res =>
    dispatch({
      type: GET_ADMINS,
      payload: res.data
    })
  );
};
export const deleteAdmin = id => (dispatch, getState) => {
  axios.delete(`/api/admins/${id}`).then(res =>
    dispatch({
      type: DELETE_ADMIN,
      payload: id
    })
  );
};
export const getAdmin = id => dispatch => {
  dispatch(setAdminsLoading());
  axios.get(`/api/admins/${id}`).then(res =>
    dispatch({
      type: GET_ADMIN,
      payload: res.data
    })
  );
};
export const setAdminsLoading = () => {
  return {
    type: ADMINS_LOADING
  };
};
