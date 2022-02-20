import style from './Note.module.css'
import {memo} from "react";

export const Note = memo(({icon, note, onClickButtonRemove}) => {
    const {id, noteText, descriptionWeather, tempWeather, created} = note

    const onClickRemove = () => {
        onClickButtonRemove(id)
    }

    return (
        <div className={style.note}>
            <div className={style.text}>
                <p>{noteText}</p>
            </div>
            <div className={style.weather}>
                <img className={style.icon} src={icon} alt={descriptionWeather}/>
                <span className={style.temp}>{tempWeather}&#8451;</span>
                <span>{created.dateCreated}</span>
                <time>{created.timeCreated}</time>
            </div>
            <button className={style.btn} onClick={onClickRemove}>X</button>
        </div>
    )
})