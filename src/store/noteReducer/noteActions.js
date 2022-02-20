import {REMOVE_NOTE, SET_IS_FETCHING, SET_NEW_NOTE} from "./constants";

export const setNewNote = (newNote) => ({type: SET_NEW_NOTE, newNote})
export const removeNote = (idNote) => ({type: REMOVE_NOTE, idNote})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, payload: {isFetching}})
