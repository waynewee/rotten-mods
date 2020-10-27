import { AnyAction } from "redux";
import { LOG_USER_IN, LOG_USER_OUT } from "../constants";
import { AuthState } from "../types";


const initialState: AuthState = {
  isLoggedIn: false,
  user: null
};

const authReducer = (state: AuthState = initialState, action: AnyAction) => {
  console.log("authreducer called");
  switch (action.type) {
    case LOG_USER_IN:
      console.log("Logging in");
      console.log(action.payload);
      return { ...state, isLoggedIn: true, user: action.payload};
    case LOG_USER_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default authReducer;
