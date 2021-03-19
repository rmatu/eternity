import { AppState } from "./../rootReducer";
import { AppActions } from "./../actions";
import { Dispatch } from "react";
import axios from "axios";
import { IOrder } from "../../types";
import * as orderActions from "./orderTypes";
import { CART_EMPTY } from "../cart/cartTypes";
import { localStorageNames } from "../../constants";

export const createOrder = (order) => async (dispatch: Dispatch<AppActions>) => {
  dispatch({ type: orderActions.ORDER_CREATE_REQUEST });
  try {
    await axios.post("/api/orders", order);
    dispatch({ type: orderActions.ORDER_CREATE_SUCCESS });
    dispatch({ type: CART_EMPTY });
    localStorage.removeItem(localStorageNames.CART_ITEMS);
  } catch (error) {
    dispatch({
      type: orderActions.ORDER_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const fetchAllOrders = () => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
  dispatch({ type: orderActions.ORDER_CREATE_REQUEST });
  try {
    const user = getState().user.user;
    const order = getState().order;
    const { data } = await axios.get(`/api/orders/${user._id}?limit=${order.orderLimit}&skip=${order.orderSkip}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    dispatch({ type: orderActions.ORDER_MINE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: orderActions.ORDER_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const fetchMoreOrders = () => async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
  dispatch({ type: orderActions.ORDER_CREATE_REQUEST });
  try {
    const user = getState().user.user;
    const order = getState().order;
    const { data } = await axios.get(`/api/orders/${user._id}?limit=${order.orderLimit}&skip=${order.orderSkip}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    dispatch({ type: orderActions.ORDER_REFETCH_MINE_LIST_SUCCESS, payload: data });

    if (data.length === 0) {
      console.log("here");
      dispatch({ type: orderActions.ORDER_CANT_FETCH });
    }
  } catch (error) {
    dispatch({
      type: orderActions.ORDER_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const orderCleanUp = () => ({
  type: orderActions.ORDER_CLEAN_UP,
});
