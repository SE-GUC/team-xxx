import axios from "axios";
import {
  GET_CONSULTANCYS,
  DELETE_CONSULTANCY,
  CONSULTANCYS_LOADING
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
