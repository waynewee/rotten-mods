import { createStore } from "redux";
import { MakeStore, createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import reducer from "./reducers";
import { ReduxState } from "./types";

export const store = createStore(reducer);

const makeStore: MakeStore<ReduxState> = (context: Context) => store;

export const wrapper = createWrapper<ReduxState>(makeStore, { debug: true });
