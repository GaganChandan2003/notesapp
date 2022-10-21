import { LOGINR, LOGINS, LOGINF, REGF, REGR, REGS, LOGOUT } from "./action.types";
let token = localStorage.getItem("token");
const intialState = {
    "isLoading": false,
    "isError": false,
    "token": token,
    "isAuth": !!token

}

export const reducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case REGR:
            {
                return { ...state, isLoading: true, isError: false };
            }
        case REGS:
            {
                return { ...state, isLoading: false, isError: false };
            }
        case REGF:
            {
                return { ...state, isLoading: false, isError: true };
            }
        case LOGINR:
            {
                return { ...state, isLoading: true, isError: false };
            }
        case LOGINS:
            {
                if (payload) {
                    localStorage.setItem("token", payload);
                }
                return {
                    ...state, token: payload, isLoading: false, isError: false, isAuth: true,
                };
            }
        case LOGINF:
            {
                return { ...state, isLoading: false, isError: true };
            }
            case LOGOUT:
                {
                    localStorage.setItem("token", "");
                    return {...state,token:"",isAuth:false}
                }
        default:
            {
                return state;
            }
    }
}