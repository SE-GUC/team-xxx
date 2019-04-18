import {
  PARTNER_LOADED,
  PARTNER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_FAIL_PARTNER,
  ADMIN_LOADING,
  ADMIN_LOADED,
  MEMBER_LOADED,
  MEMBER_LOADING,
  REGISTER_FAIL_MEMBER,
  CONSULTANCY_LOADING,
  CONSULTANCY_LOADED,
  REGISTER_FAIL_CONSULTANCY
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  admin: null,
  partner: null,
  consultancy: null,
  member: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADMIN_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case ADMIN_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        admin: action.payload
      };
    case PARTNER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case PARTNER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        partner: action.payload
      };
    case MEMBER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case MEMBER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        member: action.payload
      };
    case CONSULTANCY_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case CONSULTANCY_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        consultancy: action.payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        admin: null,
        isAuthenticated: false,
        isLoading: false
      };
    case REGISTER_FAIL_PARTNER:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        partner: null,
        isAuthenticated: false,
        isLoading: false
      };
    case REGISTER_FAIL_MEMBER:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        member: null,
        isAuthenticated: false,
        isLoading: false
      };
    case REGISTER_FAIL_CONSULTANCY:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        consultancy: null,
        isAuthenticated: false,
        isLoading: false
      };
    default:
      return state;
  }
}
