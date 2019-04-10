import axios from "axios";
import {
  GET_PARTNERS,
  DELETE_PARTNER,
  PARTNERS_LOADING,
  GET_PARTNERS_LIFECOACH,
  GET_PARTNER
} from "./types";

export const getPartners = () => dispatch => {
  dispatch(setPartnersLoading());
  axios.get("/api/Partners").then(res =>
    dispatch({
      type: GET_PARTNERS,
      payload: res.data
    })
  );
};
export const getPartner = id => dispatch => {
  dispatch(setPartnersLoading());
  axios.get(`/api/Partners/${id}`).then(res =>
    dispatch({
      type: GET_PARTNER,
      payload: res.data
    })
  );
};
export const getlifecoachpartners = () => dispatch => {
  dispatch(setPartnersLoading());
  axios.get("/api/Partners/me/lifecoach/").then(res =>
    dispatch({
      type: GET_PARTNERS_LIFECOACH,
      payload: res.data
    })
  );
};
export const deletePartner = id => (dispatch, getState) => {
  axios.delete(`/api/Partners/${id}`).then(res =>
    dispatch({
      type: DELETE_PARTNER,
      payload: id
    })
  );
};
export const setPartnersLoading = () => {
  return {
    type: PARTNERS_LOADING
  };
};
