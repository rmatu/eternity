import { Dispatch } from "redux";
import { AppActions } from "../actions";
import { AppState } from "../rootReducer";
import { localStorageNames } from "../../constants";

import * as actions from "./favoritesTypes";

export const addToFavorites = (productId: string) => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState
) => {
  const items = getState().favorites.items;
  const existItem = items.find((id) => id === productId);

  if (existItem) {
    const newItems = items.filter((id) => id !== productId);

    dispatch({
      type: actions.FAVORITES_ADD_ITEM,
      payload: newItems,
    });
    return;
  }

  dispatch({
    type: actions.FAVORITES_ADD_ITEM,
    payload: [...items, productId],
  });
  localStorage.setItem(localStorageNames.FAVORITES, JSON.stringify(getState().favorites.items));
};

export const removeFromFavorites = (productId: string) => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState
) => {
  const items = getState().favorites.items;
  const fileteredItems = items.filter((el) => el !== productId);

  dispatch({
    type: actions.FAVORITES_REMOVE_ITEM,
    payload: fileteredItems,
  });
  localStorage.setItem(localStorageNames.FAVORITES, JSON.stringify(getState().favorites.items));
};
