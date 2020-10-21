import { AnyAction } from "redux";
import {
  ADD_MODULE_FOR_COMPARISON,
  DELETE_MODULE_FOR_COMPARISON,
  FIRST,
  SECOND,
} from "../constants";
import { ModuleCompareState } from "../types";

const initialState: ModuleCompareState = {
  firstModuleCode: "", // TODO: To set to empty string
  secondModuleCode: "",
};

const compareReducer = (
  state: ModuleCompareState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ADD_MODULE_FOR_COMPARISON:
      // if modules to compare are the same, return state
      if (state.firstModuleCode == action.payload) {
        return state;
      }

      if (!state.firstModuleCode) {
        return { ...state, firstModuleCode: action.payload };
      }

      return { ...state, secondModuleCode: action.payload };
    case DELETE_MODULE_FOR_COMPARISON:
      if (action.payload == FIRST) {
        return { ...state, firstModuleCode: "" };
      } else if (action.payload == SECOND) {
        return { ...state, secondModuleCode: "" };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default compareReducer;
