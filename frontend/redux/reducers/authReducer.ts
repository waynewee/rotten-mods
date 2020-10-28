import { AnyAction } from "redux";
import { LOG_USER_IN, LOG_USER_OUT } from "../constants";
import { AuthState } from "../types";

const initialState: AuthState = {
  isLoggedIn: false,
  user: {
    _id: "",
    fullName: "",
    yearOfStudy: 1,
    studyCourse: ""
  },
};

const authReducer = (state: AuthState = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOG_USER_IN:
      return { ...state, isLoggedIn: true, user: action.payload };
    case LOG_USER_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default authReducer;
