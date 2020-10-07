import { combineReducers } from "redux";
import authReducer from "./authReducer";
import searchReducer from "./searchReducer";

const reducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
});

export default reducer;
