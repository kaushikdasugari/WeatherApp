using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.VisualBasic;
using System.Net.Http.Headers;

namespace WeatherApp.Controllers
{


    [ApiController]

    [Microsoft.AspNetCore.Mvc.Route("[controller]")]
    //[Route("[controller]")]


    public class WeatherTestController : ControllerBase
    {
        private readonly ILogger<WeatherTestController> _logger;
        private readonly OpenWeatherService _openWeatherService;

        public WeatherTestController(ILogger<WeatherTestController> logger, OpenWeatherService openWeatherService)
        {
            _logger = logger;
            _openWeatherService = openWeatherService;

        }



        [HttpGet("test", Name = "TestCheck")]

        public String TestCheck()
        {

            var msg = "Hey call from test controller";
            return msg;
        }

        [HttpGet("weather", Name = "WeatherCheck")]

        public async Task<IActionResult> GetWeather(double lat, double lon)
        {
            var weatherData = await _openWeatherService.GetCurrentWeatherAsync(lat, lon);
            if (weatherData != null)
            {
                return Content(weatherData, "application/json");
            }

            else
            {
                return NotFound();
            }
        }

        [HttpGet("CityWeather")]
        public async Task<IActionResult> GetCityWeather(string city) {

            var weatherdata = await _openWeatherService.GetCityWeatherAsync(city);

            if(weatherdata != null)
            {
                return Content(weatherdata, "application/json");
            }

            else
            {
                return NotFound();
            }
        
        }

        [HttpGet("cityForecast")]

        public async Task<IActionResult> GetCityForecast(string city)
        {
            var weatherdata =  await _openWeatherService.GetCityForecastAsync(city);


            if(weatherdata != null)
            {
                return Content(weatherdata, "application/json");
            }

            else
            {
                return NotFound();
            }
        }
        
        




    }
}
