import {
  GET_CONSULTANCYS,
  DELETE_CONSULTANCY,
  CONSULTANCYS_LOADING
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
    case DELETE_CONSULTANCY:
      return {
        ...state,
        Consultancys: state.Consultancys.filter(Consultancy => Consultancy._id !== action.payload)
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
