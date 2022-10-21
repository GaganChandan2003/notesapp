import { GETR, GETF, GETS } from "./action.types";

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
        default:
            {
                return state;
            }
    }
}