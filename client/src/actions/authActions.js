import axios from "axios";
import { returnErrors } from "./errorActions";
import {
  ADMIN_LOADED,
  ADMIN_LOADING,
  PARTNER_LOADING,
  PARTNER_LOADED,
  REGISTER_FAIL_PARTNER,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_FAIL_MEMBER,
  MEMBER_LOADING,
  MEMBER_LOADED,
  CONSULTANCY_LOADING,
  CONSULTANCY_LOADED,
  REGISTER_FAIL_CONSULTANCY
} from "./types";

// Check token & load admin
export const loadAdmin = () => (dispatch, getState) => {
  // Admin loading
  dispatch({ type: ADMIN_LOADING });
  axios
    .get("/api/auth/admin", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADMIN_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// Register Admin
export const register = ({ Name, Email, Password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request body
  const body = JSON.stringify({ Name, Email, Password });
  axios
    .post("/api/admins", body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};
// Check token & load partner
export const loadPartner = () => (dispatch, getState) => {
  // partner loading
  dispatch({ type: PARTNER_LOADING });
  axios
    .get("/api/auth/partner", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: PARTNER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};
// Register partner
export const registerpartner = ({
  Name,
  Email,
  Password,
  business,
  partners,
  boardmembers,
  events,
  field,
  projects,
  feedback
}) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request body
  const body = JSON.stringify({
    Name,
    Email,
    Password,
    business,
    partners,
    boardmembers,
    events,
    field,
    projects,
    feedback
  });
  axios
    .post("/api/partners", body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(
          err.response.data,
          err.response.status,
          "REGISTER_FAIL_PARTNER"
        )
      );
      dispatch({
        type: REGISTER_FAIL_PARTNER
      });
    });
};
// Login
export const login = ({ Email, Password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request body
  const body = JSON.stringify({ Email, Password });
  axios
    .post("/api/auth", body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};
// Login partner
export const loginpartner = ({ Email, Password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request body
  const body = JSON.stringify({ Email, Password });
  axios
    .post("/api/auth/partner", body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};
// Logout
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// Check token & load member
export const loadMember = () => (dispatch, getState) => {
  // member loading
  dispatch({ type: MEMBER_LOADING });
  axios
    .get("/api/auth/member", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: MEMBER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};
// Register member
export const registerMember = ({
  Name,
  Email,
  Password,
  age,
  skills,
  interests,
  events,
  tasks,
  reviews,
  masterclasses
}) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request body
  const body = JSON.stringify({
    Name,
    Email,
    Password,
    age,
    skills,
    interests,
    events,
    tasks,
    reviews,
    masterclasses
  });
  axios
    .post("/api/members", body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(
          err.response.data,
          err.response.status,
          "REGISTER_FAIL_MEMBER"
        )
      );
      dispatch({
        type: REGISTER_FAIL_MEMBER
      });
    });
};
// Login Member
export const loginMember = ({ Email, Password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request body
  const body = JSON.stringify({ Email, Password });
  axios
    .post("/api/auth/member", body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// Check token & load Consultancy
export const loadConsultancy = () => (dispatch, getState) => {
  // Consultancy loading
  dispatch({ type: CONSULTANCY_LOADING });
  axios
    .get("/api/auth/Consultancy", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: CONSULTANCY_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};
// Register Consultancy
export const registerConsultancy = ({
  Name,
  Email,
  Password,
  business,
  partners,
  boardmembers,
  events,
  reports
}) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request body
  const body = JSON.stringify({
    Name,
    Email,
    Password,
    business,
    partners,
    boardmembers,
    events,
    reports
  });
  axios
    .post("/api/Consultancys", body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(
          err.response.data,
          err.response.status,
          "REGISTER_FAIL_CONSULTANCY"
        )
      );
      dispatch({
        type: REGISTER_FAIL_CONSULTANCY
      });
    });
};
// Login Consultancy
export const loginConsultancy = ({ Email, Password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Request body
  const body = JSON.stringify({ Email, Password });
  axios
    .post("/api/auth/Consultancy", body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// Setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().auth.token;
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
