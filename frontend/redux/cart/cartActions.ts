import * as actions from "./cartTypes";

export const addToCart = (productId, qty = 1) => ({
  type: actions.CART_ADD_ITEM,
  payload: {
    productId,
    qty,
  },
});
