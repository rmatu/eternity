export const FAVORITES_ADD_ITEM = "FAVORITES_ADD_ITEM";
export const FAVORITES_REMOVE_ITEM = "FAVORITES_REMOVE_ITEM";
export const FAVORITES_EMPTY = "FAVORITES_EMPTY";

export interface FavoritesAddItem {
  type: typeof FAVORITES_ADD_ITEM;
  payload: string;
}

export interface FavoritesRemoveItem {
  type: typeof FAVORITES_REMOVE_ITEM;
  payload: string;
}

export interface FavoritesEmpty {
  type: typeof FAVORITES_EMPTY;
}

export interface FavoritesState {
  items: string[];
}

export type FavoritesActionTypes =
  | FavoritesAddItem
  | FavoritesRemoveItem
  | FavoritesEmpty;
