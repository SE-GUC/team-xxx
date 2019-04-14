import {
  GET_SLOTS,
  GET_FREE_SLOTS,
  ADD_SLOT,
  SLOTS_LOADING,
  DELETE_SLOT,
  BOOK_SLOT,
  CONFIRM_SLOT
} from "../actions/types";

const initialState = {
  Slots: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
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
    case GET_SLOTS:
      return {
        ...state,
        Slots: action.payload,
        loading: false
      };
    case DELETE_SLOT:
      return {
        ...state,
        Slots: state.Slots.filter(Slot => Slot._id !== action.payload)
      };
    case GET_FREE_SLOTS:
      return {
        ...state,
        Slots: action.payload,
        loading: false
      };
    case BOOK_SLOT:
      return {
        ...state,
        Slots: [action.payload, ...state.Slots]
      };
    case CONFIRM_SLOT:
      return {
        ...state,
        Slots: [action.payload, ...state.Slots]
      };
    default:
      return state;
  }
}
