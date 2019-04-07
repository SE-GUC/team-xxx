import { combineReducers } from "redux";
import ProjectReducer from "./ProjectReducer";
import SlotReducer from "./SlotReducer";
import MembersInfoReducer from "./MembersInfoReducer";
import PartnerReducer from "./PartnerReducer";
import ConsultancyReducer from "./ConsultancyReducer";
export default combineReducers({
  Project: ProjectReducer,
  Slot: SlotReducer,
  Member: MembersInfoReducer,
  Partner: PartnerReducer,
  Consultancy :ConsultancyReducer
});
