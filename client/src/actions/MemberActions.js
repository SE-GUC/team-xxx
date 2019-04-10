import axios from "axios";
import {
  GET_MEMBERS,
  DELETE_MEMBERS,
  MEMBERS_LOADING,
  GET_MEMBERS_LIFECOACH
} from "./types";

export const getMembers = () => dispatch => {
  dispatch(setMembersLoading());
  axios.get("/api/members").then(res =>
    dispatch({
      type: GET_MEMBERS,
      payload: res.data
    })
  );
};
export const getlifecoachmembers = () => dispatch => {
  dispatch(setMembersLoading());
  axios.get("/api/members/me/lifecoach/").then(res =>
    dispatch({
      type: GET_MEMBERS_LIFECOACH,
      payload: res.data
    })
  );
};
export const deleteMember = id => (dispatch, getState) => {
  axios.delete(`/api/members/${id}`).then(res =>
    dispatch({
      type: DELETE_MEMBERS,
      payload: id
    })
  );
};
export const setMembersLoading = () => {
  return {
    type: MEMBERS_LOADING
  };
};