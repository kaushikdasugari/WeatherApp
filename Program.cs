
using Microsoft.Extensions.Options;

namespace WeatherApp
{
    public class Program

    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container

            builder.Services.AddHttpClient<OpenWeatherService>();
            builder.Services.AddSingleton ( new OpenWeatherService (new HttpClient(), "6a0763933b6c10b00f7266b14413b9ce"));
            builder.Services.AddControllers();

            builder.Services.AddCors(options => { options.AddPolicy("AllowedReactApp",
                 builder => builder.WithOrigins("http://localhost:5173")
                                  .AllowAnyMethod()
                                  .AllowAnyHeader());
            });
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseRouting();

            app.UseCors("AllowedReactApp");

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
