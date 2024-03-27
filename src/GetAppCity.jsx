import React, { useState } from 'react'

function GetAppCity() {

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');

    const handleSubmitCity = async (event) => {
        event.preventDefault();
        try {
            console.log('Submitting request...');
            var response = await fetch(`https://localhost:7164/WeatherTest/CityWeather?city=${city}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Data:', data);
            setWeatherData(data);

        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };
  return (
      <div>
          <form onSubmit={handleSubmitCity}>
              <label> City: &ensp;
                  <input type="text" name="city" onChange={(e) => setCity(e.target.value)} />
              </label>
              <input type="submit" name="Citysubmit" />
          </form>

          {
              weatherData && (
                  <div>
                      <p>{weatherData.main.temp}</p>
                  </div>
              )}
      </div>

     


  );
}

export default GetAppCity;