// // Optional: Call checkWeather with a default city, or remove this line

const apiKey = "a9f6d0c308fb756cc9fed17da1364526";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to check weather for a given city
async function checkWeather(city) {
    if (!city) {
        console.error("City name is undefined or empty");
        return;
    }
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (response.status == 404) {
            const errorElement = document.querySelector(".error");
            const weatherElement = document.querySelector(".weather");

            if (errorElement) errorElement.style.display = "block";  // Show error message
            if (weatherElement) weatherElement.style.display = "none";  // Hide weather display
        } else {
            const data = await response.json();

            if (data.cod === '404') {
                alert("City not found. Please enter a valid city name.");
                return;
            }

            // Updating the UI elements with fetched data
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

            // Change the weather icon based on the condition
            if (data.weather[0].main === "Clouds") {
                weatherIcon.src = "images/clouds.png";
            } else if (data.weather[0].main === "Clear") {
                weatherIcon.src = "images/clear.png";
            } else if (data.weather[0].main === "Rain") {
                weatherIcon.src = "images/rain.png";
            } else if (data.weather[0].main === "Drizzle") {
                weatherIcon.src = "images/drizzle.png";
            } else if (data.weather[0].main === "Mist") {
                weatherIcon.src = "images/mist.png";
            }

            // Show weather display and hide error message
            const errorElement = document.querySelector(".error");
            const weatherElement = document.querySelector(".weather");

            if (errorElement) errorElement.style.display = "none";  // Hide error message
            if (weatherElement) weatherElement.style.display = "block";  // Show weather display
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Event listener for the search button click
searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name");
    }
});
