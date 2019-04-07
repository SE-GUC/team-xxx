import axios from "axios";
import { GET_CONSULTANCYS, CONSULTANCYS_LOADING } from "./types";

export const getConsultancys = () => dispatch => {
  dispatch(setConsultancysLoading());
  axios.get("/api/Consultancys").then(res =>
    dispatch({
      type: GET_CONSULTANCYS,
      payload: res.data
    })
  );
};
export const setConsultancysLoading = () => {
  return {
    type: CONSULTANCYS_LOADING
  };
};
