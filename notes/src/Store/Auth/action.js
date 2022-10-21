import { REGF, REGR, REGS, LOGINS, LOGINR, LOGINF, LOGOUT } from "./action.types";
import axios from "axios";


const registerApi = (data) => (dispatch) => {
    return axios.post('https://gagannotesapp.herokuapp.com/user/register', {
        "username":data.username,
        "email": data.email,
        "password": data.password
    })
        .then((res) => dispatch({ type: REGS }))
        .catch((err) => dispatch({ type: REGF }))
}

const loginApi = (data) => (dispatch) => {
    dispatch({ type: LOGINR });
    return axios.post("https://gagannotesapp.herokuapp.com/user/login", {
        "email": data.email,
        "password": data.password
    })
        .then((res) => dispatch({ type: LOGINS, payload: res.data.token }))
        .catch((err) => dispatch({ type: LOGINF }));
}

const logoutApi=()=>(dispatch)=>
{
    return dispatch({type:LOGOUT});
}

export { registerApi, loginApi, logoutApi }