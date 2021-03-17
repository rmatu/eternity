import * as actions from "./favoritesTypes";
import { FavoritesState, FavoritesActionTypes } from "./favoritesTypes";
import { getLocalStorage } from "../../utils/helpers";
import { localStorageNames } from "../../constants";

const favoritesDefaultState: FavoritesState = {
  items: getLocalStorage(localStorageNames.FAVORITES),
};

const favoritesReducer = (state = favoritesDefaultState, action: FavoritesActionTypes) => {
  switch (action.type) {
    case actions.FAVORITES_ADD_ITEM:
      return {
        ...state,
        items: action.payload,
      };

    case actions.FAVORITES_REMOVE_ITEM:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default favoritesReducer;
