const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key
const getWeatherButton = document.getElementById('getWeather');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

getWeatherButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then(data => {
                cityName.textContent = `Weather in ${data.name}`;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                description.textContent = `Condition: ${data.weather[0].description}`;
            })
            .catch(error => {
                cityName.textContent = '';
                temperature.textContent = '';
                description.textContent = error.message;
            });
    } else {
        alert('Please enter a city name!');
    }
});
