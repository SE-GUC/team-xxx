import { GET_SLOTS, GET_FREE_SLOTS } from "../actions/types";

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
      case GET_FREE_SLOTS:
      return {
        ...state,
        Slots: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
