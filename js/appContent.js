import { capitalizeFirstLetter, directionOfWind } from "./helper.js";

export const createContent = (data) => {
    const main = document.createElement('main');
    const section = document.createElement('section');
    const container = document.createElement('div');
    const inner = document.createElement('div');
    const iconBlock = document.createElement('img');
    const temperature = document.createElement('h2');
    const units = document.createElement('span');
    const description = document.createElement('p');
    const weatherInfo = document.createElement('div');
    const weatherInfoList = document.createElement('ul');
    const weatherInfoWind = document.createElement('li');
    const weatherInfoPressure = document.createElement('li');
    const weatherInfoHumidity = document.createElement('li');
    const weatherInfoClouds = document.createElement('li');

    section.classList.add('weather');
    container.classList.add('container', 'weather_container');
    inner.classList.add('weather_inner');
    iconBlock.classList.add('weather_icon');
    temperature.classList.add('weather_temperature');
    units.classList.add('weather_units');
    description.classList.add('weather_description');
    weatherInfo.classList.add('weather-info');
    weatherInfoList.classList.add('weather-info_list');
    weatherInfoWind.classList.add('weather-info_item');
    weatherInfoHumidity.classList.add('weather-info_item');
    weatherInfoPressure.classList.add('weather-info_item');
    weatherInfoClouds.classList.add('weather-info_item');
    

    temperature.textContent = Math.floor(data.main.temp);
    description.textContent = capitalizeFirstLetter(data.weather[0].description);
    iconBlock.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    units.textContent = 'o'

    const createWeatherItemTitle = (text) => {
        const span = document.createElement('span');
        span.textContent = text;

        return span;
    }

    const createWeatherItemContent = (text) => {
        const p = document.createElement('p');
        p.textContent = text;

        return p;
    }

    weatherInfoWind.append(
        createWeatherItemTitle('Wind'),
        createWeatherItemContent(data.wind.speed + ' m/s ' + directionOfWind(data.wind.deg))
    );

    weatherInfoPressure.append(
        createWeatherItemTitle('Pressure'),
        createWeatherItemContent(data.main.pressure + ' mm Hg')
    );

    weatherInfoHumidity.append(
        createWeatherItemTitle('Humidity'),
        createWeatherItemContent(data.main.humidity + ' %')
    );

    weatherInfoClouds.append(
        createWeatherItemTitle('Clouds'),
        createWeatherItemContent(data.clouds.all + ' %')
    );

    main.append(section);
    section.append(container);
    container.append(inner, description, weatherInfo);
    inner.append(iconBlock, temperature, units);
    weatherInfo.append(weatherInfoList);
    weatherInfoList.append(
        weatherInfoWind,
        weatherInfoPressure,
        weatherInfoHumidity,
        weatherInfoClouds
    );

    return main;
}