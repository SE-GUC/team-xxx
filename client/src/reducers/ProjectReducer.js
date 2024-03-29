import {
  GET_PROJECTS,
  PROJECTS_LOADING,
  DELETE_PROJECT,
  ADD_PROJECT,
  GET_PROJECT,
  SEARCH_PROJECT,
  EDIT_PROJECT,
  APPLY_MEMBER
} from "../actions/types";

const initialState = {
  Projects: [],
  Project: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        Projects: action.payload,
        loading: false
      };
    case EDIT_PROJECT:
      return {
        ...state,
        Project: action.payload,
        loading: false
      };
    case SEARCH_PROJECT:
      return {
        ...state,
        Projects: action.payload,
        loading: false
      };
    case GET_PROJECT:
      return {
        ...state,
        Projects: action.payload,
        loading: false
      };
    case ADD_PROJECT:
      return {
        ...state,
        Projects: [action.payload, ...state.Projects]
      };
    case DELETE_PROJECT:
      return {
        ...state,
        Projects: state.Projects.filter(
          Project => Project._id !== action.payload
        )
      };
    case PROJECTS_LOADING:
      return {
        ...state,
        loading: true
      };
      case APPLY_MEMBER:
      return {
        ...state,
        Projects: [action.payload, ...state.Projects]
      };
    default:
      return state;
  }
}
