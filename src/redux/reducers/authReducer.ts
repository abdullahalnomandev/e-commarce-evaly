import { AuthAction } from "redux/actions/authAction";
import { IAuthData } from "./../../types";
import { ActionsType } from "./../actionsTypes";

const authReducer = (
  state: IAuthData | null = null,
  action: AuthAction
): IAuthData | null => {
  switch (action.type) {
    case ActionsType.LOGIN: {
      return action.payLoad;
    }

    case ActionsType.LOGOUT: {
      return null;
    }

    default:
      return state;
  }
};

export default authReducer;
