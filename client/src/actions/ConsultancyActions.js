import axios from "axios";
import {
  GET_CONSULTANCYS,
  DELETE_CONSULTANCY,
  CONSULTANCYS_LOADING,
  GET_CONSULTANCYS_LIFECOACH,
  GET_CONSULTANCY
} from "./types";

export const getConsultancys = () => dispatch => {
  dispatch(setConsultancysLoading());
  axios.get("/api/Consultancys").then(res =>
    dispatch({
      type: GET_CONSULTANCYS,
      payload: res.data
    })
  );
};
export const getConsultancy = id => dispatch => {
  dispatch(setConsultancysLoading());
  axios.get(`/api/Consultancys/${id}`).then(res =>
    dispatch({
      type: GET_CONSULTANCY,
      payload: res.data
    })
  );
};
export const getlifecoachconsultancys = () => dispatch => {
  dispatch(setConsultancysLoading());
  axios.get("/api/Consultancys/lifecoach/me/").then(res =>
    dispatch({
      type: GET_CONSULTANCYS_LIFECOACH,
      payload: res.data
    })
  );
};
export const deleteConsultancy = id => (dispatch, getState) => {
  axios.delete(`/api/Consultancys/${id}`).then(res =>
    dispatch({
      type: DELETE_CONSULTANCY,
      payload: id
    })
  );
};
export const setConsultancysLoading = () => {
  return {
    type: CONSULTANCYS_LOADING
  };
};
