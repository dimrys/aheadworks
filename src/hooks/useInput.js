import {useState} from "react";
import {useDispatch} from "react-redux";
import {EXCESS_LENGTH_MESSAGE, KEY_ENTER, REQUIRED_MESSAGE} from "./constants";
import {EMPTY_STRING, MAX_LENGTH} from "../utils/constants";
import {addNote} from "../store/noteReducer/noteThunks";

export const useInput = (initialNote, initialError) => {
    const dispatch = useDispatch()

    const [note, setNote] = useState(initialNote)
    const [error, setError] = useState(initialError)

    const onInputChange = (event) => {
        let message = event.target.value
        if (message.length >= MAX_LENGTH) {
            setError(EXCESS_LENGTH_MESSAGE)
        } else {
            setError(null)
        }
        setNote(message)
    }

    const onInputKeyPress = (event) => {
        if (event.key === KEY_ENTER && !error && note) {
            dispatch(addNote(note))
            setNote(EMPTY_STRING)
        } else if (error) {
            setError(error)
        } else {
            setError(REQUIRED_MESSAGE)
        }
    }

    return {note, error, onInputChange, onInputKeyPress}
}