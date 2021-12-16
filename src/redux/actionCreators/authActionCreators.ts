import { Dispatch } from "react";
import { CartAction } from "redux/actions/cardAction";
import { ActionsType } from "redux/actionsTypes";
import AuthService from "services/AuthService";
import { AuthAction } from "./../actions/authAction";

interface IAuth {
  email: string;
  passWord: string;
}

export const login = (payLoad: IAuth) => {
  return (dispatch: Dispatch<AuthAction>) => {
    AuthService.login(payLoad).then((data) => {
      dispatch({
        type: ActionsType.LOGIN,
        payLoad: data,
      });
    });
  };
};

// export const login =
//   (payLoad: { email: string; password: string }) => (disPatch: Dispatch<AuthAction>) => {

//   AuthService.login(payLoad).then((data) => {
//       disPatch({
//         type: ActionsType.LOGIN,
//         payLoad: data,
//       });
//     });
//   };

export const logout = (): CartAction => {
  return {
    type: ActionsType.CLEAR_CART,
  };
};
