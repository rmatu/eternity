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

export const checkIfFavorite = (productId: string, items: string[]): string => {
  const itemIsFavorite = items.find((id) => productId === id);
  if (itemIsFavorite) {
    return "#be6a15";
  } else {
    return "#fff";
  }
};
