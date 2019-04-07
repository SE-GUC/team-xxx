import axios from "axios";
import {
  GET_PARTNERS,PARTNERS_LOADING
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
export const setPartnersLoading = () => {
    return {
      type: PARTNERS_LOADING
    };
  };