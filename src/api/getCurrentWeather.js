import {instance} from "./config";


export const getCurrentWeather = (city = "Minsk") => {
    return instance.get(`weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
}
