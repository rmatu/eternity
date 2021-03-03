import * as actions from "./favoritesTypes";
import { FavoritesState, FavoritesActionTypes } from "./favoritesTypes";
import { getLocalStorage } from "../../utils/helpers";
import { localStorageNames } from "../../constants";

const favoritesDefaultState: FavoritesState = {
  items: getLocalStorage(localStorageNames.FAVORITES),
};

const favoritesReducer = (
  state = favoritesDefaultState,
  action: FavoritesActionTypes
) => {
  switch (action.type) {
    case actions.FAVORITES_ADD_ITEM:
      const existItem = state.items.find(
        (productId) => productId === action.payload
      );
      // If item exist remove it from the items list
      if (existItem) {
        const filteredList = state.items.filter(
          (productId) => productId !== action.payload
        );
        return {
          ...state,
          items: [...filteredList],
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }

    default:
      return state;
  }
};

export default favoritesReducer;
