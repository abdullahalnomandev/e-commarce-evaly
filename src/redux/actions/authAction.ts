import { ActionsType } from "redux/actionsTypes";
import { IAuthData } from "./../../types";

interface loginAction {
  type: ActionsType.LOGIN;
  payLoad: IAuthData;
}
interface logoutAction {
  type: ActionsType.LOGOUT;
}

export type CartAction = loginAction | logoutAction;
