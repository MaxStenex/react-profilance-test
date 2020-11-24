import { UserActions, UserActionTypes } from "./actions";

export enum Roles {
  User = "user",
  Admin = "admin",
  Guest = "guest",
}

export interface UserStateType {
  login: string | null;
  password: string | null;
  role: Roles;
}

const initialState: UserStateType = {
  login: null,
  password: null,
  role: Roles.Guest,
};

export const userReducer = (state = initialState, action: UserActions): UserStateType => {
  switch (action.type) {
    case UserActionTypes.SET_USER: {
      return {
        login: action.payload.login,
        password: action.payload.password,
        role: action.payload.role,
      };
    }
    case UserActionTypes.LOGOUT: {
      return {
        login: null,
        password: null,
        role: Roles.Guest,
      };
    }

    default: {
      return state;
    }
  }
};
