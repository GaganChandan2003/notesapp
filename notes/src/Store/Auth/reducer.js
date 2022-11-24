import { LOGINR, LOGINS, LOGINF, REGF, REGR, REGS, LOGOUT } from "./action.types";
let token = localStorage.getItem("token");
let username=localStorage.getItem("username");
const intialState = {
    "isLoading": false,
    "isError": false,
    "token": token,
    "isAuth": !!token,
    "username": username

}

export const reducer = (state = intialState, { type, payload, username }) => {
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
                console.log(payload)
                if (payload) {
                    localStorage.setItem("token", payload);
                    localStorage.setItem("username", username);
                }
                return {
                    ...state, token: payload, isLoading: false, isError: false, isAuth: true, username: username
                };
            }
        case LOGINF:
            {
                return { ...state, isLoading: false, isError: true };
            }
        case LOGOUT:
            {
                localStorage.setItem("token", "");
                
                return { ...state, token: "", isAuth: false }
            }
        default:
            {
                return state;
            }
    }
}