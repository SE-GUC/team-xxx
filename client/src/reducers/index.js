import { combineReducers } from "redux";
import ProjectReducer from "./ProjectReducer";
import SlotReducer from "./SlotReducer";
import MemberReducer from "./MemberReducer";
import PartnerReducer from "./PartnerReducer";
import ConsultancyReducer from "./ConsultancyReducer";
import AdminReducer from "./AdminReducer";

export default combineReducers({
  Project: ProjectReducer,
  Slot: SlotReducer,
  Partner: PartnerReducer,
  Consultancy: ConsultancyReducer,
  Admin: AdminReducer,
  Member: MemberReducer
});
