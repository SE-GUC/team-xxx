import {
  GET_MEMBERS,
  DELETE_MEMBERS,
  MEMBERS_LOADING,
  GET_MEMBERS_LIFECOACH
} from "../actions/types";

const initialState = {
  Members: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MEMBERS:
      return {
        ...state,
        Members: action.payload,
        loading: false
      };
    case GET_MEMBERS_LIFECOACH:
      return {
        ...state,
        Members: action.payload,
        loading: false
      };
    case DELETE_MEMBERS:
      return {
        ...state,
        Members: state.Members.filter(Member => Member._id !== action.payload)
      };
    case MEMBERS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
