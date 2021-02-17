import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
