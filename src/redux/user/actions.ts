import { Roles, UserStateType } from "./reducer";

export enum UserActionTypes {
  SET_USER = "SET_USER",
  LOGOUT = "LOGOUT",
}

export type UserActions = SetUserType | LogoutType;

interface SetUserType {
  type: UserActionTypes.SET_USER;
  payload: UserStateType;
}

export const setUser = (login: string, password: string, role: Roles): SetUserType => {
  return {
    type: UserActionTypes.SET_USER,
    payload: {
      login,
      password,
      role,
    },
  };
};

interface LogoutType {
  type: UserActionTypes.LOGOUT;
}

export const logout = (): LogoutType => {
  return {
    type: UserActionTypes.LOGOUT,
  };
};
