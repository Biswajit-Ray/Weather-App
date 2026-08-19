export const renderUI = (weatherData) => {
    // 1. Target the DOM Nodes
    const displayElement = document.getElementById('weather-display');
    const locationName = document.getElementById('location-name');
    const temperature = document.getElementById('temperature');
    const condition = document.getElementById('condition');
    const description = document.getElementById('description');

    // 2. Safety check: Do not render if data is missing
    if (!weatherData) return;

    // 3. Map the data
    locationName.textContent = weatherData.address;
    
    // Visual Crossing stores the actual metrics inside currentCondition
    if (weatherData.currentCondition) {
        temperature.textContent = `${weatherData.currentCondition.temp}°`;
        condition.textContent = weatherData.currentCondition.conditions;
    }
    
    description.textContent = weatherData.description;

    // 4. Reveal the UI by removing the CSS hidden class
    displayElement.classList.remove('hidden');
};