import { getWeatherData } from "./api.js"
import { resetWeatherContent } from "./helper.js";

export const handleWeatherByGeolocation = () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    const success = async (pos) => {
        const crd = pos.coords;

        let api_key = 'e8f818963a0e493aaffbe5292f26947d'; 
        const responce = await fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&apiKey=${api_key} `
            )

            const result = await responce.json();
            
            const weather = await getWeatherData(result.features[0].properties.city);
            resetWeatherContent(result.features[0].properties.city, weather);
    }

    const error = (err) => {
        console.log(err.code + ' ' + err.message);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
}