import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import favoritesReducer from "./favorites/favoritesReducer";
import navbarReducer from "./navbar/navbarReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
  user: userReducer,
  navbar: navbarReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
