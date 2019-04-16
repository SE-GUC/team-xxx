import axios from "axios";
import {
  GET_SLOTS,
  SLOTS_LOADING,
  GET_FREE_SLOTS,
  ADD_SLOT,
  DELETE_SLOT,
  BOOK_SLOT,
  CONFIRM_SLOT,
  GET_SLOT,
  EDIT_SLOT
} from "./types";

export const getSlots = () => dispatch => {
  dispatch(setSlotsLoading());
  axios.get("/api/Slots/").then(res =>
    dispatch({
      type: GET_SLOTS,
      payload: res.data
    })
  );
};
export const editSlot = (SlotEdit, id) => dispatch => {
  dispatch(setSlotsLoading());
  axios.put(`/api/Slots/${id}`, SlotEdit).then(res =>
    dispatch({
      type: EDIT_SLOT,
      payload: res.data
    })
  );
};
export const getslot = id => dispatch => {
  dispatch(setSlotsLoading());
  axios.get(`/api/Slots/${id}`).then(res =>
    dispatch({
      type: GET_SLOT,
      payload: res.data
    })
  );
};
export const deleteSlot = id => (dispatch, getState) => {
  axios.delete(`/api/slots/${id}`).then(res =>
    dispatch({
      type: DELETE_SLOT,
      payload: id
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
export const BookSlot = id => dispatch => {
  dispatch(setSlotsLoading());
  axios.put(`/api/Slots/book/${id}`).then(res =>
    dispatch({
      type: BOOK_SLOT,
      payload: res.data
    })
  );
};
//get FREE Slots
export const getFreeSlots = () => dispatch => {
  dispatch(setSlotsLoading());
  axios.get("/api/Slots/status//").then(res =>
    dispatch({
      type: GET_FREE_SLOTS,
      payload: res.data
    })
  );
};
export const ConfirmSlot = id => dispatch => {
  dispatch(setSlotsLoading());
  axios.put(`/api/Slots/confim/${id}`).then(res =>
    dispatch({
      type: CONFIRM_SLOT,
      payload: res.data
    })
  );
};
export const setSlotsLoading = () => {
  return {
    type: SLOTS_LOADING
  };
};
