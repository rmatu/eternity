export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

export const USER_SIGNIN_REQUEST = "USER_SIGNIN_REQUEST";
export const USER_SIGNIN_SUCCESS = "USER_SIGNIN_SUCCESS";
export const USER_SIGNIN_FAIL = "USER_SIGNIN_FAIL";

export const USER_SIGNOUT = "USER_SIGNOUT";

export const USER_DETAILS_REQUEST = "USER_DETAILS_REQUEST";
export const USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS";
export const USER_DETAILS_FAIL = "USER_DETAILS_FAIL";

export const USER_UPDATE_PROFILE_REQUEST = "USER_UPDATE_PROFILE_REQUEST";
export const USER_UPDATE_PROFILE_SUCCESS = "USER_UPDATE_PROFILE_SUCCESS";
export const USER_UPDATE_PROFILE_FAIL = "USER_UPDATE_PROFILE_FAIL";
export const USER_UPDATE_PROFILE_RESET = "USER_UPDATE_PROFILE_RESET";

export const USER_CLEAN_UP = "USER_CLEAN_UP";

export interface UserCleanUp {
  type: typeof USER_CLEAN_UP;
}

export interface UserSigninRequest {
  type: typeof USER_SIGNIN_REQUEST;
}
export interface UserSigninSuccess {
  type: typeof USER_SIGNIN_SUCCESS;
  payload: User;
}
export interface UserSigninFail {
  type: typeof USER_SIGNIN_FAIL;
  payload: string;
}
export interface UserRegisterRequest {
  type: typeof USER_REGISTER_REQUEST;
}
export interface UserRegisterSuccess {
  type: typeof USER_REGISTER_SUCCESS;
  payload: User;
}
export interface UserRegisterFail {
  type: typeof USER_REGISTER_FAIL;
  payload: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export type UserActionTypes =
  | UserSigninRequest
  | UserSigninSuccess
  | UserSigninFail
  | UserRegisterRequest
  | UserRegisterSuccess
  | UserRegisterFail
  | UserCleanUp;
