import { setWeather } from './weather.js';
import './style.css'; 

// 1. Grab the search elements from the DOM
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');

// 2. The Event Listener (The Click Trigger)
searchBtn.addEventListener('click', () => {
    // Read the text out of the input box
    const city = cityInput.value.trim(); 
    
    if (city) {
        // Feed the user's text into your state machine!
        setWeather(city);
    }
});

// Kick off the app with a default location so it isn't blank on load
setWeather('London');