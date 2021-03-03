import { Dispatch } from "redux";
import { AppActions } from "../actions";
import { AppState } from "../rootReducer";
import { localStorageNames } from "../../constants";

import * as actions from "./favoritesTypes";

export const addToFavorites = (productId: string) => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState
) => {
  dispatch({
    type: actions.FAVORITES_ADD_ITEM,
    payload: productId,
  });
  localStorage.setItem(
    localStorageNames.FAVORITES,
    JSON.stringify(getState().favorites.items)
  );
};
