import { AnyAction } from "redux";
import { LOG_USER_IN, LOG_USER_OUT } from "../constants";
import { AuthState } from "../types";

const initialState: AuthState = {
  isLoggedIn: false,
};

const authReducer = (state: AuthState = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOG_USER_IN:
      console.log("Logging in");
      return { ...state, isLoggedIn: true };
    case LOG_USER_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default authReducer;
