import * as actions from "./cartTypes";
import { CartState, CartActionTypes } from "./cartTypes";

const cartDefaultState: CartState = {};

const cartReducer = (state = cartDefaultState, action: CartActionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cartReducer;
