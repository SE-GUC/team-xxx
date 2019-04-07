import {
    GET_CONSULTANCYS, CONSULTANCYS_LOADING
   
  } from "../actions/types";

  const initialState = {
    Consultancys: [],
    loading: false
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_CONSULTANCYS:
        return {
          ...state,
          Consultancys: action.payload,
          loading: false
        };
      case CONSULTANCYS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}