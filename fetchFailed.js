async function fetchFailed(url, retries) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    if (retries > 0) {
      return await fetchFailed(url, retries - 1); // Retry on error
    }
    throw new Error(err.message);
  }
}

fetchFailed("https://jsonplaceholder.typicode.com/user", 1)
  .then(() => console.log("Fetch completed"))
  .catch((err) =>
    console.error(
      "Fetch ultimately failed:",
      err.message,
      "after 5 retries"
    )
  );
