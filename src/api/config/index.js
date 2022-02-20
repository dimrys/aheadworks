import axios from "axios";

export const instance = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5/"
})