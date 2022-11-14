import { GETR, GETF, GETS, POSTR, POSTF, PATCHR, PATCHF, DELETER, DELETEF, DELETES, POSTS, PATCHS } from "./action.types";

const intialState = {
    "notes": [],
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