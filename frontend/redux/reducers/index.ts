import { combineReducers } from "redux";
import authReducer from "./authReducer";
import searchReducer from "./searchReducer";
import compareReducer from "./compareReducer";
import personalModulesReducer from "./personalModulesReducer";

const reducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  compare: compareReducer,
  personalModules: personalModulesReducer
});

export default reducer;
