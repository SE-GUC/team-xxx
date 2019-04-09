import axios from "axios";
import { GET_PARTNERS, DELETE_PARTNER, PARTNERS_LOADING } from "./types";

export const getPartners = () => dispatch => {
  dispatch(setPartnersLoading());
  axios.get("/api/Partners").then(res =>
    dispatch({
      type: GET_PARTNERS,
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
