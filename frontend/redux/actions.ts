import { UserActionTypes } from "./user/userTypes";
import { FavoritesActionTypes } from "./favorites/favoritesTypes";
import { CartActionTypes } from "./cart/cartTypes";
import { NavbarActionTypes } from "./navbar/navbarTypes";
import { OrderActionTypes } from "./order/orderTypes";

export type AppActions =
  | CartActionTypes
  | FavoritesActionTypes
  | NavbarActionTypes
  | OrderActionTypes
  | UserActionTypes;
