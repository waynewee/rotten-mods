import { combineReducers } from "redux";
import authReducer from "./authReducer";
import searchReducer from "./searchReducer";
import compareReducer from "./compareReducer";
import personalModulesReducer from "./personalModulesReducer";
import schoolsReducer from "./schoolsReducer";

const reducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  compare: compareReducer,
  personalModules: personalModulesReducer,
  schools: schoolsReducer,
});

export default reducer;
