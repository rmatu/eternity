import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import favoritesReducer from "./favorites/favoritesReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
  user: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
