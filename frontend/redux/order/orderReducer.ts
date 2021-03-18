import { OrderActionTypes, OrderState } from "./orderTypes";
import * as actions from "./orderTypes";

const orderDefaultState: OrderState = {
  orders: [],
  loading: false,
  error: null,
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
        orders: action.payload,
      };

    case actions.ORDER_MINE_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
