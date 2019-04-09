import { ADD_SLOT, SLOTS_LOADING, GET_SLOTS } from "../actions/types";
const initialState = {
  Slots: [],
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SLOTS:
      return {
        ...state,
        Slots: action.payload,
        loading: false
      };
    case ADD_SLOT:
      return {
        ...state,
        Slots: [action.payload, ...state.Slots]
      };
    case SLOTS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
