import * as actions from "./cartTypes";
import { CartState, CartActionTypes } from "./cartTypes";

const cartDefaultState: CartState = {
  items: [],
};

const cartReducer = (state = cartDefaultState, action: CartActionTypes) => {
  switch (action.type) {
    case actions.CART_ADD_ITEM:
      const existItem = state.items.find(
        (x) => x.productId === action.payload.productId
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
