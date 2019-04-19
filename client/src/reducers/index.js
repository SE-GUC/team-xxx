import { combineReducers } from "redux";
import ProjectReducer from "./ProjectReducer";
import SlotReducer from "./SlotReducer";
import MemberReducer from "./MemberReducer";
import PartnerReducer from "./PartnerReducer";
import ConsultancyReducer from "./ConsultancyReducer";
import AdminReducer from "./AdminReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer.js";

export default combineReducers({
  Project: ProjectReducer,
  Slot: SlotReducer,
  Partner: PartnerReducer,
  Consultancy: ConsultancyReducer,
  Admin: AdminReducer,
  error: errorReducer,
  auth: authReducer,
  Member: MemberReducer
});
