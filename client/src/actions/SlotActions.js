import axios from "axios";
import{ADD_SLOT,SLOTS_LOADING} from "./types";


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