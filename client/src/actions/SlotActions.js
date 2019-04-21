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
  EDIT_SLOT,
  SLOT_APPLY
} from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";
export const getSlots = () => (dispatch, getState) => {
  dispatch(setSlotsLoading());
  axios
    .get("/api/Slots/", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_SLOTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const editSlot = (SlotEdit, id) => (dispatch, getState) => {
  dispatch(setSlotsLoading());
  axios
    .put(`/api/Slots/${id}`, SlotEdit, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: EDIT_SLOT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const getslot = id => (dispatch, getState) => {
  dispatch(setSlotsLoading());
  axios
    .get(`/api/Slots/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_SLOT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const deleteSlot = id => (dispatch, getState) => {
  axios
    .delete(`/api/slots/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_SLOT,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const addSlot = Slot => (dispatch, getState) => {
  axios
    .post("/api/Slots", Slot, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_SLOT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const BookSlot = id => (dispatch, getState) => {
  dispatch(setSlotsLoading());
  axios
    .put(`/api/Slots/book/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: BOOK_SLOT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
//get FREE Slots
export const getFreeSlots = () => (dispatch, getState) => {
  dispatch(setSlotsLoading());
  axios
    .get("/api/Slots/status//", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_FREE_SLOTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const ConfirmSlot = id => (dispatch, getState) => {
  dispatch(setSlotsLoading());
  axios
    .put(`/api/Slots/confim/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: CONFIRM_SLOT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
// export const Slotapply = (memb, id) => (dispatch, getState) => {
//   dispatch(setProjectsLoading());
//   axios
//     .put(`/api/Slots/${id}`, memb, tokenConfig(getState))
//     .then(res =>
//       dispatch({
//         type: SLOT_APPLY,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch(returnErrors( ))
//     );
// };

export const setSlotsLoading = () => {
  return {
    type: SLOTS_LOADING
  };
};
