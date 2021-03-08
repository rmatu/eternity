import * as actions from "./cartTypes";
import { CartState, CartActionTypes } from "./cartTypes";
import { getLocalStorage } from "../../utils/helpers";
import { localStorageNames } from "../../constants";

const cartDefaultState: CartState = {
  items: getLocalStorage(localStorageNames.CART_ITEMS),
};

const cartReducer = (state = cartDefaultState, action: CartActionTypes) => {
  switch (action.type) {
    case actions.CART_ADD_ITEM:
      const existItem = state.items.find(
        (x) => x.product._id === action.payload.product._id
      );
      if (existItem) {
        return {
          ...state,
          items: [...state.items],
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
