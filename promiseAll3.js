const simulateRequest = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Request completed in ${time}ms`);
    }, time);
  });
};

const requestTimes = [1000, 2000, 3000];

const simulateMultipleRequests = async (requestTimes) => {
  // Your implementation here
  const fetchedTimes = requestTimes.map((time) =>
    simulateRequest(time)
  );
  return await Promise.all(fetchedTimes);
};

simulateMultipleRequests(requestTimes)
  .then((results) => {
    console.log("All requests completed:", results);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
