import {getCurrentWeather} from "../../api/getCurrentWeather";
import {createNewNote} from "../../utils/createNewNote";
import {setIsFetching, setNewNote} from "./noteActions";
import {currentWeatherForNote} from "../../utils/currentWeatherForNote";

export const addNote = (noteText) => async dispatch => {
    try {
        dispatch(setIsFetching(true))
        const res = await getCurrentWeather()
        const weather = currentWeatherForNote(res.data)
        const newNote = createNewNote(noteText, weather)
        dispatch(setNewNote(newNote))
    } catch (e) {
        console.log(e)
    }
    finally {
        dispatch(setIsFetching(false))
    }
}