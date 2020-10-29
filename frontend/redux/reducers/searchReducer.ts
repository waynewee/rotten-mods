import { AnyAction } from "redux";
import { SEARCH_TERM } from "../constants";
import { SearchState } from "../types";

const initialState: SearchState = {
  searchTerm: "",
};

const searchReducer = (
  state: SearchState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
