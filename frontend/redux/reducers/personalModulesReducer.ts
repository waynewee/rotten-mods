import { AnyAction } from "redux";
import {
  FETCH_BOOKMARKS,
  FETCH_PLANNED_MODS,
  FETCH_PERSONAL_REVIEWS,
} from "../constants";
import { PersonalModulesState } from "../types";

const initialState: PersonalModulesState = {
  bookmarks: [],
  plannedMods: [],
  reviews: [],
};

const personalModulesReducer = (
  state: PersonalModulesState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case FETCH_BOOKMARKS:
      return { ...state, bookmarks: action.payload };
    case FETCH_PLANNED_MODS:
      return { ...state, plannedMods: action.payload };
    case FETCH_PERSONAL_REVIEWS:
      return { ...state, reviews: action.payload };
    default:
      return state;
  }
};

export default personalModulesReducer;
