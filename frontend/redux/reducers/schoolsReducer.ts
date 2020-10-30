import { AnyAction } from "redux";
import { FETCH_SCHOOLS } from "../constants";
import { School } from "../../types";

const initialState: School[] = [];

const schoolsReducer = (state: School[] = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_SCHOOLS:
      return action.payload;
    default:
      return state;
  }
};

export default schoolsReducer;
