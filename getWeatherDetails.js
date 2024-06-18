const getCountryWeatherDetails = async (countryName) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );

    const [
      {
        name: { common },

        latlng: [lat, lng],

        capital: [capital],
      },
    ] = await response.json();

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
    );
    const {
      current_weather: { temperature },
    } = await weatherResponse.json();

    if (!response.ok) {
      throw new Error("Country not found");
    }
    console.log(
      `Country: ${common} Capital: ${capital} Temperature: ${temperature}°C`
    );
  } catch (error) {
    console.error(error.message);
  }
};

getCountryWeatherDetails("France");

// some improvements
/**
 * 1. Separate the API calls into separate functions
 * 2. Use the async/await syntax to make the code more readable
 * 3. Use destructuring to extract the required data from the API response
 * 4. Use the try...catch statement to handle errors
 * 5. Log the country name, capital, and temperature to the console
 * 6. Handle errors by logging the error message to the console
 * 7. Call the getCountryWeatherDetails function with a country name as an argument
 * 8. Add comments to explain the purpose of each function and block of code
 * 9. Use template literals to format the log message
 * 10. Use the fetch API to make HTTP requests to the REST Countries and Open-Meteo APIs
 * 11. Use the await keyword to wait for the API responses before continuing execution
 * 12. Use the response.ok property to check if the API request was successful
 * 13. Use the throw statement to throw an error if the country is not found
 *
 */
