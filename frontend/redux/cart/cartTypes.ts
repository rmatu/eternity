export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";
export const CART_SAVE_SHIPPING_ADDRESS = "CART_SAVE_SHIPPING_ADDRESS";
export const CART_SAVE_PAYMENT_METHOD = "CART_SAVE_PAYMENT_METHOD";
export const CART_EMPTY = "CART_EMPTY";

export interface CartAddItem {
  type: typeof CART_ADD_ITEM;
  payload: {
    productId: string;
    qty: number;
  };
}

export interface CartRemoveItem {
  type: typeof CART_REMOVE_ITEM;
}

export interface CartSaveShippingAddress {
  type: typeof CART_SAVE_SHIPPING_ADDRESS;
}

export interface CartSavePaymentMethod {
  type: typeof CART_SAVE_PAYMENT_METHOD;
}

export interface CartEmpty {
  type: typeof CART_EMPTY;
}

interface CartItem {
  productId: string;
  qty: number;
}

export interface CartState {
  items: CartItem[];
}

export type CartActionTypes =
  | CartAddItem
  | CartRemoveItem
  | CartSaveShippingAddress
  | CartSavePaymentMethod
  | CartEmpty;
