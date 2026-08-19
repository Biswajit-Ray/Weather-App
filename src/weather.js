import { renderUI } from './UI.js';

const state = {
    API_Key: '6VCWQWX69B66FFVUU8QFKMHLT',
    location: 'London',
    isLoading: false,
    weatherData: null,
    error: null,

    setweatherState(newData){
        this.weatherData = newData;
        renderUI(this.weatherData); 
    }
};

const setWeather = async function(location = 'London') {
    const apiURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${state.API_Key}`;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        const newData = {
            address: data.address,
            latitude: data.latitude,
            longitude: data.longitude,
            timezone: data.timezone,
            currentCondition: data.currentConditions,
            description: data.description,
        };
        state.location= data.address;

        state.setweatherState(newData);
    } catch(error) {
        console.log('There was an error: ' + error.message);
    }
};

export {state, setWeather};