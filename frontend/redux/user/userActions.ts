import axios from "axios";
import { Dispatch } from "redux";
import { localStorageNames } from "../../constants";
import { AppActions } from "../actions";
import * as userActions from "./userTypes";

export const signin = (email: string, password: string) => async (
  dispatch: Dispatch<AppActions>
) => {
  dispatch({
    type: userActions.USER_SIGNIN_REQUEST,
  });
  try {
    const { data } = await axios.post("/api/users/signin", { email, password });
    dispatch({ type: userActions.USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem(localStorageNames.USER_INFO, JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: userActions.USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const register = (
  email: string,
  name: string,
  password: string
) => async (dispatch: Dispatch<AppActions>) => {
  try {
    const { data } = await axios.post("/api/users/register", {
      name,
      email,
      password,
    });
    dispatch({ type: userActions.USER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem(localStorageNames.USER_INFO, JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: userActions.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const cleanUp = () => ({
  type: userActions.USER_CLEAN_UP,
});
