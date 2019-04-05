import { combineReducers } from "redux";
import ProjectReducer from "./ProjectReducer";

export default combineReducers({
  Project: ProjectReducer
});
