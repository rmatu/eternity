export const TOGGLE_NAVBAR = "TOGGLE_NAVBAR";
export const CLEAN_UP_NAVBAR = "CLEAN_UP_NAVBAR";
export const SET_VISIBILITY = "SET_VISIBILITY";

export interface SetVisibility {
  type: typeof SET_VISIBILITY;
  payload: boolean;
}
export interface ToggleNavbarAction {
  type: typeof TOGGLE_NAVBAR;
}

export interface CleanUpNavbarAction {
  type: typeof CLEAN_UP_NAVBAR;
}

export interface NavbarState {
  open: boolean;
  visible?: boolean;
}

export type NavbarActionTypes =
  | ToggleNavbarAction
  | CleanUpNavbarAction
  | SetVisibility;
