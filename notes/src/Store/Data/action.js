import axios from 'axios';
import { GETR, GETF, GETS, POSTR, POSTS, POSTF, PATCHR, PATCHS, PATCHF, DELETER, DELETES, DELETEF, GETONER, GETONES, GETONEF } from './action.types';

const getApi = () => (dispatch) => {
    let token = localStorage.getItem("token")
    dispatch({ type: GETR })
    axios.get('https://spoidy-notes.onrender.com/notes',
        {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then((res) => dispatch({ type: GETS, payload: res.data }))
        .catch((err) => dispatch({ type: GETF }))
}

const addApi = (data) => (dispatch) => {
    let token = localStorage.getItem("token")
    dispatch({ type: POSTR })
    return axios.post("https://spoidy-notes.onrender.com/notes/create", data, {
        headers: {
            Authorization: "Bearer " + token
        }
    }).then((res) => dispatch({ type: POSTS }))
        .catch((err) => dispatch({ type: POSTF }))
}

const getOne = (noteId) => (dispatch) => {
    let token = localStorage.getItem("token")
    dispatch({ type: GETONER })
    axios.get(`https://spoidy-notes.onrender.com/notes/${noteId}`,
        {
            headers: {
                Authorization: "Bearer "+token
            }
        }).then((res)=>dispatch({type:GETONES,payload:res.data}))
        .catch((err)=>dispatch({type:GETONEF}))
}

const editApi = (id, data) => (dispatch) => {
    let token = localStorage.getItem("token");
    dispatch({ type: PATCHR })
    return axios.patch(`https://spoidy-notes.onrender.com/notes/${id}/edit`, data, {
        "headers": {
            Authorization: "Bearer " + token
        }
    }).then((res) => dispatch({ type: PATCHS }))
        .catch((err) => dispatch({ type: PATCHF }))
}

const deleteApi = (id) => (dispatch) => {
    let token = localStorage.getItem("token");
    dispatch({ type: DELETER });
    return axios.delete(`https://spoidy-notes.onrender.com/notes/${id}/delete`,
        {
            "headers": {
                Authorization: "Bearer " + token
            }
        })
        .then((res) => dispatch({ type: DELETES }))
        .catch((err) => dispatch({ type: DELETEF }))
}

export { getApi, addApi, editApi,getOne, deleteApi }