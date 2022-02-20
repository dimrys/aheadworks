import {KELVIN_ZERO} from "./constants";

export function convertFromKelvinToCelsius (tempKelvin) {
    return Math.round(tempKelvin - KELVIN_ZERO)
}