import { IOrder } from "../../types";

export const ORDER_CREATE_REQUEST = "ORDER_CREATE_REQUEST";
export const ORDER_CREATE_SUCCESS = "ORDER_CREATE_SUCCESS";
export const ORDER_CREATE_FAIL = "ORDER_CREATE_FAIL";

export const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST";
export const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS";
export const ORDER_DETAILS_FAIL = "ORDER_DETAILS_FAIL";

export const ORDER_MINE_LIST_REQUEST = "ORDER_MINE_LIST_REQUEST";
export const ORDER_MINE_LIST_SUCCESS = "ORDER_MINE_LIST_SUCCESS";
export const ORDER_MINE_LIST_FAIL = "ORDER_MINE_LIST_FAIL";

export const ORDER_REFETCH_MINE_LIST_SUCCESS = "ORDER_REFETCH_MINE_LIST_SUCCESS";

export const ORDER_CANT_FETCH = "ORDER_CANT_FETCH";

export interface OrderCantFetch {
  type: typeof ORDER_CANT_FETCH;
}
export interface OrderRefetchMineListSuccess {
  type: typeof ORDER_REFETCH_MINE_LIST_SUCCESS;
  payload: IOrder[];
}
export interface OrderCreateRequest {
  type: typeof ORDER_CREATE_REQUEST;
}

export interface OrderCreateSuccess {
  type: typeof ORDER_CREATE_SUCCESS;
}

export interface OrderCreateFail {
  type: typeof ORDER_CREATE_FAIL;
  payload: string;
}

export interface OrderMineListRequest {
  type: typeof ORDER_MINE_LIST_REQUEST;
}
export interface OrderMineListSuccess {
  type: typeof ORDER_MINE_LIST_SUCCESS;
  payload: IOrder[];
}
export interface OrderMineListFail {
  type: typeof ORDER_MINE_LIST_FAIL;
  payload: string;
}

export interface OrderState {
  orders: IOrder[] | null;
  loading: boolean;
  error: string | null;
  orderSkip: number;
  orderLimit: number;
  canFetchMore: boolean;
}

export type OrderActionTypes =
  | OrderCreateRequest
  | OrderCreateSuccess
  | OrderCreateFail
  | OrderMineListRequest
  | OrderMineListSuccess
  | OrderCantFetch
  | OrderRefetchMineListSuccess
  | OrderMineListFail;
