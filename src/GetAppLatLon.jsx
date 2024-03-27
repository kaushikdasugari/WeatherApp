import React, { useState } from 'react'

function GetAppLatLon() {
    const [weatherData, setWeatherData] = useState(null);
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log('Submitting request...');
        try {
            const response = await fetch(`https://localhost:7164/WeatherTest/weather?lat=${lat}&lon=${lon}`);
            console.log('Response:', response);
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

          <form onSubmit={handleSubmit}>
              <label>Latitude: &ensp;
                  <input type="text" name="lat" onChange={(e) => setLat(e.target.value)} /> </label>
              <br />
              <label>Longtitude: &ensp;
                  <input type="text" name="lon" onChange={(e) => setLon(e.target.value)} />
              </label> <br/>
              <input type="submit" name="submit"  />
          </form>

          {weatherData && (
              <div>
                  <h2>Weather Information</h2>
                  {/* Display weather information here */}
                  <p>{weatherData.main.temp}</p>
                  <p>{weatherData.sys.country}</p>
              </div>
          )}
      </div>
  );
}

export default GetAppLatLon;