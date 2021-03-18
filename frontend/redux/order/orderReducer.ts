import { OrderActionTypes, OrderState } from "./orderTypes";
import * as actions from "./orderTypes";
import { number } from "yup/lib/locale";

const orderDefaultState: OrderState = {
  orders: null,
  loading: false,
  error: null,
  orderSkip: 0,
  orderLimit: 8,
  canFetchMore: true,
};

const orderReducer = (state = orderDefaultState, action: OrderActionTypes) => {
  switch (action.type) {
    case actions.ORDER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actions.ORDER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case actions.ORDER_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actions.ORDER_MINE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actions.ORDER_MINE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orders: [...action.payload],
        orderSkip: state.orderSkip + 8,
      };

    case actions.ORDER_MINE_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actions.ORDER_REFETCH_MINE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orders: [...state.orders, ...action.payload],
        orderSkip: state.orderSkip + 8,
      };

    case actions.ORDER_CANT_FETCH:
      return {
        ...state,
        canFetchMore: false,
      };
    default:
      return state;
  }
};

export default orderReducer;
