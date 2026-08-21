import './style.css'; 
import { getWeather } from './weather.js';
import { renderUI } from './UI.js';

console.log("Hello from index.js! The script is running.");

const searchBtn = document.getElementById('search-btn');
const unitConvertorBtn= document.getElementById('unitConvertor');
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

//Changes F to C or vice versa
unitConvertorBtn.addEventListener("click", ()=>{
    let list= document.querySelectorAll('[data-type]');
    
    list.forEach(element=>{ 
        
        let currentUnit = element.dataset.type;
        let currentValue= parseFloat(element.textContent);

        switch(currentUnit){
            case 'Fahrenheit':
                currentValue= ((currentValue-32)*5/9).toFixed(1);
                currentUnit= 'Celsius';
                element.innerHTML=`${currentValue}&degC`;
                element.dataset.type='Celsius';
            break;
            
            case 'Celsius':
                currentValue= (currentValue*9/5 + 32).toFixed(1);
                currentUnit='Fahrenheit';
                element.innerHTML=`${currentValue}&degF`;
                element.dataset.type='Fahrenheit';
            break;

            default :
            console.log('Something went wrong...');            
        }

    });
});

// Kick off the app on load
handleSearch('London');