import { AppActions } from "./actions";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import thunk, { ThunkMiddleware } from "redux-thunk";

import rootReducer, { AppState } from "./rootReducer";

//test
const makeStore = () =>
  createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunk.withExtraArgument({} as ThunkMiddleware<AppState, AppActions>)
      )
    )
  );

export const wrapper = createWrapper(makeStore);
