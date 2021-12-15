import { CartAction } from "redux/actions/cardAction";
import { IProduct } from "types";
import { ActionsType } from "./../actionsTypes";

const cartReducer = (state: IProduct[] = [], action: CartAction) => {
  switch (action.type) {
    case ActionsType.ADD_TO_CART: {
      return [...state, action.payLoad];
    }

    case ActionsType.REMOVE_FROM_CART: {
      const newState = state.filter((item) => item._id !== action.payLoad);
      return newState;
    }

    case ActionsType.CLEAR_CART: {
      return [];
    }

    default:
      return {
        state,
      };
  }
};

export default cartReducer;
