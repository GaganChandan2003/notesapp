import { GETR, GETF, GETS, GETONER, GETONES, GETONEF, POSTR, POSTF, PATCHR, PATCHF, DELETER, DELETEF, DELETES, POSTS, PATCHS } from "./action.types";

const intialState = {
    "notes": [],
    "single_note": {},
    "isLoading": false,
    "isError": false

}

export const notesReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case GETR:
            {
                return { ...state, isLoading: true, isError: false }
            }
        case GETS:
            {

                return { ...state, notes: payload, isLoading: false, isError: false }
            }
        case GETF:
            {
                return { ...state, isLoading: false, isError: true }
            }
        case GETONER:
            {
                return { ...state, isLoading: true, isError: false }
            }
        case GETONES:
            {
                return { ...state, isLoading: false, isError: false, single_note: payload }
            }
        case GETONEF:
            {
                return { ...state, isLoading: false, isError: true }
            }
        case POSTR:
            {
                return { ...state, isLoading: true, isError: false }
            }
        case POSTS:
            {
                return { ...state, isLoading: false, isError: false }
            }
        case POSTF:
            {
                return { ...state, isLoading: false, isError: true }
            }
        case PATCHR:
            {
                return { ...state, isLoading: true, isError: false }
            }
        case PATCHS:
            {
                return { ...state, isLoading: false, isError: false }
            }
        case PATCHF:
            {
                return { ...state, isLoading: false, isError: true }
            }
        case DELETER:
            {
                return { ...state, isLoading: true, isError: false }
            }
        case DELETES:
            {
                return { ...state, isLoading: false, isError: false }
            }
        case DELETEF:
            {
                return { ...state, isLoading: false, isError: true }
            }
        default:
            {
                return state;
            }
    }
}