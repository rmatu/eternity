import { Dispatch } from "redux";
import { AppActions } from "../actions";
import { AppState } from "../rootReducer";
import { localStorageNames } from "../../constants";

import * as actions from "./cartTypes";

export const addToCart = (id: string, qty: number = 1) => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState
) => {
  const items = getState().cart.items;
  const existItem = items.find((x) => x.productId === id);
  if (existItem) {
    dispatch({
      type: actions.CART_ADD_ITEM,
      payload: [...items],
    });
  }
  dispatch({
    type: actions.CART_ADD_ITEM,
    payload: [...items, { productId: id, qty: 1 }],
  });
  localStorage.setItem(localStorageNames.CART_ITEMS, JSON.stringify(getState().cart.items));
};

export const removeItem = (productId: string) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
  dispatch({
    type: actions.CART_REMOVE_ITEM,
    payload: productId,
  });
  localStorage.setItem(localStorageNames.CART_ITEMS, JSON.stringify(getState().cart.items));
};

export const subQty = (productId: string) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
  dispatch({
    type: actions.CART_SUB_QTY,
    payload: productId,
  });
  localStorage.setItem(localStorageNames.CART_ITEMS, JSON.stringify(getState().cart.items));
};

export const addQty = (productId: string) => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
  dispatch({
    type: actions.CART_ADD_QTY,
    payload: productId,
  });
  localStorage.setItem(localStorageNames.CART_ITEMS, JSON.stringify(getState().cart.items));
};

export const setStep = (step: number) => ({
  type: actions.CART_CHANGE_STEP,
  payload: step,
});

export const saveShippingAddress = (shippingAddress: actions.ShippingAddress) => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState
) => {
  dispatch({
    type: actions.CART_SAVE_SHIPPING_ADDRESS,
    payload: shippingAddress,
  });
  localStorage.setItem(localStorageNames.SHIPPING_ADDRESS, JSON.stringify(getState().cart.shippingAddress));
};
