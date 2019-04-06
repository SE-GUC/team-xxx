import { GET_PROJECTS, PROJECTS_LOADING, GET_PROJECT } from "../actions/types";

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
    case PROJECTS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROJECT:
      return {
        ...state,
        Projects: state.Projects.filter(Projects => Projects._id == action.payload)
      };
    default:
      return state;
  }
}
