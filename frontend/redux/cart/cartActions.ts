import { Dispatch } from "redux";
import { IProduct } from "../../types";
import { AppActions } from "../actions";
import { AppState } from "../rootReducer";

import * as actions from "./cartTypes";

export const addToCart = (product: IProduct, qty: number = 1) => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState
) => {
  dispatch({
    type: actions.CART_ADD_ITEM,
    payload: {
      product,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.items));
};
