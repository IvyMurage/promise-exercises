async function fetchWithExponentialBackoff(
  url,
  options = {},
  retries = 2,
  delay = 1000,
  currentRetry = 0
) {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        "Request failed with status " + response.status
      );
    }
  } catch (error) {
    currentRetry++;
    if (currentRetry <= retries) {
      const nextDelay = delay * 2;
      console.log(
        `Retrying in ${nextDelay} ms... (${
          retries - currentRetry
        } retries left)`
      );
      await new Promise((resolve) =>
        setTimeout(resolve, nextDelay)
      );
      return fetchWithExponentialBackoff(
        url,
        options,
        retries,
        nextDelay,
        currentRetry
      );
    } else {
      throw error;
    }
  }
}

// Usage example
(async () => {
  try {
    const data = await fetchWithExponentialBackoff(
      "https://jsonplaceholder.typicode.com/pos"
    );
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
