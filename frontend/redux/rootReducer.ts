import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import favoritesReducer from "./favorites/favoritesReducer";
import navbarReducer from "./navbar/navbarReducer";
import orderReducer from "./order/orderReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
  user: userReducer,
  navbar: navbarReducer,
  order: orderReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
