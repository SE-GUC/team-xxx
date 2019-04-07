import { GET_PROJECTS, PROJECTS_LOADING, ADD_PROJECT } from "../actions/types";

const initialState = {
  Projects: [],
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
    case ADD_PROJECT:
      return {
        ...state,
        Projects: [action.payload, ...state.Projects]
      };
    case PROJECTS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
