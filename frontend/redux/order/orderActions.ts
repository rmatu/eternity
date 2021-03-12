import { AppState } from "./../rootReducer";
import { AppActions } from "./../actions";
import { Dispatch } from "react";
import axios from "axios";
import { IOrder } from "../../types";
import * as orderActions from "./orderTypes";
import { CART_EMPTY } from "../cart/cartTypes";
import { localStorageNames } from "../../constants";

export const createOrder = (order) => async (
  dispatch: Dispatch<AppActions>
) => {
  dispatch({ type: orderActions.ORDER_CREATE_REQUEST });
  try {
    const { data } = await axios.post("/api/orders", order);
    console.log(data);
    dispatch({ type: orderActions.ORDER_CREATE_SUCCESS });
    dispatch({ type: CART_EMPTY });
    localStorage.removeItem(localStorageNames.CART_ITEMS);
  } catch (error) {
    dispatch({
      type: orderActions.ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
