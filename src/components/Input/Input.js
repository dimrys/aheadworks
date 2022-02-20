import style from './Input.module.css'

import {useInput} from "../../hooks/useInput";

import {EMPTY_STRING} from "../../utils/constants";
import {useSelector} from "react-redux";
import {selectIsFetching} from "../../store/selectors/selectIsFetching";

export const Input = () => {
    const isFetching = useSelector(selectIsFetching)

    const {note, error, onInputChange, onInputKeyPress} = useInput(EMPTY_STRING, null)

    const inputStile = `${style.input} ${error ? style.error : EMPTY_STRING}`

    return (
        <div>
            <input
                className={inputStile}
                placeholder='Add note...'
                value={note}
                onChange={onInputChange}
                onKeyPress={onInputKeyPress}
                disabled={isFetching}
            />
            {error && <span className={style.error__message}>{error}</span>}

        </div>
    )
}
