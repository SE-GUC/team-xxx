import {
    GET_PARTNERS, PARTNERS_LOADING
   
  } from "../actions/types";

  const initialState = {
    Partners: [],
    loading: false
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_PARTNERS:
        return {
          ...state,
          Partners: action.payload,
          loading: false
        };
      case PARTNERS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}