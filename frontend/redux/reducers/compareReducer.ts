import { AnyAction } from "redux";
import {
  ADD_MODULE_FOR_COMPARISON,
  DELETE_MODULE_FOR_COMPARISON,
  FIRST,
  SECOND,
} from "../constants";
import { ModuleCompareState } from "../types";

const initialState: ModuleCompareState = {
  firstModuleId: "",
  firstModuleCode: "",
  secondModuleId: "",
  secondModuleCode: "",
};

const compareReducer = (
  state: ModuleCompareState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ADD_MODULE_FOR_COMPARISON:
      const { id, code } = action.payload;

      // if modules to compare are the same, return state
      if (state.firstModuleId == id) {
        return state;
      }

      if (!state.firstModuleId) {
        return { ...state, firstModuleId: id, firstModuleCode: code };
      }

      return { ...state, secondModuleId: id, secondModuleCode: code };
    case DELETE_MODULE_FOR_COMPARISON:
      if (action.payload == FIRST) {
        return { ...state, firstModuleId: "", firstModuleCode: "" };
      } else if (action.payload == SECOND) {
        return { ...state, secondModuleId: "", secondModuleCode: "" };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default compareReducer;
