import React, {useEffect, useRef, useState} from 'react'
import {Navbar} from "./components/Navbar.jsx";
import {Hero} from "./components/Hero.jsx";
import clear_icon from "./assets/weather_icons/clear_icon.svg"
import cloud_icon from "./assets/weather_icons/cloud_icon.svg";
import drizzle_icon from "./assets/weather_icons/drizzle_icon.svg";
import rain_icon from "./assets/weather_icons/rain_icon.svg";
import snow_icon from "./assets/weather_icons/snow_icon.svg";

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [getCoordinates, setGetCoordinates] = useState(null);

    const inputRef = useRef(null);

    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon,
    }

    const Coordinates = async (city) => {
        try{
            const coordinatesApi = `http://api.openweathermap.org/geo/1.0/direct?q=${city},{state code},{country code}&limit=5&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`
            const response = await fetch(coordinatesApi);
            const data = await response.json();
            console.log(data);
            setGetCoordinates({
                longitude: data.coords.lon,
                latitude: data.coords.lat,
            })
        } catch (error) {
            console.log(error);
        }
    }
    const search = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const icon = allIcons[data.weather[0].icon];
            setWeatherData({
                humidity: data.main.humidity,
                WindSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                pressure: data.main.pressure,
                visibility: data.visibility,
                location: data.name,
                icon: icon,
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        search("jaipur");
    }, [])

    return (
        <div>
            <Navbar inputRef={inputRef} />
            <Hero weatherData={weatherData} />
        </div>
    )
}
export default App
