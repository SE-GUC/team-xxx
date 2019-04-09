import axios from "axios";
import { ADD_SLOT, SLOTS_LOADING, GET_SLOTS } from "./types";

export const getSlots = () => dispatch => {
  dispatch(setSlotsLoading());
  axios.get("/api/Slots").then(res =>
    dispatch({
      type: GET_SLOTS,
      payload: res.data
    })
  );
};
export const addSlot = Slot => (dispatch, getState) => {
  axios.post("/api/Slots", Slot).then(res =>
    dispatch({
      type: ADD_SLOT,
      payload: res.data
    })
  );
};
export const setSlotsLoading = () => {
  return {
    type: SLOTS_LOADING
  };
};
