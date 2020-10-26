import { AnyAction } from "redux";
import {
  FETCH_BOOKMARKS,
  FETCH_PLANNER,
  FETCH_PERSONAL_REVIEWS,
} from "../constants";
import { PersonalModulesState } from "../types";

const initialState: PersonalModulesState = {
  bookmarks: [],
  planner: [],
  reviews: [],
};

const personalModulesReducer = (
  state: PersonalModulesState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case FETCH_BOOKMARKS:
      return { ...state, bookmarks: action.payload };
    case FETCH_PLANNER:
      return { ...state, planner: action.payload };
    case FETCH_PERSONAL_REVIEWS:
      return { ...state, reviews: action.payload };
    default:
      return state;
  }
};

export default personalModulesReducer;
