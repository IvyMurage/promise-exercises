const getVehiclesDetails = async () => {
  const response = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2`
  );

  if (!response.ok) {
    throw new Error("Failed to get vehicle details");
  }
  const { Results } = await response.json();
  let usa = Results.filter(
    ({ Country }) => Country === "UNITED STATES (USA)"
  ).map(({ Mfr_Name }) => Mfr_Name);
  console.log(usa);
};

getVehiclesDetails();
