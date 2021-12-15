import { CartAction } from "redux/actions/cardAction";
import { ActionsType } from "redux/actionsTypes";
import { IProduct } from "types";

export const addToCart = (payLoad: IProduct): CartAction => {
  return {
    type: ActionsType.ADD_TO_CART,
    payLoad,
  };
};

export const removeFromCart = (payLoad: string): CartAction => {
  return {
    type: ActionsType.REMOVE_FROM_CART,
    payLoad,
  };
};

export const clearCart = (): CartAction => {
  return {
    type: ActionsType.CLEAR_CART,
  };
};
