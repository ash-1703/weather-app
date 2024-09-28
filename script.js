// OpenWeatherMap API key for authentication
const apiKey = "a9f6d0c308fb756cc9fed17da1364526";
// Base URL for the OpenWeatherMap API to get weather data
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Selecting DOM elements
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to fetch and display weather data for a given city
async function checkWeather(city) {
    if (!city) { // Check if the city name is not provided
        console.error("City name is undefined or empty");
        return; // Exit function if city name is invalid
    }

    try {
        // Fetch weather data from the API using the provided city name
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        // Handle cases where the city is not found (404 error)
        if (response.status == 404) {
            const errorElement = document.querySelector(".error");
            const weatherElement = document.querySelector(".weather");

            // Show error message and hide weather details
            if (errorElement) errorElement.style.display = "block";
            if (weatherElement) weatherElement.style.display = "none";
        } else {
            const data = await response.json();

            // If API response indicates a city not found, show alert and exit function
            if (data.cod === '404') {
                alert("City not found. Please enter a valid city name.");
                return;
            }

            // Updating UI elements with the weather data
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

            // Update the weather icon based on the current weather condition
            switch (data.weather[0].main) {
                case "Clouds":
                    weatherIcon.src = "images/clouds.png";
                    break;
                case "Clear":
                    weatherIcon.src = "images/clear.png";
                    break;
                case "Rain":
                    weatherIcon.src = "images/rain.png";
                    break;
                case "Drizzle":
                    weatherIcon.src = "images/drizzle.png";
                    break;
                case "Mist":
                    weatherIcon.src = "images/mist.png";
                    break;
                default:
                    weatherIcon.src = "images/default.png"; // Fallback icon
            }

            // Show the weather information and hide any error message
            const errorElement = document.querySelector(".error");
            const weatherElement = document.querySelector(".weather");

            if (errorElement) errorElement.style.display = "none";  // Hide error message
            if (weatherElement) weatherElement.style.display = "block";  // Show weather display
        }
    } catch (error) {
        // Log any errors that occur during the API request
        console.error("Error fetching weather data:", error);
    }
}

// Event listener for the search button click
searchBtn.addEventListener("click", () => {
    // Get the value from the search input box and trim any leading/trailing whitespace
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city); // Fetch and display weather data for the provided city
    } else {
        alert("Please enter a city name"); // Alert if the search box is empty
    }
});
