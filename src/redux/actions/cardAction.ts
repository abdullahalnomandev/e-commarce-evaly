import { ActionsType } from "redux/actionsTypes";
import { IProduct } from "types";

export const addToCart = (payLoad: IProduct) => {
  return {
    type: ActionsType.ADD_TO_CART,
    payLoad,
  };
};

export const removeFromCart = (payLoad: string) => {
  return {
    type: ActionsType.REMOVE_FROM_CART,
    payLoad,
  };
};

export const clearCart = () => {
  return {
    type: ActionsType.CLEAR_CART,
    payLoad: "",
  };
};

export type CartAction =
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeFromCart>
  | ReturnType<typeof clearCart>;
