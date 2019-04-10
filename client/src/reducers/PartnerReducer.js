import {
  GET_PARTNERS,
  DELETE_PARTNER,
  PARTNERS_LOADING,
  GET_PARTNERS_LIFECOACH
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
    case GET_PARTNERS_LIFECOACH:
      return {
        ...state,
        Partners: action.payload,
        loading: false
      };
    case DELETE_PARTNER:
      return {
        ...state,
        Partners: state.Partners.filter(
          Partner => Partner._id !== action.payload
        )
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
