import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./Auth/reducer";
import { notesReducer } from "./Data/reducer";
const rootReducer=combineReducers({
 reducer,
 notesReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

