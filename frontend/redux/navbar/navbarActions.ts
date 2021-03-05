import * as actions from "./navbarTypes";

export const toggleNavbar = () => ({
  type: actions.TOGGLE_NAVBAR,
});

export const cleanUp = () => ({
  type: actions.CLEAN_UP_NAVBAR,
});

export const setVisibility = (visibility: boolean) => ({
  type: actions.SET_VISIBILITY,
  payload: visibility,
});
