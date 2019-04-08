import { GET_ADMINS, DELETE_ADMIN, ADMINS_LOADING } from "../actions/types";

const initialState = {
  Admins: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ADMINS:
      return {
        ...state,
        Admins: action.payload,
        loading: false
      };
    case DELETE_ADMIN:
      return {
        ...state,
        Admins: state.Admins.filter(Admin => Admin._id !== action.payload)
      };
    case ADMINS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
