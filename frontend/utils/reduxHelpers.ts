import { addToCart } from "../redux/cart/cartActions";
import { addToFavorites } from "../redux/favorites/favoritesActions";
import { localStorageNames } from "../constants";

export const dispatchToPlace = (productId, localStorageName, dispatch) => {
  switch (localStorageName) {
    case localStorageNames.CART_ITEMS:
      {
        dispatch(addToCart(productId));
      }
      break;
    case localStorageNames.FAVORITES:
      {
        dispatch(addToFavorites(productId));
      }
      break;
    default:
      return;
  }
};
