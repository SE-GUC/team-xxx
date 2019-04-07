import axios from "axios";
import {
  GET_MEMBERS,
  MEMBERS_LOADING,
  DELETE_MEMBER
} from "./types";

export const getMembers = () => dispatch => {
  dispatch(setMembersLoading());
  axios.get("/api/Members").then(res =>
    dispatch({
      type: GET_MEMBERS,
      payload: res.data
    })
  );  
};
export const deleteMember = id => (dispatch, getState) => {
  axios.delete(`/api/Members/${id}`).then(res =>
    dispatch({
      type: DELETE_MEMBER,
      payload: id
    })
  );
};
export const setMembersLoading = () => {
    return {
      type: MEMBERS_LOADING
    };
  };
 
  