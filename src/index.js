import './style.css'; 
import { getWeather } from './weather.js';
import { renderUI } from './UI.js';

const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');

// A helper function to manage the workflow
async function handleSearch(city) {
    if (!city) return;
    
    // 1. Ask weather.js for the data (wait for it to finish)
    const weatherData = await getWeather(city);
    
    // 2. If we successfully got data, hand it to UI.js
    if (weatherData) {
        renderUI(weatherData);
    }
}

// Click Trigger
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim(); 
    handleSearch(city);
});

// Enter Key Trigger
cityInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const city = cityInput.value.trim();
        handleSearch(city);
    }
});

// Kick off the app on load
handleSearch('London');