export const getWeatherData = async (city) => {
    let api_key = '3364e8cf54b7b13dd915eb472d28d343';
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&lang=en&units=metric`
            );
            return await response.json();
    } catch (error) {
        console.error(error);
    }
}

