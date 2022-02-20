import {useDispatch, useSelector} from "react-redux";
import {selectNotes} from "../../store/selectors/selectNotes";
import {removeNote} from "../../store/noteReducer/noteActions";
import style from "./NotesList.module.css"
import {getIcon} from "../../utils/getIcon";
import {Note} from "./Note/Note";
import {selectIsFetching} from "../../store/selectors/selectIsFetching";
import {Loader} from "../Loader/Loader";
import {useCallback} from "react";

export const NotesList = () => {
    const dispatch = useDispatch()

    const notes = useSelector(selectNotes)
    const isFetching = useSelector(selectIsFetching)

    const onClickButtonRemove = useCallback((idNote) => {
        dispatch(removeNote(idNote))
    }, [dispatch])

    return (
        <>
            {
                !isFetching
                    ? <div className={style.notes__box}>
                        {notes.map(note => {
                            const {iconWeather, ...spread} = note
                            const icon = getIcon(iconWeather)
                            return <Note
                                key={note.id}
                                icon={icon}
                                note={spread}
                                onClickButtonRemove={onClickButtonRemove}
                            />
                        })}
                    </div>
                    : <Loader/>
            }
        </>

    )
}