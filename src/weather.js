// No imports needed here anymore!

const API_Key = '6VCWQWX69B66FFVUU8QFKMHLT';

export async function getWeather(location = 'London') {
    const apiURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_Key}`;
    
    try {
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error('Weather data not found');
        const data = await response.json();

        // Return the clean data object directly
        return {
            address: data.address,
            latitude: data.latitude,
            longitude: data.longitude,
            timezone: data.timezone,
            currentCondition: data.currentConditions,
            description: data.description,
            feelsLike: data.currentConditions.feelslike,
            humidity: data.currentConditions.humidity,
            windSpeed: data.currentConditions.windspeed
        };
    } catch(error) {
        console.log('There was an error: ' + error.message);
        return null;
    }
}