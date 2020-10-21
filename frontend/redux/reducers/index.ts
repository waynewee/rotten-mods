import { combineReducers } from "redux";
import authReducer from "./authReducer";
import searchReducer from "./searchReducer";
import compareReducer from "./compareReducer";

const reducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  compare: compareReducer
});

export default reducer;
