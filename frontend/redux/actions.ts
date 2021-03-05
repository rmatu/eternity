import { UserActionTypes } from "./user/userTypes";
import { FavoritesActionTypes } from "./favorites/favoritesTypes";
import { CartActionTypes } from "./cart/cartTypes";
import { NavbarActionTypes } from "./navbar/navbarTypes";

export type AppActions =
  | CartActionTypes
  | FavoritesActionTypes
  | NavbarActionTypes
  | UserActionTypes;
