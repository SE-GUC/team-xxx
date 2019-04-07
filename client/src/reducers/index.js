import { combineReducers } from "redux";
import ProjectReducer from "./ProjectReducer";
import SlotReducer from "./SlotReducer";

export default combineReducers({
  Project: ProjectReducer,
  Slot: SlotReducer
});
