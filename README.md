# 🌦️ Weather App

## Overview
The **Weather App** is a web application that allows users to search for current weather conditions in any city. This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch real-time weather data, including temperature, humidity, and wind speed. The app features an intuitive user interface with a search box and dynamically updates the displayed weather information with appropriate weather icons.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Features
- 🌍 **Search Weather by City**: Enter any city name to get real-time weather information.
- 🌡️ **Temperature Display**: Shows the temperature in Celsius.
- 💧 **Humidity and Wind Speed**: Displays current humidity and wind speed.
- ☁️ **Weather Icon**: Dynamically updates the weather icon based on the current weather condition.
- ⚠️ **Error Handling**: Provides a clear error message if the city is not found or the input is empty.

## Technologies Used
- **HTML**: Markup language used for structuring the app.
- **CSS**: Styles the app for a responsive and visually appealing design.
- **JavaScript**: Manages API calls and dynamic UI updates.
- **OpenWeatherMap API**: Fetches real-time weather data.

## Project Structure
```
weather-app/
│
├── images/                     # Folder containing weather icons and search button image
│   ├── search.png              # Image for the search button
│   ├── clouds.png              # Cloudy weather icon
│   ├── clear.png               # Clear weather icon
│   ├── drizzle.png             # Drizzle weather icon
│   ├── mist.png                # Mist weather icon
│   ├── rain.png                # Rainy weather icon
│   ├── humidity.png            # Humidity icon
│   └── wind.png                # Wind speed icon
│
├── index.html                  # Main HTML file containing the structure of the app
├── style.css                   # CSS file for styling the app
├── script.js                   # JavaScript file for handling API calls and UI updates
└── README.md                   # Documentation file
```

## Setup and Installation
Follow these instructions to set up the Weather App locally on your machine:

### Step 1:Clone the Repository:
To get a copy of the project up and running, first clone the repository using Git:
```
git clone https://github.com/your-username/weather-app.git
```

### Step 2:Navigate to the Project Directory:
```
cd weather-app
```

### Step 3:Create an OpenWeatherMap API Key:
You need to create an API key from OpenWeatherMap to access their weather data:
1. Sign up at OpenWeatherMap.
2. Get your free API key from the API keys section.

### Step 4:Configure the API Key:
Open script.js and replace the value of the apiKey variable with your own API key:
```
const apiKey = "your_openweathermap_api_key";
```

### Step 5:Open the index.html File:
Open the index.html file in your preferred browser to see the app in action.


## Usage
1. Enter a City Name: Type the city name in the search box (e.g., "New York").
2. Click the Search Button: Click the search button to fetch and display the weather data.
3. View the Weather Information: View temperature, humidity, and wind speed information for the specified city.


## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new feature branch (git checkout -b feature-branch-name).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature-branch-name).
5. Create a pull request.


## Contact
If you have any questions or suggestions, feel free to reach out:

Email: aishtupe1703@gmail.com
LinkedIn: Aishwarya Sambhaji Tupe
GitHub: ash-1703
