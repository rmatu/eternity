import * as actions from "./navbarTypes";
import { NavbarState, NavbarActionTypes } from "./navbarTypes";

const navbarDefaultState: NavbarState = {
  open: false,
  visible: false,
};

const navbarReducer = (
  state = navbarDefaultState,
  action: NavbarActionTypes
) => {
  switch (action.type) {
    case actions.TOGGLE_NAVBAR:
      return {
        ...state,
        open: !state.open,
      };
    case actions.CLEAN_UP_NAVBAR:
      return {
        ...state,
        open: false,
      };
    case actions.SET_VISIBILITY:
      return {
        ...state,
        visible: action.payload,
      };
    default:
      return state;
  }
};

export default navbarReducer;
