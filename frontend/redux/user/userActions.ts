import axios from "axios";
import * as userActions from "./userTypes";

export const signin = (email, password) => async (dispatch) => {
  dispatch({
    type: userActions.USER_SIGNIN_REQUEST,
    payload: { email, password },
  });
  try {
    const { data } = await axios.post("/api/users/signin", { email, password });
    dispatch({ type: userActions.USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
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
