import { createStore } from "redux";
import { MakeStore, createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import reducer from "./reducers";
import { ReduxState } from "./types";

const makeStore: MakeStore<ReduxState> = (context: Context) =>
  createStore(reducer);

export const wrapper = createWrapper<ReduxState>(makeStore, { debug: true });
