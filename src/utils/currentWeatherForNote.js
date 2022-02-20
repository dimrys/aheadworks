import {convertFromKelvinToCelsius} from "./convertTemp";

export const currentWeatherForNote = (weatherResponse) => {
    const {main, weather} = weatherResponse
    const tempWeather = convertFromKelvinToCelsius(main.temp)
    const {icon: iconWeather, description: descriptionWeather} = weather[0]

    return {
        tempWeather,
        iconWeather,
        descriptionWeather
    }
}