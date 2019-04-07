import axios from "axios";
import { GET_SLOTS, SLOTS_LOADING, GET_FREE_SLOTS } from "./types";

export const getSlots = () => dispatch => {
  dispatch(setSlotsLoading());
  axios.get("/api/Slots").then(res =>
    dispatch({
      type: GET_SLOTS,
      payload: res.data
    })
  );
};

// get FREE Slots
export const getFreeSlots = () => dispatch => {
  dispatch(setSlotsLoading());
  axios.get("/api/Slots/status//").then(res =>
    dispatch({
      type: GET_FREE_SLOTS,
      payload: res.data
    })
  );
};

export const setSlotsLoading = () => {
  return {
    type: SLOTS_LOADING
  };
};
