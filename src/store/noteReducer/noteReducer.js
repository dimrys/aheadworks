import {REMOVE_NOTE, SET_IS_FETCHING, SET_NEW_NOTE} from "./constants";

const initialState = {
    notes: [],
    isFetching: false,
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_NOTE:
            return {...state, notes: [action.newNote, ...state.notes]}
        case REMOVE_NOTE:
            return {...state, notes: state.notes.filter(note => note.id !== action.idNote)}
        case SET_IS_FETCHING:
            return {...state, ...action.payload}
        default:
            return state
    }
}