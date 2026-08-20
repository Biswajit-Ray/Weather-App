// No imports needed here either!

export function renderUI(weatherData) {
    // Safety check: Do not render if data is missing or failed to fetch
    if (!weatherData) return;

    // Target the DOM Nodes
    const displayElement = document.getElementById('weather-display');
    const locationName = document.getElementById('location-name');
    const temperature = document.getElementById('temperature');
    const condition = document.getElementById('condition');
    const description = document.getElementById('description');
    
    const feelsLike = document.getElementById('feels-like');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');

    // Map the data
    locationName.textContent = weatherData.address;
    
    if (weatherData.currentCondition) {
        temperature.textContent = `${weatherData.currentCondition.temp}°`;
        condition.textContent = weatherData.currentCondition.conditions;
    }
    
    description.textContent = weatherData.description;

    if (feelsLike) feelsLike.textContent = `${weatherData.feelsLike}°`;
    if (humidity) humidity.textContent = `${weatherData.humidity}%`;
    if (windSpeed) windSpeed.textContent = `${weatherData.windSpeed} mph`;

    // Reveal the UI
    displayElement.classList.remove('hidden');
}