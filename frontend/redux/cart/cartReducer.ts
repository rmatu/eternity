import * as actions from "./cartTypes";
import { CartState, CartActionTypes } from "./cartTypes";
import { getLocalStorage } from "../../utils/helpers";
import { localStorageNames } from "../../constants";

const cartDefaultState: CartState = {
  items: getLocalStorage(localStorageNames.CART_ITEMS),
  step: 1,
  shippingAddress: getLocalStorage(localStorageNames.SHIPPING_ADDRESS),
  shippingPrice: 499,
};

// ! This implementation is wrong, will fix it later
// ! Move the logic to cartActions

const cartReducer = (state = cartDefaultState, action: CartActionTypes) => {
  switch (action.type) {
    case actions.CART_ADD_ITEM:
      return {
        ...state,
        items: [action.payload],
      };
    case actions.CART_REMOVE_ITEM:
      const newArray = state.items.filter((item) => item.productId !== action.payload);
      return {
        ...state,
        items: [...newArray],
      };
    case actions.CART_ADD_QTY:
      const idx = state.items.findIndex((item) => item.productId === action.payload);
      const newArr = state.items;
      newArr[idx].qty++;
      return {
        ...state,
        items: [...newArr],
      };
    case actions.CART_SUB_QTY:
      const index = state.items.findIndex((item) => item.productId === action.payload);
      const newArra = state.items;
      if (state.items[index].qty === 1) {
        return {
          ...state,
          items: [...state.items],
        };
      }
      newArra[index].qty--;
      return {
        ...state,
        items: [...newArra],
      };
    case actions.CART_CHANGE_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case actions.CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case actions.CART_EMPTY:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
