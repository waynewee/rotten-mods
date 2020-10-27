import { AnyAction } from "redux";
import { LOG_USER_IN, LOG_USER_OUT } from "../constants";
import { AuthState } from "../types";

const initialState: AuthState = {
  isLoggedIn: false,
};

const authReducer = (state: AuthState = initialState, action: AnyAction) => {
  console.log("authreducer called");
  switch (action.type) {
    case LOG_USER_IN:
      console.log("Logging in");
      return { ...state, isLoggedIn: true, userId: action.userId};
    case LOG_USER_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default authReducer;
