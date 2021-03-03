import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import favoritesReducer from "./favorites/favoritesReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
