import { combineReducers } from "redux";
import ProjectReducer from "./ProjectReducer";
import SlotReducer from "./SlotReducer";
import MembersInfoReducer from "./MembersInfoReducer";

export default combineReducers({
  Project: ProjectReducer,
  Slot: SlotReducer,
  Member: MembersInfoReducer
});
