import { UserActionTypes } from "./user/userTypes";
import { FavoritesActionTypes } from "./favorites/favoritesTypes";
import { CartActionTypes } from "./cart/cartTypes";

export type AppActions =
  | CartActionTypes
  | FavoritesActionTypes
  | UserActionTypes;
