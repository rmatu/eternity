export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";
export const CART_SAVE_SHIPPING_ADDRESS = "CART_SAVE_SHIPPING_ADDRESS";
export const CART_SAVE_PAYMENT_METHOD = "CART_SAVE_PAYMENT_METHOD";
export const CART_EMPTY = "CART_EMPTY";
export const CART_ADD_QTY = "CART_ADD_QTY";
export const CART_SUB_QTY = "CART_SUB_QTY";
export const CART_CHANGE_STEP = "CART_CHANGE_STEP";

export interface CartChangeStep {
  type: typeof CART_CHANGE_STEP;
  payload: number;
}
export interface CartAddQty {
  type: typeof CART_ADD_QTY;
  payload: string;
}
export interface CartSubQty {
  type: typeof CART_SUB_QTY;
  payload: string;
}

export interface CartAddItem {
  type: typeof CART_ADD_ITEM;
  payload: {
    productId: string;
    qty: number;
  };
}

export interface CartRemoveItem {
  type: typeof CART_REMOVE_ITEM;
  payload: string;
}

export interface CartSaveShippingAddress {
  type: typeof CART_SAVE_SHIPPING_ADDRESS;
  payload: ShippingAddress;
}

export interface CartSavePaymentMethod {
  type: typeof CART_SAVE_PAYMENT_METHOD;
}

export interface CartEmpty {
  type: typeof CART_EMPTY;
}

export interface CartItem {
  productId: string;
  qty: number;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}
export interface CartState {
  items: CartItem[];
  step: number;
  shippingAddress: ShippingAddress;
}

export type CartActionTypes =
  | CartAddItem
  | CartRemoveItem
  | CartSaveShippingAddress
  | CartSavePaymentMethod
  | CartAddQty
  | CartSubQty
  | CartChangeStep
  | CartEmpty;
