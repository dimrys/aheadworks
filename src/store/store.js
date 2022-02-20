import {applyMiddleware, combineReducers, createStore} from "redux";
import {notesReducer} from "./noteReducer/noteReducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localStorageUtils";


const rootReducer = combineReducers({
    notes: notesReducer,
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        notes: store.getState().notes
    })
})