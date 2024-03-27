
import React, { useState } from 'react'

function GetAppCityForecast() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCityForecast] = useState('');

    const handleSubmitCityForecast = async (event) => {
        event.preventDefault();

        try {
            var response = await fetch(`https://localhost:7164/WeatherTest/cityForecast?city=${city}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Weather Data:', data);
            setWeatherData(data);
        }

        catch (error) {
            console.error('error fetching weather data:', error);
        }
    };
    
    return (
        <div>
            <form onSubmit={handleSubmitCityForecast}>
                <label>City : &ensp;<input type="text" name="city" onChange={(e) => setCityForecast(e.target.value)} /> </label> 
                <input type="submit" name="cityForecast" />
          
            </form>

            {
                weatherData && (
                    <div>
                        <p>{weatherData.city.country}</p>
                        <p>{weatherData.list[0].main.temp}</p>
                        <p>{weatherData.list[1].main.temp}</p>
                        <p>{weatherData.list[2].main.temp}</p>
                    </div>
                )}   
            
        </div>
  );
}

export default GetAppCityForecast;