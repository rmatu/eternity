export const ORDER_CREATE_REQUEST = "ORDER_CREATE_REQUEST";
export const ORDER_CREATE_SUCCESS = "ORDER_CREATE_SUCCESS";
export const ORDER_CREATE_FAIL = "ORDER_CREATE_FAIL";

export const ORDER_PAY_REQUEST = "ORDER_PAY_REQUEST";
export const ORDER_PAY_SUCCESS = "ORDER_PAY_SUCCESS";
export const ORDER_PAY_FAIL = "ORDER_PAY_FAIL";

export const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST";
export const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS";
export const ORDER_DETAILS_FAIL = "ORDER_DETAILS_FAIL";

export const ORDER_MINE_LIST_REQUEST = "ORDER_MINE_LIST_REQUEST";
export const ORDER_MINE_LIST_SUCCESS = "ORDER_MINE_LIST_SUCCESS";
export const ORDER_MINE_LIST_FAIL = "ORDER_MINE_LIST_FAIL";

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

export interface OrderState {
  loading: boolean;
  error: string | null;
}

export type OrderActionTypes =
  | OrderCreateRequest
  | OrderCreateSuccess
  | OrderCreateFail;
