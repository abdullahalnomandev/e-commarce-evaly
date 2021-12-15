import { ActionsType } from "redux/actionsTypes";
import { IProduct } from "types";

interface addToCartAction {
  type: ActionsType.ADD_TO_CART;
  payLoad: IProduct;
}
interface removeFromCartAction {
  type: ActionsType.ADD_TO_CART;
  payLoad: string;
}

interface clearCartAction {
  [x: string]: string | undefined;
  type: ActionsType.CLEAR_CART;
}

export type CartAction =
  | addToCartAction
  | removeFromCartAction
  | clearCartAction;
