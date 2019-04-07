import {
    GET_MEMBERS,MEMBERS_LOADING,DELETE_MEMBER
  } from "../actions/types";
  
  const initialState = {
    Members: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case  GET_MEMBERS:
        return {
          ...state,
          Members: action.payload,
          loading: false
        };
        case MEMBERS_LOADING:
        return {
          ...state,
          loading: true
        };
        case DELETE_MEMBER:
        return {
          ...state,
          Members: state.Members.filter(Members => Members._id !== action.payload)
        };
      default:
        return state;
    }
  }
  