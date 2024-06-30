const getweatherDetails = async (country) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!response.ok) {
      throw new Error("Fetch Failed");
    }
    const data = await response.json();
    const {
      name: { common },
      capital,
      latlng,
    } = data[0];
    console.log(common, latlng, capital);

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latlng[0]}&longitude=${latlng[1]}&current_weather=true`
    );
    const {
      current_weather_units: { temperature },
      current_weather: { temperature: unit },
    } = await weatherResponse.json();
    console.log(temperature, unit);
  } catch (err) {}
};

getweatherDetails("France");
